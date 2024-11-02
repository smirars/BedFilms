import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Profile.css'

const Profile = () => {
    const [user, setUser] = useState({
        firstName: 'не указан',
        lastName: 'не указан',
        username: '',
        avatar: null,
        email: 'не указан',
        phone: 'не указан',
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          setUser({
            ...user,
            ...storedUser,
            firstName: storedUser.firstName || 'не указан',
            lastName: storedUser.lastName || 'не указан',
            email: storedUser.email || 'не указан',
            phone: storedUser.phone || 'не указан',
          });
        }
      }, []);
      
      const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          const newAvatar = reader.result;
          setUser((prevUser) => ({ ...prevUser, avatar: newAvatar }));
      
          const updatedUser = { ...user, avatar: newAvatar };
          localStorage.setItem('user', JSON.stringify(updatedUser));
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };
      

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-card">
        <div className="avatar-container">
          <img
            src={user.avatar || 'default-avatar.png'}
            alt="User Avatar"
            className="user-avatar"
          />
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>
        <h3>Профиль пользователя</h3>
        <p>Имя: {user.firstName}</p>
        <p>Фамилия: {user.lastName}</p>
        <p>Логин: {user.username}</p>
        <p>Электронная почта: {user.email}</p>
        <p>Телефон: {user.phone}</p>
      </div>
    </div>
  );
};

export default Profile;
