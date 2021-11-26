import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "././globalStyles";
import InfoSection from "./components/InfoSection/InfoSection";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <InfoSection />
    </Router>
  );
}

export default App;
