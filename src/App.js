import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "././globalStyles";
import Home from "./pages/HomePage/Home";
import Product from "./pages/Products/Product";
import Service from "./pages/Services/Service";
import Footer from "././components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path= "/"  element= {<Home />} />
        <Route exact path= "/products"  element= {<Product />} />
        <Route exact path= "/services"  element= {<Service />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
