// src/components/Film.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Film.css';

const Film = ({ film }) => {
  return (
    <Link to={`/catalog/${film.name}`} className="film-card">
      <img src={film.cover} alt={film.name} className="film-cover" />
      <div className="film-info">
        <h3>{film.name}</h3>
        <p>{film.description}</p>
      </div>
    </Link>
  );
};

export default Film;
