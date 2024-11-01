import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import AuthPage from './components/AuthPage'
import WelcomePage from './components/WelcomePage'
import Catalog from './pages/Catalog'
import Actors from './pages/Actors'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:film_name" element={<div>Film Detail Page</div>} />
              <Route path="/actors" element={<Actors />} />
          </Routes>
      </Router>
    );   
}

export default App
