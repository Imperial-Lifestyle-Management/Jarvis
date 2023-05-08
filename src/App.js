import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './pages';
import AllClients from './pages/allclients';
import More from './pages/more';
import Idk from './pages/idk';
import MyClients from './pages/myclients';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<AllClients />} />
      <Route path="/allclients" element={<AllClients />} />
      <Route path="/myclients" element={<MyClients />} />
      <Route path="/more" element={<More />} />
      <Route path="/idk" element={<Idk />} />
      </Routes>
    </Router>
  )
}

export default App