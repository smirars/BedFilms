import React from 'react';

const ActorCard = ({ actor }) => {
  return (
    <div className="actor-card">
      <img src={actor.photo} alt={`${actor.firstName} ${actor.lastName}`} className="actor-photo" />
      <h3 className="actor-name">
        {actor.firstName} {actor.lastName}
      </h3>
      <p className="actor-films">
        Фильмы: {actor.films.join(', ')}
      </p>
    </div>
  );
};

export default ActorCard;
