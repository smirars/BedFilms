import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Film from '../components/Film';
import Footer from '../components/Footer';
import pulpFictionCover from '../images/Pulp_Fiction.jpg';
import MadDogs from '../images/Mad_dogs.jpg';
import Interstellar from "../images/Interstellar.jpg"
// import './Catalog.css';

const films = [
  { id: 1, name: "Криминальное чтиво", description: `Двое бандитов Винсент Вега и Джулс Винфилд проводят время в философских беседах в перерыве между разборками и «решением проблем» с должниками своего криминального босса Марселласа Уоллеса. Параллельно разворачивается три истории.`, cover: pulpFictionCover },
  { id: 2, name: "Бешеные псы", description: `Это должно было стать идеальным преступлением. Задумав ограбить ювелирный магазин, криминальный босс Джо Кэбот собрал вместе шестерых опытных и совершенно незнакомых друг с другом преступников. Но с самого начала все пошло не так, и обычный грабеж превратился в кровавую бойню.`, cover: MadDogs },
  { id: 3, name: "Интерстеллар", description: `Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.`, cover: Interstellar },
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFilms = films.filter((film) =>
    film.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog-page">
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Поиск по названию..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <main className="film-list">
        {filteredFilms.map((film) => (
          <Film key={film.id} film={film} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
