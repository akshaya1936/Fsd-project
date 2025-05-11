import mongoose, { Document } from 'mongoose';

interface IApplication extends Document {
  jobId: mongoose.Types.ObjectId;
  applicantId: mongoose.Types.ObjectId;
  status: 'pending' | 'accepted' | 'rejected';
  coverLetter: string;
  resume: string;
  appliedAt: Date;
  updatedAt: Date;
}

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'rejected'], 
    default: 'pending' 
  },
  coverLetter: { type: String, required: true },
  resume: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Application = mongoose.model<IApplication>('Application', applicationSchema);
export default Application;