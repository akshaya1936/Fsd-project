import MyApplicationsList from '../components/MyApplicationsList';

const MyApplicationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h1>
        <MyApplicationsList />
      </div>
    </div>
  );
};

export default MyApplicationsPage;