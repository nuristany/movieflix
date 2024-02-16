import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './logo/Netflix_Logo_CMYK.png';
import searchIcon from './images/search.png'; // Update the path to your search icon
import moviesData from './moviesData'; // Import your movies data

function Netflix() {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const uniqueGenres = [...new Set(moviesData.map(movie => movie.genre))];

    // Filter movies by selected genre
    const filteredByGenre = selectedGenre ? moviesData.filter(movie => movie.genre === selectedGenre) : moviesData;

    // Filter movies by search query
    const filteredMovies = searchQuery
        ? filteredByGenre.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : filteredByGenre;

    const onclickMenu = () => {
        document.querySelector("#menu").classList.toggle("icon");
        document.querySelector("#nav").classList.toggle("change");
    };

    return (
        <Router>
            <div className="App">
                <div className="navigation">
                    <div className="search">
                        <input
                            className="search-input"
                            type="search"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit"><img src={searchIcon} alt="Search" /></button>
                    </div>
                    <div className="navbar">
                        <div id="menu" onClick={onclickMenu}>
                            <div className="bar" id="bar1"></div>
                            <div className="bar" id="bar2"></div>
                            <div className="bar" id="bar3"></div>
                        </div>
                        <img src={logo} alt="Netflix Logo" />
                    </div>
                    <ul className="nav" id="nav">
                        {uniqueGenres.map((genre, index) => (
                            <li key={index}><Link to="" onClick={() => handleGenreChange(genre)}>{genre}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="movies">
                    {filteredMovies.map((movie, index) => (
                        <div key={index}>
                            <img src={movie.image} alt={movie.title} />
                        </div>
                    ))}
                </div>
            </div>
        </Router>
    );
}

export default Netflix;








