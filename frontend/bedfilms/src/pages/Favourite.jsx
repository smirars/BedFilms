// src/pages/Favourites.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Film from '../components/Film';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(savedFavourites);
  }, []);

  return (
    <div className="favourites-page">
      <Navbar />
      <main className="film-list">
        {favourites.length > 0 ? (
          favourites.map((film) => <Film key={film.id} film={film} />)
        ) : (
          <p>Список избранных фильмов пуст.</p>
        )}
      </main>
    </div>
  );
};

export default Favourites;
