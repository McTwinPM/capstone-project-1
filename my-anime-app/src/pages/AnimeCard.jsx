import { useState, useEffect } from 'react'
import { Outlet, Link, useOutletContext, } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function AnimeCard({ }) {
  const { anime } = useOutletContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [foundAnime, setFoundAnime] = useState(null)

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFoundAnime={setFoundAnime} />
      <h1>{anime.title_english}</h1>
      <img src={anime.image_url} alt={anime.title} />
      <p>{anime.synopsis}</p>
      
    </div>
  )
}

export default AnimeCard