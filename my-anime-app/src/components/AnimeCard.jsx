import { useState, useEffect } from "react";


function AnimeCard({ anime, favorites, updateFavorites }) {


 

  const handleAddToFavorites = () => {
    if (!updateFavorites || !favorites) return;   
    
    const isAlreadyFavorite = favorites.some(fav => fav.mal_id === anime.mal_id);
    
    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(fav => fav.mal_id !== anime.mal_id);
    } else {
      updatedFavorites = [...favorites, anime];
    }
    
    updateFavorites(updatedFavorites);
  };

  const isFavorite = favorites.some(fav => fav.mal_id === anime.mal_id);


  return (
    <div>
      {anime && (
        <>
          <h1>{anime.title_english}</h1>
          <button onClick={handleAddToFavorites}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <p className="demographics">
            {anime.demographics
              .map((demographic) => demographic.name)
              .join(", ")}
          </p>
          <p className="rating">{anime.rating}</p>
          <p className="synopsis">{anime.synopsis}</p>
          <p className="genres">
            {anime.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="themes">
            {anime.themes.map((theme) => theme.name).join(", ")}
          </p>
          <p className="explicit-genres">
            {anime.explicit_genres
              .map((explicit_genre) => explicit_genre.name)
              .join(", ")}
          </p>
        </>
      )}
    </div>
  );
}

export default AnimeCard;
