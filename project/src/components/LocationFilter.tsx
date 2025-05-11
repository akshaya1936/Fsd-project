import { useState } from 'react';

const locations = [
  'Bangalore',
  'Washington',
  'Hyderabad',
  'Mumbai',
  'California',
  'Chennai'
];

type LocationFilterProps = {
  onFilterChange: (selectedLocations: string[]) => void;
};

const LocationFilter = ({ onFilterChange }: LocationFilterProps) => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const handleLocationChange = (location: string) => {
    const newSelection = selectedLocations.includes(location)
      ? selectedLocations.filter(l => l !== location)
      : [...selectedLocations, location];
    
    setSelectedLocations(newSelection);
    onFilterChange(newSelection);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Search by Location</h2>
      <div className="space-y-2">
        {locations.map(location => (
          <div key={location} className="flex items-center">
            <input
              type="checkbox"
              id={`location-${location}`}
              checked={selectedLocations.includes(location)}
              onChange={() => handleLocationChange(location)}
              className="h-4 w-4 text-accent-600 rounded border-gray-300 focus:ring-accent-500"
            />
            <label htmlFor={`location-${location}`} className="ml-2 text-gray-700">
              {location}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationFilter;