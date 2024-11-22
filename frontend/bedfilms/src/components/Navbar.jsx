import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/home">&#8962;</Link></li>
        <li><Link to="/catalog">Каталог</Link></li>
        <li><Link to="/actors">Актеры</Link></li>
        <li><Link to="/favorites">Избранное</Link></li>
        <li className="profile"><Link to="/profile">Профиль</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
