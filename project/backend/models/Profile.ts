import mongoose, { Document } from 'mongoose';

interface IProfile extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  skills?: string[];
  resume?: string;
  experience?: Array<{
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
  }>;
  education?: Array<{
    degree: string;
    institution: string;
    startDate: Date;
    endDate?: Date;
    field?: string;
  }>;
}

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  location: String,
  skills: [String],
  resume: String,
  experience: [{
    title: { type: String, required: true },
    company: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: Date,
    description: String
  }],
  education: [{
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: Date,
    field: String
  }]
}, { timestamps: true });

const Profile = mongoose.model<IProfile>('Profile', profileSchema);
export default Profile;