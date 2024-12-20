import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage'
import WelcomePage from './components/WelcomePage'
import Catalog from './pages/Catalog'
import Actors from './pages/Actors'
import Favorites from './pages/Favorite'
import Profile from './pages/Profile'
import Registration from './pages/Registration' 
import FilmDetailPage from './pages/FilmDetailPage'
import ActorDetailPage from './pages/ActorDetailPage';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/home" element={<WelcomePage />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/films/:id" element={<FilmDetailPage />} />
              <Route path="/actors" element={<Actors />} />
              <Route path="/actors/:id" element={<ActorDetailPage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/registration" element={<Registration />} />
          </Routes>
      </Router>
    );   
}

export default App
