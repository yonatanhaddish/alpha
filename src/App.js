import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "././globalStyles";
import Home from "./pages/HomePage/Home";
import Service from "./pages/Services/Service";
import Product from "./pages/Products/Product";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "././components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path= "/"  element= {<Home />} />
        <Route exact path= "/products"  element= {<Product />} />
        <Route exact path= "/services"  element= {<Service />} />
        <Route exact path= "/signUp"  element= {<SignUp />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
