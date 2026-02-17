import React from 'react'


 

function SearchBar({ searchTerm, setSearchTerm, setFoundAnime }) {
    const fetchAnime = async (searchTerm) => {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`);
        const data = await response.json();
        
        
        for (const anime of data.data) {
            if (anime.title_english && anime.title_english.toLowerCase() === searchTerm.toLowerCase()) {
                return anime; 
            }
        }
        
       
        return data.data.length > 0 ? data.data[0] : null;
    } catch (error) {
        console.error('Error fetching anime:', error);
        return null;
    }
};

const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm) {
        const foundAnime = await fetchAnime(searchTerm);
        if (foundAnime) {
            console.log('Found anime:', foundAnime);
            setFoundAnime(foundAnime);

        }
    }
};


    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for an anime"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar; 