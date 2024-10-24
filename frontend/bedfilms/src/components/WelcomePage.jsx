import React from 'react';
import { useLocation } from 'react-router-dom';

const WelcomePage = () => {
  const location = useLocation();
  const { username, password } = location.state || {};

  return (
    <div className="welcome-container">
      <h1>Добро пожаловать!</h1>
      <p>Ваш логин: {username}</p>
      <p>Ваш пароль: {password}</p>
    </div>
  );
};

export default WelcomePage;
