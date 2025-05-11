import { useState } from 'react';

interface CategoryFilterProps {
  onFilterChange: (filters: any) => void;
}

const CategoryFilter = ({ onFilterChange }: CategoryFilterProps) => {
  const [filters, setFilters] = useState({
    category: [],
    domain: [],
    industry: [],
    salary: { min: '', max: '' }
  });

  const categories = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];
  const domains = ['Technology', 'Finance', 'Healthcare', 'Education', 'Marketing'];
  const industries = ['Software', 'Banking', 'Medical', 'E-commerce', 'Consulting'];

  const handleCheckboxChange = (type: string, value: string) => {
    setFilters(prev => {
      const updated = {
        ...prev,
        [type]: prev[type].includes(value)
          ? prev[type].filter(item => item !== value)
          : [...prev[type], value]
      };
      onFilterChange(updated);
      return updated;
    });
  };

  const handleSalaryChange = (type: 'min' | 'max', value: string) => {
    setFilters(prev => {
      const updated = {
        ...prev,
        salary: { ...prev.salary, [type]: value }
      };
      onFilterChange(updated);
      return updated;
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Job Type</h3>
        {categories.map(category => (
          <label key={category} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={filters.category.includes(category)}
              onChange={() => handleCheckboxChange('category', category)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Domain</h3>
        {domains.map(domain => (
          <label key={domain} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={filters.domain.includes(domain)}
              onChange={() => handleCheckboxChange('domain', domain)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span>{domain}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Industry</h3>
        {industries.map(industry => (
          <label key={industry} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={filters.industry.includes(industry)}
              onChange={() => handleCheckboxChange('industry', industry)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span>{industry}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Salary Range</h3>
        <div className="space-y-2">
          <input
            type="number"
            placeholder="Min Salary"
            value={filters.salary.min}
            onChange={(e) => handleSalaryChange('min', e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Max Salary"
            value={filters.salary.max}
            onChange={(e) => handleSalaryChange('max', e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;