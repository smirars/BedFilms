import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ActorCard from '../components/ActorCard';

const actors = [
  {
    id: 1,
    firstName: "Кристиан",
    lastName: "Бейл",
    photo: "actor1.jpg",
    films: ["Фильм 1", "Фильм 2"],
    biography: "Краткая биография Актера 1...",
  },
  {
    id: 2,
    firstName: "Леонардо",
    lastName: "Ди Каприо",
    photo: "actor2.jpg",
    films: ["Фильм 2", "Фильм 3"],
    biography: "Краткая биография Актера 2...",
  },
  {
    id: 3,
    firstName: "Том",
    lastName: "Круз",
    photo: "actor3.jpg",
    films: ["Фильм 1", "Фильм 3"],
    biography: "Краткая биография Актера 3...",
  },
];

const Actors = () => {
  return (
    <div className="actors-page">
      <Navbar />
      <main className="actor-list">
        {actors.map((actor) => (
          <Link key={actor.id} to={`/actors/${actor.id}`}>
            <ActorCard actor={actor} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Actors;

