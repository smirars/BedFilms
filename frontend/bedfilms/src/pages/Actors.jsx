import React from 'react';
import Navbar from '../components/Navbar';
import ActorCard from '../components/ActorCard';

const actors = [
  {
    id: 1,
    firstName: "Актёр",
    lastName: "1",
    photo: "actor1.jpg",
    films: ["Фильм 1", "Фильм 2"]
  },
  {
    id: 2,
    firstName: "Актёр",
    lastName: "2",
    photo: "actor2.jpg",
    films: ["Фильм 2", "Фильм 3"]
  },
  {
    id: 3,
    firstName: "Актёр",
    lastName: "3",
    photo: "actor3.jpg",
    films: ["Фильм 1", "Фильм 3"]
  },
];

const Actors = () => {
  return (
    <div className="actors-page">
      <Navbar />
      <main className="actor-list">
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </main>
    </div>
  );
};

export default Actors;
