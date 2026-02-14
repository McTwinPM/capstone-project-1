import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import AnimeCard from "../components/AnimeCard";
import { useState, useEffect } from "react";

function Home({ favorites, updateFavorites }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundAnime, setFoundAnime] = useState(null);

  return (
    <div>
      <Navbar />
      <h1>Is This Anime Family Friendly?</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFoundAnime={setFoundAnime}
      />
      {foundAnime && (
        <div className="anime-card-container">
          <AnimeCard anime={foundAnime} favorites={favorites} updateFavorites={updateFavorites} />
        </div>
      )}
    </div>
  );
}

export default Home;
