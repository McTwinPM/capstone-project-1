import React from 'react';
import Navbar from '../components/Navbar';
import FavoritesList from '../components/FavoritesList';

function Favorites({ storedFavorites }) {
    return (
        <div>
            <Navbar />
            <h1>My Favorites</h1>
            <FavoritesList storedFavorites={storedFavorites} />
        </div>
    );
}

export default Favorites;