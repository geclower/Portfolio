import { Routes, Route } from 'react-router-dom'
import React, {useRef} from 'react';
import './App.css';
import Home from './screens/Home.jsx'
import Projects from './screens/Projects.jsx';
import About from './screens/About.jsx';
import Touchstone from './screens/Projects/Touchstone/Touchstone.jsx';
import Riff from './screens/Projects/Riff/Riff.jsx'
import Rekt from './screens/Projects/Rekt/Rekt.jsx'
import Wellmet from './screens/Projects/WellMet/WellMet.jsx'
import Whereartthou from './screens/Projects/WhereArtThou/WhereArtThou.jsx'
import Broadwaybound from './screens/Projects/BroadwayBound/BroadwayBound.jsx'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects/touchstone" element={<Touchstone />}/>
      <Route path="/projects/riff" element={<Riff/>}/>
      <Route path="/projects/rekt" element={<Rekt/>}/>
      <Route path="/projects/wellmet" element={<Wellmet/>}/>
      <Route path="/projects/whereartthou" element={<Whereartthou/>}/>
      <Route path="/projects/broadwaybound" element={<Broadwaybound/>}/>
    </Routes>
    </div>
  );
}

export default App;
