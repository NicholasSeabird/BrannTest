import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import PartnersPage from './pages/PartnersPage';
import NewsPage from './pages/NewsPage';
import OffersPage from './pages/OffersPage';
import logo from './assets/brann-logo.svg';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img src={logo} alt="Brann Logo" width="150" />
          <h1>Tett på Brann</h1>
          <nav>
            <ul>
              <li><Link to="/">Hjem</Link></li>
              <li><Link to="/calendar">Kalender</Link></li>
              <li><Link to="/partners">Partnere</Link></li>
              <li><Link to="/news">Nyheter</Link></li>
              <li><Link to="/offers">Tilbud</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/offers" element={<OffersPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
