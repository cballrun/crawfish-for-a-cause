import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FetchEvents from './components/apiCalls/fetchEvents'
import Home from './components/screens/home'
import Events from './components/screens/events'
import About from './components/screens/about'
import Gallery from './components/screens/gallery'




function App() {
  const [events, setEvents] = useState("")

  useEffect(() => {
    FetchEvents({
        setEvents
    })
  }, []) 
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home events={events}/>}/>
          <Route path="/events" element={<Events events={events} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery events={events}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

