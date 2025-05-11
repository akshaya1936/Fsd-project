import JobCard from './JobCard';
import { jobs } from '../data/jobs';

type JobListingProps = {
  categoryFilters: string[];
  locationFilters: string[];
};

const JobListing = ({ categoryFilters, locationFilters }: JobListingProps) => {
  const filteredJobs = jobs.filter(job => {
    const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(job.category);
    const matchesLocation = locationFilters.length === 0 || locationFilters.includes(job.location);
    return matchesCategory && matchesLocation;
  });

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Latest jobs</h2>
        <p className="text-gray-600">Get your desired job from top companies</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map(job => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            logo={job.logo}
            location={job.location}
            level={job.level}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
};

export default JobListing;