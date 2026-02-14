import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AnimeCard from './AnimeCard'
import { useState, useEffect } from 'react'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [foundAnime, setFoundAnime] = useState(null)


  return (
    <div>
      <Navbar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFoundAnime={setFoundAnime} />
      {foundAnime && (
       <div className = "anime-card">
        <AnimeCard anime={foundAnime} />
       </div>
      )}
    </div>
  )
}

export default Home