import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Exercise1 from './exercise-1/exercise-1';
import Exercise2 from './exercise-2/exercise-2';
import Home from './exercise-3/Home';
import About from './exercise-3/About';
import Contact from './exercise-3/Contact';
import Exercise4 from './exercise-4/Cart';
import Exercise5 from './exercise-5/Exercise5'; 
import Exercise6 from './exercise-6/Exercise-6';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />

        <Route path="/exercise-3" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/exercise-4" element={<Exercise4 />} />
        <Route path="/exercise-5" element={<Exercise5 />} />
        <Route path="/exercise-6" element={<Exercise6 />} /> 
      </Routes>
    </Router>
  );
};

export default App;
