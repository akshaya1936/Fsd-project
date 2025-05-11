import { useState } from 'react';

interface SearchBoxProps {
  onSearch: (query: { keyword: string; location: string }) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword, location });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;