import React, { useState } from 'react';
import './AuthPage.css'; 

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Авторизация:', { login, password });
    // Логика для авторизации
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Регистрация:', { login, password });
    // Логика для регистрации
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Авторизация</h2>
        <div className="input-group">
          <label htmlFor="login">Логин</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Введите логин"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </div>
        <div className="button-group">
          <button type="submit" onClick={handleLogin}>
            Авторизация
          </button>
          <button type="button" onClick={handleRegister}>
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
