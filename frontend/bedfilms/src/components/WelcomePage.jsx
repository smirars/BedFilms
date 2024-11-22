import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/WelcomePage.css';
import '../styles/Navbar.css'
import Footer from '../components/Footer';

const WelcomePage = () => {

  return (
    <div className="welcome-page">
      
      <Navbar />
      
      <main className="main-content">
        <h1>Добро пожаловать!</h1>
        <p>На этом сайте вы можете посмотреть фильмы<br/>Приятного просмотра!</p>
      </main>


      <Footer />
    </div>
  );
};

export default WelcomePage;
