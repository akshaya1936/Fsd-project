import { useState, useEffect } from 'react';
import { applicationApi } from '../services/api';
import { formatDistanceToNow } from 'date-fns';

const MyApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await applicationApi.getMyApplications();
      setApplications(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">My Applications</h2>
      {applications.length === 0 ? (
        <p className="text-gray-600">You haven't applied to any jobs yet.</p>
      ) : (
        applications.map((app: any) => (
          <div key={app._id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{app.jobId.title}</h3>
                <p className="text-gray-600">{app.jobId.company}</p>
                <p className="text-sm text-gray-500">
                  Applied {formatDistanceToNow(new Date(app.appliedAt))} ago
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm ${
                app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyApplicationsList;