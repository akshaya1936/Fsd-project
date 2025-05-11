const CompanyLogos = () => {
  return (
    <section className="border rounded-lg py-6 px-8 my-8 max-w-6xl mx-auto">
      <p className="text-gray-700 mb-4 font-medium">Trusted by</p>
      <div className="flex flex-wrap justify-between items-center gap-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png" 
          alt="Microsoft" className="h-8 object-contain" />
          
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/320px-Walmart_logo.svg.png" 
          alt="Walmart" className="h-8 object-contain" />
          
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/320px-Accenture.svg.png" 
          alt="Accenture" className="h-8 object-contain" />
          
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png" 
          alt="Samsung" className="h-8 object-contain" />
          
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" 
          alt="Amazon" className="h-8 object-contain" />
          
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/320px-Adobe_Systems_logo_and_wordmark.svg.png" 
          alt="Adobe" className="h-8 object-contain" />
      </div>
    </section>
  );
};

export default CompanyLogos;