import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'



function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

const updateFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home favorites={favorites} updateFavorites={updateFavorites} />} />
          <Route path="/favorites" element={<Favorites storedFavorites={favorites} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
