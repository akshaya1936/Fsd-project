import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add this after creating the api instance
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const jobsApi = {
  getAllJobs: async (filters?: any) => {
    const params = new URLSearchParams();
    
    if (filters) {
      if (filters.keyword) params.append('keyword', filters.keyword);
      if (filters.location) params.append('location', filters.location);
      if (filters.category?.length) params.append('category', JSON.stringify(filters.category));
      if (filters.domain?.length) params.append('domain', JSON.stringify(filters.domain));
      if (filters.industry?.length) params.append('industry', JSON.stringify(filters.industry));
      if (filters.salary?.min || filters.salary?.max) {
        params.append('salary', JSON.stringify(filters.salary));
      }
      if (filters.page) params.append('page', filters.page.toString());
      if (filters.limit) params.append('limit', filters.limit.toString());
    }
    
    const response = await api.get('/jobs', { params });
    return response.data;
  },

  getJobById: async (id: string) => {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  },

  createJob: async (jobData: any) => {
    const response = await api.post('/jobs', jobData);
    return response.data;
  }
};

export const userApi = {
  getProfile: async () => {
    const response = await api.get('/profile');
    return response.data;
  },

  updateProfile: async (profileData: any) => {
    const response = await api.put('/profile', profileData);
    return response.data;
  }
};

export const applicationApi = {
  submitApplication: async (jobId: string, data: { coverLetter: string; resume: string }) => {
    const response = await api.post('/applications', { jobId, ...data });
    return response.data;
  },

  getMyApplications: async () => {
    const response = await api.get('/applications/my-applications');
    return response.data;
  },

  getJobApplications: async (jobId: string) => {
    const response = await api.get(`/applications/job/${jobId}`);
    return response.data;
  },

  updateApplicationStatus: async (applicationId: string, status: string) => {
    const response = await api.patch(`/applications/${applicationId}/status`, { status });
    return response.data;
  }
};