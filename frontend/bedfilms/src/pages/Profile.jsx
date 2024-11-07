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

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(user);

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

      const handleEditButtonClick = () => {
        setIsEditing(true);
        setEditData(user);
      };

      const handleSaveButtonClick = () => {
        setUser(editData);
        setIsEditing(false);
        localStorage.setItem('user', JSON.stringify(editData));
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({ ...prevData, [name]: value }));
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
        {isEditing ? (
                    <div className="edit-form">
                        <label>
                            Имя:
                            <input
                                type="text"
                                name="firstName"
                                value={editData.firstName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Фамилия:
                            <input
                                type="text"
                                name="lastName"
                                value={editData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Логин:
                            <input
                                type="text"
                                name="username"
                                value={editData.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Электронная почта:
                            <input
                                type="email"
                                name="email"
                                value={editData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Телефон:
                            <input
                                type="tel"
                                name="phone"
                                value={editData.phone}
                                onChange={handleChange}
                            />
                        </label>
                        <button onClick={handleSaveButtonClick}>Сохранить</button>
                    </div>
                ) : (
                    <>
                        <p>Имя: {user.firstName}</p>
                        <p>Фамилия: {user.lastName}</p>
                        <p>Логин: {user.username}</p>
                        <p>Электронная почта: {user.email}</p>
                        <p>Телефон: {user.phone}</p>
                        <button onClick={handleEditButtonClick}>Изменить профиль</button>
                    </>
                )}
      </div>
    </div>
  );
};

export default Profile;
