import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <h2>Velkommen til Tett på Brann</h2>
      <p>Hold deg oppdatert med Brann-partnere, arrangementer og nyheter.</p>

      {/* 🔲 Kortlayout */}
      <div className="card-container">
        <div className="card">
          <h3>📅 Kalender</h3>
          <p>Se kommende arrangementer og legg dem til i din kalender.</p>
          <Link to="/calendar" className="btn">Gå til Kalender</Link>
        </div>

        <div className="card">
          <h3>🤝 Partnere</h3>
          <p>Utforsk Branns partnernettverk og bygg forbindelser.</p>
          <Link to="/partners" className="btn">Se Partnere</Link>
        </div>

        <div className="card">
          <h3>📰 Nyheter</h3>
          <p>Hold deg oppdatert på de siste nyhetene fra Brann-nettverket.</p>
          <Link to="/news" className="btn">Les Nyheter</Link>
        </div>

        <div className="card">
          <h3>🔥 Tilbud</h3>
          <p>Få eksklusive tilbud fra Brann og deres partnere.</p>
          <Link to="/offers" className="btn">Se Tilbud</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
