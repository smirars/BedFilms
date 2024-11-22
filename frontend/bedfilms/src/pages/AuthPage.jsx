import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/AuthPage.css'

const AuthPage = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Отправляем логин:', login, 'и пароль:', password);
    if (!login || !password) {
      console.log('Логин и пароль не должны быть пустыми');
      return;
    }
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: login, password }),
    });
    
    const data = await response.json();
    if (response.ok) {
      const storedUser = JSON.parse(localStorage.getItem('user')) || {};
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...storedUser,
          username: login,
          avatar: storedUser.avatar || null,
        })
      );
      navigate('/home');
    } else {
      console.log('Ошибка:', data.msg);
    }
  };
  
  

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
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
          <button type="submit" onSubmit={handleLogin}>
            Авторизация
          </button>
          <button type="button" onClick={() => navigate('/registration')}>
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;