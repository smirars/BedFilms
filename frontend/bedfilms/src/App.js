import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import AuthPage from './components/AuthPage'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<AuthPage />} />
          </Routes>
      </Router>
    );   
}

export default App
