import React from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const location = useLocation();
  const { username, password } = location.state || {};

  return (
    <div className="welcome-page">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/actors">Актеры</a></li>
          <li><a href="/favorites">Избранное</a></li>
        </ul>
        <div className="profile">
          <a href="/profile">Профиль</a>
        </div>
      </nav>

      
      <main className="main-content">
        <h1>Добро пожаловать!</h1>
        <p>Ваш логин: {username}</p>
        <p>Ваш пароль: {password}</p>
      </main>


      <footer className="footer">
        <p>&copy; 2024 Все права защищены</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i> 
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i> 
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> 
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
