import { useState, useEffect } from 'react';
import { applicationApi } from '../services/api';
import { formatDistanceToNow } from 'date-fns';

interface JobApplicationsListProps {
  jobId: string;
}

const JobApplicationsList = ({ jobId }: JobApplicationsListProps) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApplications();
  }, [jobId]);

  const fetchApplications = async () => {
    try {
      const data = await applicationApi.getJobApplications(jobId);
      setApplications(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (applicationId: string, newStatus: string) => {
    try {
      await applicationApi.updateApplicationStatus(applicationId, newStatus);
      fetchApplications(); // Refresh the list
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update status');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Applications ({applications.length})</h2>
      {applications.length === 0 ? (
        <p className="text-gray-600">No applications received yet.</p>
      ) : (
        applications.map((app: any) => (
          <div key={app._id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{app.applicantId.name}</h3>
                <p className="text-gray-600">{app.applicantId.email}</p>
                <p className="text-sm text-gray-500">
                  Applied {formatDistanceToNow(new Date(app.appliedAt))} ago
                </p>
                <div className="mt-2">
                  <a 
                    href={app.resume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    View Resume
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <select
                  value={app.status}
                  onChange={(e) => handleStatusUpdate(app._id, e.target.value)}
                  className="border rounded-md px-2 py-1"
                >
                  <option value="pending">Pending</option>
                  <option value="accepted">Accept</option>
                  <option value="rejected">Reject</option>
                </select>
              </div>
            </div>
            {app.coverLetter && (
              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-700">{app.coverLetter}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default JobApplicationsList;