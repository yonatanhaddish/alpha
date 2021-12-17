import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "././globalStyles";
import Home from "./pages/HomePage/Home";
import Footer from "././components/Footer/Footer";
// import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path= "/"  element= {<Home />} />
        {/* <Route exact path= "/sign-up"  element= {<Pricing />} /> */}
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
