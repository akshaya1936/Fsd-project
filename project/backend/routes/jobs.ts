import express, { Request } from 'express';
import { authenticateToken } from '../middleware/auth';
import Job from '../models/Job';

// Add this interface
interface AuthRequest extends Request {
  user?: {
    userId: string;
    userType: string;
  };
}

const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const {
      keyword,
      location,
      category,
      domain,
      industry,
      salary,
      page = 1,
      limit = 10
    } = req.query;

    const query: any = {};

    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: 'i' } },
        { company: { $regex: keyword, $options: 'i' } }
      ];
    }

    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    if (category) {
      query.category = { $regex: category, $options: 'i' };
    }

    if (domain) {
      query.domain = { $regex: domain, $options: 'i' };
    }

    const jobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Job.countDocuments(query);

    res.json({ jobs, total });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

// Create job
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user || req.user.userType !== 'recruiter') {
      return res.status(403).json({ message: 'Only recruiters can post jobs' });
    }

    const jobData = {
      ...req.body,
      postedBy: req.user.userId
    };

    const job = new Job(jobData);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Error creating job' });
  }
});

export default router;