// App.tsx
import { useState } from "react";
import Navbar from "./pages/navBar";
import type { PageType } from "./pages/types";
import ContactForm from "./pages/contactUs";
import Footer from "./pages/footer";
// Import page components
import HomePage from "./pages/homePage";
import ZeekrPage from "./pages/zeekr";
import RiddaraPage from "./pages/riddara";
import ForthingPage from "./pages/forthing";
import JmevPage from "./pages/jmev";
// import MainApp from './pages/testDrive'; // This should be your MainApp component that includes both EVTestDrive and OrderReview
import AboutPage from "./pages/aboutUs";
import News from "./pages/newsAndInsights";
// import TestDrive from "./pages/test";
import StoreLocation from "./pages/location";
import CombinedCareer from "./pages/career";

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
        return <AboutPage />;
      case "news":
        return <News />;
      case "contact":
        return <ContactForm />;
      case "locations":
        return <StoreLocation />;
      case "career":
        return <CombinedCareer />;
      case "home":
      case "homepage":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      <main className="flex-grow">{renderCurrentPage()}</main>
      {/* <Newsletter />
      <div className="border-t border-gray-300" />
      <Footer /> */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
