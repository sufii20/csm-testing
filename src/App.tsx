// App.js or your main component
import React, { useState } from 'react';
import Navbar from './pages/navbar'; // Adjust the import path as necessary

// Import page components
import HomePage from './pages/homePage'; // You'll need to create this
import ZeekrPage from './pages/zeekr';
import RiddaraPage from './pages/riddara';
import ForthingPage from './pages/forthing';
import JmevPage from './pages/jmev';

function App() {
  // State to track current page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle page changes
  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
    console.log('Navigating to:', pageName); // Debug log
  };

  // Function to render the current page
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'zeekr':
        return <ZeekrPage />;
      case 'riddara':
        return <RiddaraPage />;
      case 'forthing':
        return <ForthingPage />;
      case 'jmev':
        return <JmevPage />;
      case 'about':
        return <div className="p-8"><h1 className="text-2xl font-bold">About Us Page</h1></div>;
      case 'news':
        return <div className="p-8"><h1 className="text-2xl font-bold">News & Insights Page</h1></div>;
      case 'locations':
        return <div className="p-8"><h1 className="text-2xl font-bold">Locations Page</h1></div>;
      case 'contact':
        return <div className="p-8"><h1 className="text-2xl font-bold">Contact Us Page</h1></div>;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;