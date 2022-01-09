import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
