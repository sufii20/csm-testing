// App.tsx
import { useState } from "react";
import Navbar from "./pages/navBar";
import Footer from "./pages/footer";
import type { PageType } from "./pages/types"; // Import from shared types

// Import page components
import HomePage from "./pages/homePage";
import ZeekrPage from "./pages/zeekr";
import RiddaraPage from "./pages/riddara";
import ForthingPage from "./pages/forthing";
import JmevPage from "./pages/jmev";
import Newsletter from "./pages/newsLetter";
// import EVTestDrive from './pages/testDrive';

function App() {
  // State to track current page - properly typed
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Function to handle page changes - parameter name matches interface exactly
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    console.log("Navigating to:", page); // Debug log
  };

  // Function to handle back navigation to homepage
  const handleBackToHome = () => {
    setCurrentPage("home");
    console.log("Navigating back to home"); // Debug log
  };

  // Function to render the current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "zeekr":
        return <ZeekrPage />;
      case "riddara":
        return <RiddaraPage onBack={handleBackToHome} />;
      case "forthing":
        return <ForthingPage onBack={handleBackToHome} />;
      case "jmev":
        return <JmevPage onBack={handleBackToHome} />;
      case "about":
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold">About Us Page</h1>
            <p className="mt-4">Learn more about Capital Smart Motors and our commitment to electric vehicles.</p>
          </div>
        );
      case "news":
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold">News & Insights Page</h1>
            <p className="mt-4">Stay updated with the latest news and insights from the electric vehicle industry.</p>
          </div>
        );
      case "locations":
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold">Our Locations</h1>
            <p className="mt-4">Find our showrooms and service centers near you.</p>
          </div>
        );
      case "contact":
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p className="mt-4">Get in touch with our team for any inquiries or support.</p>
          </div>
        );
      case "home":
      case "homepage": // Handle both 'home' and 'homepage' to show the same component
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      <main className="flex-grow">{renderCurrentPage()}</main>
      <Newsletter />
      <div className="border-t border-gray-300" />
      <Footer />
    </div>
  );
}

export default App;