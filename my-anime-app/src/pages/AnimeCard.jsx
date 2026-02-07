import { useState, useEffect } from 'react'
import { Outlet, Link, useOutletContext, userParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function AnimeCard() {
  const { anime } = useOutletContext()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1>{anime.title}</h1>
      <img src={anime.image_url} alt={anime.title} />
      <p>{anime.synopsis}</p>
      
    </div>
  )
}

export default AnimeCard