import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    localStorage.setItem(
      'user',
      JSON.stringify({
        ...formData,
        avatar: null,
      })
    );
    navigate('/welcome');
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
