import React from 'react';

function CalendarPage() {
  return (
    <div className="container">
      <h2>Kalender</h2>
      <p>Her finner du kommende arrangementer.</p>

      <button className="button">Legg til i kalender</button>

      <div className="card">
        <h3>Kommende kamp</h3>
        <p>Brann vs. Rosenborg - Lørdag kl. 18:00</p>
      </div>

      <div className="card">
        <h3>Treningsøkt</h3>
        <p>Åpen trening for fans på Stadion</p>
      </div>
    </div>
  );
}

export default CalendarPage;
