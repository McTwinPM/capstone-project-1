import React from 'react';


function FavoritesCard({ storedFavorites, favorites, updateFavorites }) {
  
  const handleRemoveFromFavorites = () => {
    if (!updateFavorites || !favorites) {
      return;
    }
    
    const updatedFavorites = favorites.filter(fav => fav.mal_id !== storedFavorites.mal_id);
    updateFavorites(updatedFavorites);
  };

  return (
    <div className= "favorites-card">
      {storedFavorites && (
        <>
          <h1>{storedFavorites.title_english}</h1>
          <button onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </button>
          <p className="demographics">
            {storedFavorites.demographics
              .map((demographic) => demographic.name)
              .join(", ")}
          </p>
          <p className="rating">{storedFavorites.rating}</p>
          <p className="synopsis">{storedFavorites.synopsis}</p>
          <p className="genres">
            {storedFavorites.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="themes">
            {storedFavorites.themes.map((theme) => theme.name).join(", ")}
          </p>
          <p className="explicit-genres">
            {storedFavorites.explicit_genres
              .map((explicit_genre) => explicit_genre.name)
              .join(", ")}
          </p>
        </>
      )}
    </div>
  );
}

export default FavoritesCard;
