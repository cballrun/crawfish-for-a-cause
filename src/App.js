import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/screens/home'
import Events from './components/screens/events'
import Mission from './components/screens/mission'
import Gallery from './components/screens/gallery'




function App() {
  const [events, setEvents] = useState("")
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home events={events}/>}/>
          <Route path="/events" element={<Events events={events} />}/>
          <Route path="/mission" element={<Mission/>}/>
          <Route path="/gallery" element={<Gallery events={events}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
