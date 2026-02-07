import React, {useRef, useState, UserContext, useEffect} from 'react'


 

function SearchBar({ searchTerm, setSearchTerm }) {
    const inputRef = useRef(null)
    const fetchAnime = (searchTerm) => {
        fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching anime:', error))
    }
    fetchAnime(searchTerm)
    


    useEffect(() => {
        inputRef.current.focus()
    }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for an anime"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={inputRef}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar