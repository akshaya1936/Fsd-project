import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const UnauthorizedPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-8">
          You don't have permission to access this page.
        </p>
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Return to Jobs
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;