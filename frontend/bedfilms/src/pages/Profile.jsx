// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Profile.css'

const Profile = () => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUsername(storedUser.username);
      setAvatar(storedUser.avatar);
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
      const userData = { username, avatar: reader.result };
      localStorage.setItem('user', JSON.stringify(userData));
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
            src={avatar || 'default-avatar.png'}
            alt="User Avatar"
            className="user-avatar"
          />
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>
        <h3>{username}</h3>
      </div>
    </div>
  );
};

export default Profile;
