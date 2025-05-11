import { useState, useEffect } from 'react';
import { jobsApi } from '../services/api';
import JobCard from '../components/JobCard';
import SearchBox from '../components/SearchBox';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    category: [],
    domain: [],
    industry: [],
    salary: { min: '', max: '' }
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    fetchJobs(filters);
  }, [filters, currentPage]);

  const fetchJobs = async (searchFilters = {}) => {
    try {
      setLoading(true);
      const data = await jobsApi.getAllJobs({
        ...searchFilters,
        page: currentPage,
        limit: pageSize
      });
      setJobs(data.jobs);
      setTotalPages(Math.ceil(data.total / pageSize));
      setError(null);
    } catch (error) {
      setError('Failed to fetch jobs');
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSearch = ({ keyword, location }: { keyword: string; location: string }) => {
    setFilters(prev => ({ ...prev, keyword, location }));
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (loading) return <div className="flex justify-center p-8">Loading...</div>;
  if (error) return <div className="text-red-600 p-8 text-center">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBox onSearch={handleSearch} />
      <div className="flex gap-8">
        <aside className="w-1/4">
          <CategoryFilter onFilterChange={handleFilterChange} />
        </aside>
        <main className="w-3/4">
          <div className="grid gap-6">
            {jobs.length === 0 ? (
              <div className="text-center text-gray-600">No jobs found matching your criteria</div>
            ) : (
              jobs.map((job: any) => (
                <JobCard key={job._id} job={job} />
              ))
            )}
          </div>
        </main>
      </div>
      
      {!loading && !error && jobs.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default JobsPage;