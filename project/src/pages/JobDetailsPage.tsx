import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { jobsApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import ApplicationForm from '../components/ApplicationForm';
import JobApplicationsList from '../components/JobApplicationsList';

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { userType } = useAuth();
  const [job, setJob] = useState<any>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    try {
      const data = await jobsApi.getJobById(id!);
      setJob(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch job details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h1>
          <div className="mb-6">
            <p className="text-lg text-gray-700">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
          </div>
          
          <div className="prose max-w-none mb-6">
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p>{job.description}</p>
          </div>

          {userType === 'jobseeker' && (
            <div className="mt-6">
              {!showApplicationForm ? (
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Apply Now
                </button>
              ) : (
                <ApplicationForm
                  jobId={id!}
                  onSuccess={() => {
                    setShowApplicationForm(false);
                    // Optionally show success message
                  }}
                  onCancel={() => setShowApplicationForm(false)}
                />
              )}
            </div>
          )}
        </div>

        {userType === 'recruiter' && (
          <div className="mt-8">
            <JobApplicationsList jobId={id!} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetailsPage;