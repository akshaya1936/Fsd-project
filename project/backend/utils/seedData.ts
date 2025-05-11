import mongoose from 'mongoose';
import Job from '../models/Job';
import User from '../models/User';

const sampleJobs = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    logo: "https://example.com/logo1.png",
    location: "Singapore",
    level: "Senior",
    category: "Programming",
    description: "We are looking for an experienced Frontend Developer...",
    domain: "Web Development",
    salary: {
      min: 5000,
      max: 8000
    },
    companyDetails: {
      size: "100-500",
      industry: "Information Technology",
      website: "https://techcorp.com"
    }
  },
  {
    title: "Data Scientist",
    company: "DataTech",
    logo: "https://example.com/logo2.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Data Science",
    description: "Looking for a passionate Data Scientist...",
    domain: "Machine Learning",
    salary: {
      min: 6000,
      max: 9000
    },
    companyDetails: {
      size: "50-200",
      industry: "Data Analytics",
      website: "https://datatech.com"
    }
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Singapore",
    level: "Mid-Level",
    category: "Programming",
    description: "Looking for a Full Stack Developer...",
    domain: "Web Development",
    salary: {
      min: 5500,
      max: 8500
    },
    companyDetails: {
      size: "50-200",
      industry: "Software Development"
    }
  },
  {
    title: "Software Engineer",
    company: "TechGlobal",
    logo: "https://example.com/logo3.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Full-time",
    description: "Looking for a Software Engineer with strong backend skills...",
    domain: "Backend Development",
    salary: {
      min: 6000,
      max: 9000
    },
    companyDetails: {
      size: "500+",
      industry: "Technology",
      website: "https://techglobal.com"
    }
  },
  {
    title: "UX Designer",
    company: "DesignHub",
    logo: "https://example.com/logo4.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Seeking an experienced UX Designer...",
    domain: "Design",
    salary: {
      min: 7000,
      max: 10000
    },
    companyDetails: {
      size: "50-200",
      industry: "Design",
      website: "https://designhub.com"
    }
  },
  {
    title: "Senior Backend Engineer",
    company: "CloudTech Solutions",
    logo: "https://example.com/cloudtech.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Join our cloud infrastructure team...",
    domain: "Backend Development",
    salary: { min: 8000, max: 12000 },
    companyDetails: { size: "200-500", industry: "Cloud Computing" }
  },
  {
    title: "Product Manager",
    company: "InnovateCo",
    logo: "https://example.com/innovateco.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Lead product development initiatives...",
    domain: "Product Management",
    salary: { min: 9000, max: 14000 },
    companyDetails: { size: "100-200", industry: "Technology" }
  },
  {
    title: "DevOps Engineer",
    company: "TechOps",
    logo: "https://example.com/techops.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Full-time",
    description: "Manage CI/CD pipelines...",
    domain: "DevOps",
    salary: { min: 6500, max: 9500 },
    companyDetails: { size: "50-100", industry: "Technology" }
  },
  {
    title: "Mobile App Developer",
    company: "AppWorks",
    logo: "https://example.com/appworks.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Contract",
    description: "Develop iOS and Android applications...",
    domain: "Mobile Development",
    salary: { min: 6000, max: 9000 },
    companyDetails: { size: "20-50", industry: "Mobile Technology" }
  },
  {
    title: "UI/UX Designer",
    company: "DesignPro",
    logo: "https://example.com/designpro.png",
    location: "Singapore",
    level: "Junior",
    category: "Part-time",
    description: "Create user-centered designs...",
    domain: "Design",
    salary: { min: 4000, max: 6000 },
    companyDetails: { size: "10-20", industry: "Design" }
  },
  {
    title: "Data Engineer",
    company: "DataFlow",
    logo: "https://example.com/dataflow.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Build data pipelines...",
    domain: "Data Engineering",
    salary: { min: 7500, max: 11000 },
    companyDetails: { size: "100-200", industry: "Data Analytics" }
  },
  {
    title: "Python Developer",
    company: "AI Solutions",
    logo: "https://example.com/aisolutions.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Full-time",
    description: "Develop AI and ML solutions...",
    domain: "Artificial Intelligence",
    salary: { min: 7000, max: 10000 },
    companyDetails: { size: "50-200", industry: "AI & Machine Learning" }
  },
  {
    title: "Cloud Architect",
    company: "CloudSys",
    logo: "https://example.com/cloudsys.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Design and implement cloud infrastructure...",
    domain: "Cloud Computing",
    salary: { min: 10000, max: 15000 },
    companyDetails: { size: "200-500", industry: "Cloud Technology" }
  },
  {
    title: "Business Analyst",
    company: "BizTech",
    logo: "https://example.com/biztech.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Full-time",
    description: "Analyze business requirements...",
    domain: "Business Analysis",
    salary: { min: 5500, max: 8500 },
    companyDetails: { size: "100-200", industry: "Consulting" }
  },
  {
    title: "React Developer",
    company: "WebTech",
    logo: "https://example.com/logo5.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Full-time",
    description: "Looking for React Developer...",
    domain: "Frontend",
    salary: { min: 5000, max: 8000 },
    companyDetails: { size: "100-500", industry: "Technology" }
  },
  {
    title: "Node.js Developer",
    company: "ServerTech",
    logo: "https://example.com/logo6.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Experienced Node.js Developer needed...",
    domain: "Backend",
    salary: { min: 6000, max: 9000 },
    companyDetails: { size: "50-200", industry: "Technology" }
  },
  {
    title: "Systems Administrator",
    company: "SysOps",
    logo: "https://example.com/sysops.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "IT Operations",
    description: "Manage and maintain IT infrastructure...",
    domain: "IT Operations",
    salary: { min: 6000, max: 9000 },
    companyDetails: { size: "100-200", industry: "Technology" }
  },
  {
    title: "Database Administrator",
    company: "DataCore",
    logo: "https://example.com/datacore.png",
    location: "Singapore",
    level: "Senior",
    category: "Database",
    description: "Manage and optimize database performance...",
    domain: "Database Management",
    salary: { min: 7500, max: 11000 },
    companyDetails: { size: "200-500", industry: "Technology" }
  },
  {
    title: "Network Engineer",
    company: "NetConnect",
    logo: "https://example.com/netconnect.png",
    location: "Singapore",
    level: "Senior",
    category: "Networking",
    description: "Design and implement network solutions...",
    domain: "Network Infrastructure",
    salary: { min: 7000, max: 10000 },
    companyDetails: { size: "100-300", industry: "Telecommunications" }
  },
  {
    title: "Security Engineer",
    company: "SecureNet",
    logo: "https://example.com/securenet.png",
    location: "Singapore",
    level: "Senior",
    category: "Security",
    description: "Implement and maintain security measures...",
    domain: "Cybersecurity",
    salary: { min: 8000, max: 12000 },
    companyDetails: { size: "100-300", industry: "Cybersecurity" }
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Labs",
    logo: "https://example.com/ailabs.png",
    location: "Singapore",
    level: "Senior",
    category: "AI/ML",
    description: "Develop machine learning models...",
    domain: "Artificial Intelligence",
    salary: { min: 8500, max: 13000 },
    companyDetails: { size: "50-200", industry: "AI & Machine Learning" }
  },
  {
    title: "Digital Marketing Manager",
    company: "MarketPro",
    logo: "https://example.com/marketpro.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Full-time",
    description: "Lead digital marketing campaigns...",
    domain: "Marketing",
    salary: { min: 6000, max: 9000 },
    companyDetails: { size: "20-50", industry: "Digital Marketing" }
  },
  {
    title: "Quality Assurance Engineer",
    company: "QualityTech",
    logo: "https://example.com/qualitytech.png",
    location: "Singapore",
    level: "Mid-Level",
    category: "Full-time",
    description: "Ensure software quality through testing...",
    domain: "Quality Assurance",
    salary: { min: 5500, max: 8500 },
    companyDetails: { size: "100-200", industry: "Technology" }
  },
  {
    title: "Blockchain Developer",
    company: "ChainTech",
    logo: "https://example.com/chaintech.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Develop blockchain solutions...",
    domain: "Blockchain",
    salary: { min: 8000, max: 13000 },
    companyDetails: { size: "50-100", industry: "Blockchain Technology" }
  },
  {
    title: "Technical Project Manager",
    company: "ProjectFlow",
    logo: "https://example.com/projectflow.png",
    location: "Singapore",
    level: "Senior",
    category: "Full-time",
    description: "Lead technical projects from inception to delivery...",
    domain: "Project Management",
    salary: { min: 8500, max: 12000 },
    companyDetails: { size: "200-500", industry: "Technology" }
  }
]; // Make sure to close the array with ]

// Keep your existing functions
async function createDefaultUser() {
  // ... existing code ...
}

async function seedData() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/jobportal');
    
    // Create a default recruiter if not exists
    const recruiter = await User.findOneAndUpdate(
      { email: 'recruiter@example.com' },
      {
        name: 'Default Recruiter',
        email: 'recruiter@example.com',
        password: 'password123',
        userType: 'recruiter'
      },
      { upsert: true, new: true }
    );

    // Clear existing jobs
    await Job.deleteMany({});
    
    // Add postedBy field to each job
    const jobsWithRecruiter = sampleJobs.map(job => ({
      ...job,
      postedBy: recruiter._id
    }));
    
    // Insert all sample jobs
    await Job.insertMany(jobsWithRecruiter);
    
    console.log('Sample jobs seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData();