import React from 'react';
import '../styles/Navbar.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy; 2024 Все права защищены</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i> 
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i> 
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i> 
          </a>
        </div>
      </footer>
  );
};

export default Footer;