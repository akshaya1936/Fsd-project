import { api } from './api';
import { jwtDecode } from 'jwt-decode'; // Change this line from 'default' import to named import

interface AuthResponse {
  token: string;
  userType: 'jobseeker' | 'recruiter';
}

interface DecodedToken {
  userId: string;
  exp: number;
}

export const authService = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userType', response.data.userType);
    }
    return response.data;
  },

  register: async (userData: { 
    name: string; 
    email: string; 
    password: string; 
    userType: 'jobseeker' | 'recruiter' 
  }) => {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userType', response.data.userType);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
  },

  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      return decoded.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  },

  getUserType: (): string | null => {
    return localStorage.getItem('userType');
  },

  getToken: (): string | null => {
    return localStorage.getItem('token');
  }
};