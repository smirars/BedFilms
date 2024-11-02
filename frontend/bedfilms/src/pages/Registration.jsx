import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
// import '../styles/Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        });
    
        const data = await response.json();
        
        if (response.ok) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              username: formData.username,
              avatar: null,
            })
          );
    
          navigate('/welcome');
        } else {
          setError(data.msg);
        }
      } catch (error) {
        console.error('Ошибка регистрации:', error);
        setError('Ошибка при регистрации. Попробуйте снова.');
      }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <div className="input-group">
          <label>Имя</label>
          <input type="text" name="firstName" onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Фамилия</label>
          <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Логин</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Пароль</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Повторите пароль</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label>Электронная почта</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Телефон</label>
          <input type="tel" name="phone" onChange={handleChange} />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
