import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import FavoritesList from '../components/FavoritesList';

function Favorites() {
    const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const updateFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
    return (
        <div>
            <Navbar />
            <h1>My Favorites</h1>
            <FavoritesList 
            storedFavorites={favorites} 
            favorites={favorites} 
            updateFavorites={updateFavorites} />
        </div>
    );
}

export default Favorites;