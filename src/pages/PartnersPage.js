import React from 'react';

function PartnersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brannRed">Branns partnere</h1>
      <p className="text-lg">
        Her finner du en oversikt over alle våre partnere og nettverksmedlemmer.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h2>Partner 1</h2>
          <p>Beskrivelse av partner 1 og deres tjenester.</p>
        </div>
        <div className="card">
          <h2>Partner 2</h2>
          <p>Beskrivelse av partner 2 og deres tjenester.</p>
        </div>
        <div className="card">
          <h2>Partner 3</h2>
          <p>Beskrivelse av partner 3 og deres tjenester.</p>
        </div>
      </div>
    </div>
  );
}

export default PartnersPage;
