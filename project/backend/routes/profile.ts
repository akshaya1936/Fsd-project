import express, { Request } from 'express';
import { authenticateToken } from '../middleware/auth';
import Profile from '../models/Profile';
import User from '../models/User';

interface AuthRequest extends Request {
  user?: {
    userId: string;
    userType: string;
  };
}

const router = express.Router();

// Get user profile
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOne({ userId: req.user.userId });
    if (!profile) {
      const user = await User.findById(req.user.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      const newProfile = new Profile({
        userId: user._id,
        name: user.name,
        email: user.email
      });
      await newProfile.save();
      return res.json(newProfile);
    }
    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// Update all route handlers to use AuthRequest and check for req.user
router.put('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Error updating profile' });
  }
});

// Add experience
router.post('/experience', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      { $push: { experience: req.body } },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error adding experience:', error);
    res.status(500).json({ message: 'Error adding experience' });
  }
});

// Update experience
router.put('/experience/:expId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOneAndUpdate(
      { 
        userId: req.user.userId,
        'experience._id': req.params.expId 
      },
      { $set: { 'experience.$': req.body } },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error updating experience:', error);
    res.status(500).json({ message: 'Error updating experience' });
  }
});

// Delete experience
router.delete('/experience/:expId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      { $pull: { experience: { _id: req.params.expId } } },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error deleting experience:', error);
    res.status(500).json({ message: 'Error deleting experience' });
  }
});

// Add education
router.post('/education', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      { $push: { education: req.body } },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error adding education:', error);
    res.status(500).json({ message: 'Error adding education' });
  }
});

// Update education
router.put('/education/:eduId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOneAndUpdate(
      { 
        userId: req.user.userId,
        'education._id': req.params.eduId 
      },
      { $set: { 'education.$': req.body } },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error updating education:', error);
    res.status(500).json({ message: 'Error updating education' });
  }
});

// Delete education
router.delete('/education/:eduId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      { $pull: { education: { _id: req.params.eduId } } },
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error deleting education:', error);
    res.status(500).json({ message: 'Error deleting education' });
  }
});

export default router;