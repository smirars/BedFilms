// src/pages/Catalog.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Film from '../components/Film';
import './Catalog.css';

const films = [
  { id: 1, name: "Фильм 1", description: "Описание фильма 1", cover: "cover1.jpg" },
  { id: 2, name: "Фильм 2", description: "Описание фильма 2", cover: "cover2.jpg" },
  { id: 3, name: "Фильм 3", description: "Описание фильма 3", cover: "cover3.jpg" },
];

const Catalog = () => {
  return (
    <div className="catalog-page">
      <Navbar />
      <main className="film-list">
        {films.map((film) => (
          <Film key={film.id} film={film} />
        ))}
      </main>
    </div>
  );
};

export default Catalog;
