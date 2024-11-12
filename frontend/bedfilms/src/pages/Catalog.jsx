import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Film from '../components/Film';
import Footer from '../components/Footer';
// import './Catalog.css';

const films = [
  { id: 1, name: "Криминальное чтиво", description: "Описание фильма 1", cover: "cover1.jpg" },
  { id: 2, name: "Бешеные псы", description: "Описание фильма 2", cover: "cover2.jpg" },
  { id: 3, name: "Интерстеллар", description: "Описание фильма 3", cover: "cover3.jpg" },
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
