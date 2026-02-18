import React from 'react';
import FavoritesCard from './FavoritesCard';

function FavoritesList({ storedFavorites, favorites, updateFavorites }) {
    return (
        <div className="favorites-list">
            {storedFavorites.length > 0 ? (
                storedFavorites.map((storedFavorite) => (
                    <FavoritesCard 
                        key={storedFavorite.mal_id} 
                        storedFavorites={storedFavorite} 
                        favorites={favorites} 
                        updateFavorites={updateFavorites} />
                ))
            ) : (
                <p>No favorites saved yet.</p>
            )}
        </div>
    );
}

export default FavoritesList;