import SearchBox from './SearchBox';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          More Jobs are available here to apply
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and
          Take the First Step Toward Your Future!
        </p>
        <SearchBox />
      </div>
    </section>
  );
};

export default Hero;