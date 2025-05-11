import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { isAuthenticated, userType, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="text-primary-600 h-6 w-6" />
            <span className="text-xl font-semibold text-gray-900">JobConnect360</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <Link to="/jobs" className="text-gray-600 hover:text-primary-600">
                  Browse Jobs
                </Link>
                {userType === 'recruiter' && (
                  <Link to="/post-job" className="text-gray-600 hover:text-primary-600">
                    Post a Job
                  </Link>
                )}
                {userType === 'jobseeker' && (
                  <Link to="/my-applications" className="text-gray-600 hover:text-primary-600">
                    My Applications
                  </Link>
                )}
                <div className="flex items-center gap-4">
                  <Link to="/profile" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <User className="w-5 h-5" />
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-primary-600">
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;