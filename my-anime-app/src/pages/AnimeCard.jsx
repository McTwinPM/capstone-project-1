import { useState, useEffect } from 'react'
import { Outlet, Link, useOutletContext, } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function AnimeCard({ anime }) {
 

  return (
    <div>
      {anime && (
        <>
          <h1>{anime.title_english}</h1>
          <p className='demographics'>{anime.demographics.map(demographic => demographic.name).join(', ')}</p>
          <p className='rating'>{anime.rating}</p>
          <p className='synopsis'>{anime.synopsis}</p>
          <p className='genres'>{anime.genres.map(genre => genre.name).join(', ')}</p>
          <p className='themes'>{anime.themes.map(theme => theme.name).join(', ')}</p>
          <p className='explicit-genres'>{anime.explicit_genres.map(explicit_genre => explicit_genre.name).join(', ')}</p>
          
        </>
      )}
    </div>
  )
}

export default AnimeCard