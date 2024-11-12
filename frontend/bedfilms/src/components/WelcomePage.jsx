import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/WelcomePage.css';
import '../styles/Navbar.css'
import Footer from '../components/Footer';

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


      <Footer />
    </div>
  );
};

export default WelcomePage;
