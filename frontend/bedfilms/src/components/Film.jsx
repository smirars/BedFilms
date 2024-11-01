// src/components/Film.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Film.css';

const Film = ({ film }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFavourite(favourites.some(fav => fav.id === film.id));
  }, [film.id]);

  const toggleFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    let updatedFavourites;

    if (isFavourite) {
      updatedFavourites = favourites.filter(fav => fav.id !== film.id);
    } else {
      updatedFavourites = [...favourites, film];
    }

    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="film-card">
      <Link to={`/catalog/${film.name}`}>
        <img src={film.cover} alt={film.name} className="film-cover" />
        <div className="film-info">
          <h3>{film.name}</h3>
          <p>{film.description}</p>
        </div>
      </Link>
      <button className={`favourite-toggle ${isFavourite ? 'active' : ''}`} onClick={toggleFavourite}>
        ❤️
      </button>
    </div>
  );
};

export default Film;

