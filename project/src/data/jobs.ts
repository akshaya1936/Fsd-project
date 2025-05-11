export interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  level: string;
  category: string;
  description: string;
  domain: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  companyDetails: {
    size: string;
    industry: string;
    website?: string;
  };
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    logo: "/company-logos/techcorp.png",
    location: "New York, USA",
    level: "Senior",
    category: "Programming",
    description: "Looking for an experienced full stack developer...",
    domain: "Web Development",
    salary: {
      min: 120000,
      max: 180000,
      currency: "USD"
    },
    companyDetails: {
      size: "500-1000",
      industry: "Information Technology",
      website: "www.techcorp.com"
    }
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Analytics Pro",
    logo: "/company-logos/analytics.png",
    location: "San Francisco, USA",
    level: "Mid-Level",
    category: "Data Science",
    description: "Join our data science team...",
    domain: "Data Analytics",
    salary: {
      min: 95000,
      max: 145000,
      currency: "USD"
    },
    companyDetails: {
      size: "100-500",
      industry: "Data Analytics",
      website: "www.analyticspro.com"
    }
  },
  {
    id: 3,
    title: "Cloud Engineer",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
    location: "Hyderabad",
    level: "Intermediate Level",
    category: "Programming",
    description: "Join our technology team as a Cloud Engineer...",
    domain: "Cloud Computing",
    salary: {
      min: 2000000,
      max: 4000000,
      currency: "INR"
    },
    companyDetails: {
      size: "10000+",
      industry: "Technology",
      website: "www.google.com"
    }
  },
  {
    id: 4,
    title: "Network Security Engineer",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
    location: "Bangalore",
    level: "Senior Level",
    category: "Cybersecurity",
    description: "We are seeking a Network Security Engineer to protect our organization's IT infrastructure...",
    domain: "Network Security",
    salary: {
      min: 2500000,
      max: 4500000,
      currency: "INR"
    },
    companyDetails: {
      size: "10000+",
      industry: "Technology",
      website: "www.google.com"
    }
  },
  {
    id: 5,
    title: "Software Tester",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
    location: "Chennai",
    level: "Intermediate Level",
    category: "Programming",
    description: "As a Software Tester, you will play a critical role...",
    domain: "Quality Assurance",
    salary: {
      min: 1800000,
      max: 3500000,
      currency: "INR"
    },
    companyDetails: {
      size: "10000+",
      industry: "Technology",
      website: "www.google.com"
    }
  },
  {
    id: 6,
    title: "Graphic Designer",
    company: "DigitalEdge",
    logo: "/company-logos/digitaledge.png",
    location: "Paris, France",
    level: "Mid-Level",
    category: "Designing",
    description: "Execute digital marketing campaigns across multiple channels...",
    domain: "Visual Design",
    salary: {
      min: 35000,
      max: 50000,
      currency: "EUR"
    },
    companyDetails: {
      size: "100-300",
      industry: "Creative Design",
      website: "www.digitaledge.fr"
    }
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Design & Creative",
    logo: "/company-logos/creativesolutions.png",
    location: "Singapore",
    level: "Senior",
    category: "Designing",
    description: "Create immersive AR/VR experiences...",
    domain: "User Experience",
    salary: {
      min: 80000,
      max: 120000,
      currency: "SGD"
    },
    companyDetails: {
      size: "200-500",
      industry: "Design Services",
      website: "www.designcreative.sg"
    }
  },
  {
    id: 8,
    title: "Cloud Security Engineer",
    company: "SecureCloud Inc",
    logo: "/company-logos/securecloudinc.png",
    location: "Singapore",
    level: "Senior",
    category: "Cybersecurity",
    description: "Lead marketing campaigns and strategy...",
    domain: "Cloud Security",
    salary: {
      min: 90000,
      max: 140000,
      currency: "SGD"
    },
    companyDetails: {
      size: "300-700",
      industry: "Cybersecurity",
      website: "www.securecloudinc.sg"
    }
  },
  {
    id: 9,
    title: "Marketing Manager",
    company: "Global Marketing Co",
    logo: "/company-logos/marketing.png",
    location: "Singapore",
    level: "Senior",
    category: "Marketing",
    description: "Lead marketing campaigns and strategy...",
    domain: "Digital Marketing",
    salary: {
      min: 85000,
      max: 130000,
      currency: "SGD"
    },
    companyDetails: {
      size: "200-500",
      industry: "Marketing",
      website: "www.globalmarketing.sg"
    }
  },
  {
    id: 10,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    logo: "/company-logos/cloudtech.png",
    location: "Austin, USA",
    level: "Mid-Level",
    category: "Programming",
    description: "Implement and maintain CI/CD pipelines...",
    domain: "DevOps",
    salary: {
      min: 95000,
      max: 145000,
      currency: "USD"
    },
    companyDetails: {
      size: "100-500",
      industry: "Cloud Services",
      website: "www.cloudtech.com"
    }
  },
  {
    id: 11,
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    logo: "/company-logos/ai.png",
    location: "Boston, USA",
    level: "Senior",
    category: "Data Science",
    description: "Develop and deploy ML models...",
    domain: "Machine Learning",
    salary: {
      min: 130000,
      max: 180000,
      currency: "USD"
    },
    companyDetails: {
      size: "100-300",
      industry: "Artificial Intelligence",
      website: "www.aiinnovations.com"
    }
  },
  {
    id: 12,
    title: "Product Manager",
    company: "Product First",
    logo: "/company-logos/product.png",
    location: "Toronto, Canada",
    level: "Senior",
    category: "Management",
    description: "Lead product development and strategy...",
    domain: "Product Management",
    salary: {
      min: 110000,
      max: 160000,
      currency: "CAD"
    },
    companyDetails: {
      size: "200-500",
      industry: "Product Development",
      website: "www.productfirst.ca"
    }
  },
  {
    id: 13,
    title: "Network Administrator",
    company: "NetCore Systems",
    logo: "/company-logos/netcore.png",
    location: "Chicago, USA",
    level: "Mid-Level",
    category: "Networking",
    description: "Manage and maintain network infrastructure...",
    domain: "Network Administration",
    salary: {
      min: 75000,
      max: 110000,
      currency: "USD"
    },
    companyDetails: {
      size: "100-300",
      industry: "IT Infrastructure",
      website: "www.netcore.com"
    }
  },
  {
    id: 14,
    title: "Frontend Developer",
    company: "WebUI Pro",
    logo: "/company-logos/webui.png",
    location: "Berlin, Germany",
    level: "Junior",
    category: "Programming",
    description: "Create responsive and modern web interfaces...",
    domain: "Frontend Development",
    salary: {
      min: 45000,
      max: 65000,
      currency: "EUR"
    },
    companyDetails: {
      size: "50-200",
      industry: "Web Development",
      website: "www.webuipro.de"
    }
  },
  {
    id: 15,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    logo: "/company-logos/securenet.png",
    location: "Sydney, Australia",
    level: "Mid-Level",
    category: "Cybersecurity",
    description: "Monitor and protect against security threats...",
    domain: "Information Security",
    salary: {
      min: 90000,
      max: 130000,
      currency: "AUD"
    },
    companyDetails: {
      size: "200-500",
      industry: "Cybersecurity",
      website: "www.securenet.com.au"
    }
  },
  {
    id: 16,
    title: "Content Marketing Manager",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
    location: "Mumbai",
    level: "Senior Level",
    category: "Marketing",
    description: "We are looking for a Content Marketing Manager to lead our content strategy...",
    domain: "Content Strategy",
    salary: {
      min: 2200000,
      max: 3500000,
      currency: "INR"
    },
    companyDetails: {
      size: "10000+",
      industry: "Technology",
      website: "www.google.com"
    }
  },
  {
    id: 17,
    title: "Human Resources Specialist",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
    location: "Washington",
    level: "Intermediate Level",
    category: "Management",
    description: "As a Human Resources Specialist, you will support various HR functions...",
    domain: "Human Resources",
    salary: {
      min: 85000,
      max: 120000,
      currency: "USD"
    },
    companyDetails: {
      size: "10000+",
      industry: "Technology",
      website: "www.google.com"
    }
  },
  {
    id: 18,
    title: "Mobile App Developer",
    company: "AppTech Solutions",
    logo: "/company-logos/apptech.png",
    location: "Dubai, UAE",
    level: "Senior",
    category: "Programming",
    description: "Develop innovative mobile applications for iOS and Android platforms...",
    domain: "Mobile Development",
    salary: {
      min: 25000,
      max: 35000,
      currency: "AED"
    },
    companyDetails: {
      size: "100-300",
      industry: "Mobile Technology",
      website: "www.apptech.ae"
    }
  },
  {
    id: 19,
    title: "Business Intelligence Analyst",
    company: "DataCorp",
    logo: "/company-logos/datacorp.png",
    location: "Melbourne, Australia",
    level: "Mid-Level",
    category: "Data Science",
    description: "Transform complex data into actionable business insights...",
    domain: "Business Intelligence",
    salary: {
      min: 85000,
      max: 120000,
      currency: "AUD"
    },
    companyDetails: {
      size: "200-500",
      industry: "Data Analytics",
      website: "www.datacorp.com.au"
    }
  },
  {
    id: 20,
    title: "Technical Project Manager",
    company: "ProjectPro",
    logo: "/company-logos/projectpro.png",
    location: "Vancouver, Canada",
    level: "Senior",
    category: "Management",
    description: "Lead technical projects from conception to delivery...",
    domain: "Project Management",
    salary: {
      min: 100000,
      max: 150000,
      currency: "CAD"
    },
    companyDetails: {
      size: "100-300",
      industry: "Project Management",
      website: "www.projectpro.ca"
    }
  },
  {
    id: 21,
    title: "Blockchain Developer",
    company: "CryptoTech",
    logo: "/company-logos/cryptotech.png",
    location: "Zurich, Switzerland",
    level: "Senior",
    category: "Programming",
    description: "Develop and implement blockchain solutions...",
    domain: "Blockchain",
    salary: {
      min: 120000,
      max: 180000,
      currency: "CHF"
    },
    companyDetails: {
      size: "50-200",
      industry: "Blockchain Technology",
      website: "www.cryptotech.ch"
    }
  },
  {
    id: 22,
    title: "Digital Marketing Specialist",
    company: "DigitalEdge",
    logo: "/company-logos/digitaledge.png",
    location: "Paris, France",
    level: "Mid-Level",
    category: "Marketing",
    description: "Execute digital marketing campaigns across multiple channels...",
    domain: "Digital Marketing",
    salary: {
      min: 40000,
      max: 55000,
      currency: "EUR"
    },
    companyDetails: {
      size: "100-300",
      industry: "Digital Marketing",
      website: "www.digitaledge.fr"
    }
  },
  {
    id: 23,
    title: "Systems Architect",
    company: "ArchitectPro",
    logo: "/company-logos/architectpro.png",
    location: "Stockholm, Sweden",
    level: "Senior",
    category: "Programming",
    description: "Design and oversee implementation of complex IT systems...",
    domain: "Systems Architecture",
    salary: {
      min: 550000,
      max: 750000,
      currency: "SEK"
    },
    companyDetails: {
      size: "200-500",
      industry: "IT Infrastructure",
      website: "www.architectpro.se"
    }
  },
  {
    id: 24,
    title: "Quality Assurance Lead",
    company: "QualityFirst",
    logo: "/company-logos/qualityfirst.png",
    location: "Amsterdam, Netherlands",
    level: "Senior",
    category: "Programming",
    description: "Lead QA team and ensure software quality standards...",
    domain: "Quality Assurance",
    salary: {
      min: 55000,
      max: 75000,
      currency: "EUR"
    },
    companyDetails: {
      size: "100-300",
      industry: "Software Quality",
      website: "www.qualityfirst.nl"
    }
  },
  {
    id: 25,
    title: "AR/VR Developer",
    company: "VirtualTech",
    logo: "/company-logos/virtualtech.png",
    location: "Seoul, South Korea",
    level: "Mid-Level",
    category: "Programming",
    description: "Create immersive AR/VR experiences...",
    domain: "Extended Reality",
    salary: {
      min: 50000000,
      max: 70000000,
      currency: "KRW"
    },
    companyDetails: {
      size: "100-300",
      industry: "Virtual Reality",
      website: "www.virtualtech.kr"
    }
  },
  {
    id: 26,
    title: "IT Security Manager",
    company: "SecureIT",
    logo: "/company-logos/secureit.png",
    location: "Madrid, Spain",
    level: "Senior",
    category: "Cybersecurity",
    description: "Manage overall IT security strategy and team...",
    domain: "Information Security",
    salary: {
      min: 50000,
      max: 70000,
      currency: "EUR"
    },
    companyDetails: {
      size: "200-500",
      industry: "Cybersecurity",
      website: "www.secureit.es"
    }
  },
  {
    id: 27,
    title: "Database Administrator",
    company: "DataSafe",
    logo: "/company-logos/datasafe.png",
    location: "Mumbai, India",
    level: "Mid-Level",
    category: "Data Science",
    description: "Manage and optimize database performance...",
    domain: "Database Management",
    salary: {
      min: 1500000,
      max: 2500000,
      currency: "INR"
    },
    companyDetails: {
      size: "100-300",
      industry: "Data Management",
      website: "www.datasafe.in"
    }
  },
  {
    id: 28,
    title: "UX Researcher",
    company: "UserFirst",
    logo: "/company-logos/userfirst.png",
    location: "Oslo, Norway",
    level: "Mid-Level",
    category: "Designing",
    description: "Conduct user research and usability testing...",
    domain: "User Research",
    salary: {
      min: 600000,
      max: 800000,
      currency: "NOK"
    },
    companyDetails: {
      size: "50-200",
      industry: "User Experience",
      website: "www.userfirst.no"
    }
  },
  {
    id: 29,
    title: "Cloud Solutions Architect",
    company: "CloudArch",
    logo: "/company-logos/cloudarch.png",
    location: "Dublin, Ireland",
    level: "Senior",
    category: "Programming",
    description: "Design and implement cloud-based solutions...",
    domain: "Cloud Architecture",
    salary: {
      min: 75000,
      max: 110000,
      currency: "EUR"
    },
    companyDetails: {
      size: "100-300",
      industry: "Cloud Computing",
      website: "www.cloudarch.ie"
    }
  },
  {
    id: 30,
    title: "AI Research Scientist",
    company: "AIResearch",
    logo: "/company-logos/airesearch.png",
    location: "Tokyo, Japan",
    level: "Senior",
    category: "Data Science",
    description: "Conduct cutting-edge research in artificial intelligence...",
    domain: "Artificial Intelligence",
    salary: {
      min: 8000000,
      max: 12000000,
      currency: "JPY"
    },
    companyDetails: {
      size: "100-300",
      industry: "AI Research",
      website: "www.airesearch.jp"
    }
  },
  {
    id: 31,
    title: "Technical Writer",
    company: "DocPro",
    logo: "/company-logos/docpro.png",
    location: "Helsinki, Finland",
    level: "Mid-Level",
    category: "Content",
    description: "Create technical documentation and user guides...",
    domain: "Technical Documentation",
    salary: {
      min: 45000,
      max: 60000,
      currency: "EUR"
    },
    companyDetails: {
      size: "50-200",
      industry: "Technical Documentation",
      website: "www.docpro.fi"
    }
  },
  {
    id: 32,
    title: "IoT Developer",
    company: "IoTech",
    logo: "/company-logos/iotech.png",
    location: "Tel Aviv, Israel",
    level: "Senior",
    category: "Programming",
    description: "Develop solutions for Internet of Things devices...",
    domain: "Internet of Things",
    salary: {
      min: 180000,
      max: 250000,
      currency: "ILS"
    },
    companyDetails: {
      size: "100-300",
      industry: "IoT Technology",
      website: "www.iotech.il"
    }
  }
];