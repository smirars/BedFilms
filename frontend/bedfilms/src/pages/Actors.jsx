import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ActorCard from '../components/ActorCard';
import Footer from '../components/Footer';
import Bale from '../images/Bale.jpg'
import Cruise from '../images/tomcruise.jpg'
import DiCaprio from '../images/dicaprio.jpg'
import '../styles/Actors.css'

const actors = [
  {
    id: 1,
    name: "Кристиан Бейл",
    photo: Bale,
    films: ["Фильм 1", "Фильм 2"],
    biography: "Краткая биография Актера 1...",
  },
  {
    id: 2,
    name: "Леонардо ди Каприо",
    photo: DiCaprio,
    films: ["Фильм 2", "Фильм 3"],
    biography: "Краткая биография Актера 2...",
  },
  {
    id: 3,
    name: "Том Круз",
    photo: Cruise,
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
      <Footer />
    </div>
  );
};

export default Actors;

