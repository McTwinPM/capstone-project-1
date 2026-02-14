import React from 'react';
import FavoritesCard from './FavoritesCard';

function FavoritesList({ storedFavorites }) {
    return (
        <div className="favorites-list">
            {storedFavorites.length > 0 ? (
                storedFavorites.map((storedFavorite) => (
                    <FavoritesCard key={storedFavorite.mal_id} storedFavorites={storedFavorite} />
                ))
            ) : (
                <p>No favorites saved yet.</p>
            )}
        </div>
    );
}

export default FavoritesList;