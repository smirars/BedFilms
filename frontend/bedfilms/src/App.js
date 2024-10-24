import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import AuthPage from './components/AuthPage'
import WelcomePage from './WelcomePage'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<AuthPage />} />
              <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
      </Router>
    );   
}

export default App
