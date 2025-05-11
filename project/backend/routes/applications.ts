import express, { Request } from 'express';
import { authenticateToken } from '../middleware/auth';
import Application from '../models/Application';
import Job from '../models/Job';

interface AuthRequest extends Request {
  user?: {
    userId: string;
    userType: string;
  };
}

const router = express.Router();

router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const { jobId, coverLetter, resume } = req.body;
    
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const application = new Application({
      jobId,
      applicantId: req.user.userId,
      coverLetter,
      resume
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ message: 'Error submitting application' });
  }
});

// Update status route
router.patch('/:id/status', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (req.user.userType !== 'recruiter') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const { status } = req.body;
    const application = await Application.findById(req.params.id)
      .populate('jobId');

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    const job = await Job.findById(application.jobId);
    if (!job || job.postedBy.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized to update this application' });
    }

    application.status = status;
    await application.save();

    res.json(application);
  } catch (error) {
    console.error('Error updating application status:', error);
    res.status(500).json({ message: 'Error updating application status' });
  }
});

export default router;