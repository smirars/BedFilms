import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ActorCard from '../components/ActorCard';

const actors = [
  {
    id: 1,
    name: "Кристиан Бейл",
    photo: "actor1.jpg",
    films: ["Фильм 1", "Фильм 2"],
    biography: "Краткая биография Актера 1...",
  },
  {
    id: 2,
    name: "Леонардо ди Каприо",
    photo: "actor2.jpg",
    films: ["Фильм 2", "Фильм 3"],
    biography: "Краткая биография Актера 2...",
  },
  {
    id: 3,
    name: "Том Круз",
    photo: "actor3.jpg",
    films: ["Фильм 1", "Фильм 3"],
    biography: "Краткая биография Актера 3...",
  },
];

const Actors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredActors = actors.filter((actor) =>
    actor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="actors-page">
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <main className="actor-list">
        {filteredActors.map((actor) => (
          <Link key={actor.id} to={`/actors/${actor.id}`}>
            <ActorCard actor={actor} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Actors;

