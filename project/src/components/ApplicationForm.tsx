import { useState } from 'react';
import { applicationApi } from '../services/api';

interface ApplicationFormProps {
  jobId: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const ApplicationForm = ({ jobId, onSuccess, onCancel }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    coverLetter: '',
    resume: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await applicationApi.submitApplication(jobId, formData);
      onSuccess();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Submit Application</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Cover Letter</label>
          <textarea
            value={formData.coverLetter}
            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
            className="w-full p-2 border rounded-md h-32"
            placeholder="Write your cover letter..."
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Resume Link</label>
          <input
            type="url"
            value={formData.resume}
            onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your resume URL"
            required
            disabled={loading}
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;