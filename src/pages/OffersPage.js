import React, { useState } from 'react';

function PartnersPage() {
  const [category, setCategory] = useState('Alle');
  const partners = [
    { id: 1, name: 'Partner 1', category: 'Sport' },
    { id: 2, name: 'Partner 2', category: 'Mat og drikke' },
    { id: 3, name: 'Partner 3', category: 'Hotell' },
    { id: 4, name: 'Partner 4', category: 'Transport' },
    { id: 5, name: 'Partner 5', category: 'Mat og drikke' },
  ];

  const categories = ['Alle', 'Sport', 'Mat og drikke', 'Hotell', 'Transport'];

  const filteredPartners =
    category === 'Alle'
      ? partners
      : partners.filter((partner) => partner.category === category);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brannRed">Branns partnere</h1>
      <p className="text-lg">
        Her finner du en oversikt over alle våre partnere og nettverksmedlemmer.
      </p>
      <div className="flex space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`py-2 px-4 rounded-lg ${
              category === cat ? 'bg-brannRed text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPartners.map((partner) => (
          <div key={partner.id} className="card">
            <h2>{partner.name}</h2>
            <p>Kategori: {partner.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersPage;
