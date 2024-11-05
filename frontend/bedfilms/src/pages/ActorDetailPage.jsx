import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const actors = [
  {
    id: 1,
    firstName: "Актёр",
    lastName: "1",
    photo: "actor1.jpg",
    films: ["Фильм 1", "Фильм 2"],
    biography: "Краткая биография Актера 1...",
  },
  {
    id: 2,
    firstName: "Актёр",
    lastName: "2",
    photo: "actor2.jpg",
    films: ["Фильм 2", "Фильм 3"],
    biography: "Краткая биография Актера 2...",
  },
  {
    id: 3,
    firstName: "Актёр",
    lastName: "3",
    photo: "actor3.jpg",
    films: ["Фильм 1", "Фильм 3"],
    biography: "Краткая биография Актера 3...",
  },
];

const ActorDetailPage = () => {
  const { id } = useParams();
  const actor = actors.find((actor) => actor.id === parseInt(id));

  if (!actor) return <div>Актёр не найден</div>;

  return (
    <div className="actor-detail-page">
      <Navbar />
      <div className="actor-detail-content">
        <div className="actor-photo">
          <img src={actor.photo} alt={`${actor.firstName} ${actor.lastName}`} />
        </div>
        <div className="actor-info">
          <h2>{actor.firstName} {actor.lastName}</h2>
          <h3>Фильмы:</h3>
          <ul>
            {actor.films.map((film, index) => (
              <li key={index}>
                <Link to={`/films/${index + 1}`}>{film}</Link>
              </li>
            ))}
          </ul>
          <div className="actor-biography">
            <h3>Биография:</h3>
            <p>{actor.biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetailPage;
