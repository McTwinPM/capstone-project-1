import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AnimeCard from './AnimeCard'
import { useState, useEffect } from 'react'

function Home() {
  const [animeList, setAnimeList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${anime}`)
      .then(response => response.json())
      .then(data => setAnimeList(data.top))
      .catch(error => console.error('Error fetching anime:', error))
  }, [])

  return (
    <div>
      <Navbar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="anime-list">
        {animeList.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default Home