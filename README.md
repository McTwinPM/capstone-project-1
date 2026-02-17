# Is This Anime Family Friendly?


## Description
This app allows the user to search a specific anime, and the app will display information on that anime so that the user can determine if the anime is appropriate to watch.

This app uses the Jikan API `https://docs.api.jikan.moe/`

## Setup
 1. Fork and clone the repository
 2. use command `npm install` to install the necessary dependencies.
 3. use `npm run dev` to run the client

## API Endpoint

GET `https://api.jikan.moe/v4/anime?q=${searchTerm}`
This is the only endpoint. It allows the query to be replaced with whatever the user types in the search bar component ('searchTerm'). If the searchTerm matches the title of an anime, it returns the English title, rating, genres, demograpics, themes, and synopsis

## Routes
1. `/` is the endpoint for the `Home` page
This is where most of the app takes place. It contains the Searchbar and AnimeCard components

2. `/favorites` is the endpoint for the `Favorites` page
This contains the list of favorites recorded. It contains the FavoritesList and FavoritesCard components. When the user toggles the 'Add to Favorites' button, the info in AnimeCard gets stored into FavoritesCard, which is stored in FavoritesList

Both routes contain the Navbar component

## Challenges/Known Bugs

1. Titles not appearing
    Some anime shows are displayed in AnimeCard without a Title. This is due to the fact that Jikan API lists the "title_english" for that anime as null. However, all other information retrieved is correct.
2. Remove from favorites
    Currently, to remove an anime from the favorites page, you will need to search for the anime in the `Home` page, and click the `remove from favorites` button. There is no quick button to remove from favorites at this time.