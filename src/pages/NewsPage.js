import React from 'react';

function NewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brannRed">Nyheter</h1>
      <p className="text-lg text-gray-700">Les de siste oppdateringene fra Brann.</p>
      <div className="space-y-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-brannRed">Ny stjernespiller signert!</h2>
          <p className="text-gray-700">Brann har signert en ny spiller som styrker laget.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-brannRed">Oppdateringer om stadion.</h2>
          <p className="text-gray-700">Les om de nyeste forbedringene på stadion.</p>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
