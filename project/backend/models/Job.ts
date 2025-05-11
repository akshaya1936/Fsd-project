import mongoose, { Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  company: string;
  logo?: string;
  location: string;
  level: string;
  category: string;
  description: string;
  domain: string;
  salary: {
    min: number;
    max: number;
  };
  requirements: string[];
  postedBy: mongoose.Types.ObjectId;
  companyDetails: {
    size: string;
    industry: string;
  };
}

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  logo: { type: String },
  location: { type: String, required: true },
  level: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  domain: { type: String, required: true },
  salary: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  requirements: [{ type: String }],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyDetails: {
    size: { type: String },
    industry: { type: String }
  }
}, { timestamps: true });

const Job = mongoose.model<IJob>('Job', jobSchema);
export default Job;