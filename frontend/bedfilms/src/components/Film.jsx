import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Film.css';

const Film = ({ film }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFavourite(favourites.some(fav => fav.id === film.id));
  }, [film.id]);

  const toggleFavourite = (e) => {
    e.stopPropagation();
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

  const handleFilmClick = () => {
    navigate(`/films/${film.id}`, { state: { film } });
  };

  return (
    <div className="film-card" onClick={handleFilmClick}>
      <img src={film.cover} alt={film.name} className="film-cover" />
      <div className="film-info">
        <h3>{film.name}</h3>
        <p>{film.description}</p>
      </div>
      <button 
        className={`favourite-toggle ${isFavourite ? 'active' : ''}`} 
        onClick={toggleFavourite}
        aria-label="Toggle favourite"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFavourite ? "red" : "none"}
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="favourite-icon"
        >
          <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
        </svg>
      </button>
    </div>
  );
};

export default Film;

