import React from "react";
import "./App.css";
import Navbar from "./pages/navBar";
import Footer from "./pages/footer";
import Homepage from "./pages/homePage";
import { Newsletter } from "./pages/newsLetter";
import EVTestDrive from "./pages/testDrive";
import RiddaraShowcase from "./pages/riddara";
import Forthing from "./pages/forthing";
function App() {
  return (
    <div className="App">
      {/* Navbar at the top */}
      <Navbar />
      {/* <Homepage /> */}
      {/* <RiddaraShowcase /> */}
      {/* <EVTestDrive /> */}
      <Forthing />
      {/* Newsletter section */}
      <Footer/>


    </div>
  );
}

export default App;
