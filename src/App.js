import React from 'react';
import Navigation from './components/Navigation';
import {Routes, Route} from 'react-router-dom';
import Culture from './pages/Culture';
import Entertainment from './pages/Entertainment';
import Tech from './pages/Tech';
import Science from './pages/Science';
import Politics from './pages/Politics';
import Health from './pages/Health';
import Innovations from './pages/Innovations';
import Business from './pages/Business';
import Security from './pages/Security';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Business/>} />
        <Route path="/entertainment" element={<Entertainment/>} />
        <Route path="/tech" element={<Tech/>} />
        <Route path="/science" element={<Science/>} />
        <Route path="/politics" element={<Politics/>} />
        <Route path="/health" element={<Health/>} />
        <Route path="/innovations" element={<Innovations/>} />
        <Route path="/culture" element={<Culture/>} />
        <Route path="/security" element={<Security/>} />
      </Routes>
    </div>
  );
}

export default App;
