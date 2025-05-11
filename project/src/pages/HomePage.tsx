import { useState } from 'react';
import Hero from '../components/Hero';
import CompanyLogos from '../components/CompanyLogos';
import CategoryFilter from '../components/CategoryFilter';
import LocationFilter from '../components/LocationFilter';
import JobListing from '../components/JobListing';

const HomePage = () => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [locationFilters, setLocationFilters] = useState<string[]>([]);

  return (
    <main>
      <Hero />
      <CompanyLogos />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CategoryFilter onFilterChange={setCategoryFilters} />
            <LocationFilter onFilterChange={setLocationFilters} />
          </aside>
          
          <div className="lg:col-span-3">
            <JobListing 
              categoryFilters={categoryFilters}
              locationFilters={locationFilters}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;