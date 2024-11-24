import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Bale from '../images/Bale.jpg'
import Cruise from '../images/tomcruise.jpg'
import DiCaprio from '../images/dicaprio.jpg'
import '../styles/ActorDetail.css';

const actors = [
  {
    id: 1,
    name: "Кристиан Бейл",
    photo: Bale,
    films: ["Криминальное чтиво", "Бешеные псы"],
    biography: "Кри́стиан Чарльз Фи́лип Бейл (англ. Christian Charles Philip Bale; род. 30 января 1974, Хаверфордуэст, Пембрукшир, Уэльс, Великобритания) — британский актёр. Известен своей многосторонностью и физическими перевоплощениями для ролей. Имеет многочисленные награды, в том числе «Оскар», два «Золотых глобуса». В 2011 году журнал Time включил Бейла в список 100 самых влиятельных людей мира.",
  },
  {
    id: 2,
    name: "Леонардо ди Каприо",
    photo: DiCaprio,
    films: ["Бешеные псы", "Интерстеллар"],
    biography: "Леона́рдо Вильге́льм Ди Ка́прио (англ. Leonardo Wilhelm DiCaprio; род. 11 ноября 1974, Лос-Анджелес, США) — американский актёр и кинопродюсер. Лауреат многочисленных наград, включая премию «Оскар» (2016), BAFTA (2016), премию Гильдии киноактёров США (2016), три премии «Золотой глобус» (2005, 2014, 2016), а также «Серебряного медведя» (1997) Берлинского кинофестиваля.",
  },
  {
    id: 3,
    name: "Том Круз",
    photo: Cruise,
    films: ["Криминальное чтиво", "Интерстеллар"],
    biography: "Том Круз (англ. Tom Cruise, полное имя — То́мас Круз Мапотер IV (англ. Thomas Cruise Mapother IV); род. 3 июля 1962, Сиракьюс, Нью-Йорк, США) — американский актёр, кинорежиссёр, сценарист и кинопродюсер. Трёхкратный обладатель премии «Золотой глобус» (1990, 1997, 2000), двукратный обладатель премии «Сатурн» (2002, 2022) и четырёхкратный номинант на премию «Оскар».",
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
        <div className="actor-face">
          <img src={actor.photo} alt={`${actor.name}`} />
        </div>
        <div className="actor-info">
          <h2>{actor.name}</h2>
          <h3>Фильмы:</h3>
          <ul className='films-list'>
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
