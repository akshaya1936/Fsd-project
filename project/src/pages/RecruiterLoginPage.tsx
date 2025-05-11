import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

const RecruiterLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Recruiter login logic would go here
    console.log('Recruiter login with:', email, password);
  };

  return (
    <div className="max-w-md mx-auto my-16 px-4">
      <Link to="/" className="flex items-center text-gray-600 mb-8 hover:text-gray-900">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to home
      </Link>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Recruiter Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="pl-10 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                className="pl-10 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-accent-600 text-white py-2 px-4 rounded hover:bg-accent-700 transition-colors"
          >
            Log In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Want to post jobs?{' '}
            <Link to="/recruiter-register" className="text-accent-600 hover:text-accent-800">
              Register as recruiter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLoginPage;