import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './WelcomePage.css';
import './Navbar.css'

const WelcomePage = () => {
  const location = useLocation();
  const { username, password } = location.state || {};

  return (
    <div className="welcome-page">
      
      <Navbar />
      
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
