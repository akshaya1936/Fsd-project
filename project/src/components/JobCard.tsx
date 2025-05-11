import { Link } from 'react-router-dom';
import { MapPinIcon as MapPin, BuildingIcon as Building, ClockIcon as Clock, DollarSignIcon as CurrencyDollar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface JobCardProps {
  job: {
    _id: string;
    title: string;
    company: string;
    location: string;
    category: string;
    salary: {
      min: number;
      max: number;
    };
    createdAt: string;
    logo?: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/jobs/${job._id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          {job.logo ? (
            <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 object-contain" />
          ) : (
            <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
              <Building className="w-6 h-6 text-gray-400" />
            </div>
          )}
          
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.company}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
              </div>
              <div className="flex items-center text-gray-500">
                <CurrencyDollar className="w-4 h-4 mr-2" />
                ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
              </div>
              <div className="text-primary-600 bg-primary-50 px-3 py-1 rounded-full text-sm inline-flex items-center">
                {job.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;