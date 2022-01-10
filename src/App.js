import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Cases from './Cases';
import Contact from './Contact';
import Porfolio from './Porfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Cases" element={<Cases />} />
        <Route path="contact" element={<Contact />} />
        <Route path="porfolio" element={<Porfolio />} />
      </Routes>
    </div>
  );
}

export default App;