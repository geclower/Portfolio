import { Routes, Route } from 'react-router-dom'
import React, {useRef} from 'react';
import './App.css';
import Home from './screens/Home.jsx'
import Projects from './screens/Projects.jsx';
import About from './screens/About.jsx';
import Navbar from './components/navBar/Navbar.jsx';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/nav" element = {<Navbar/>}/>
    </Routes>
    </div>
  );
}

export default App;
