import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
import PartnersPage from "./pages/PartnersPage";
import NewsPage from "./pages/NewsPage";
import OffersPage from "./pages/OffersPage";
import logo from "./assets/brann-logo.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-red-600 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            <div className="flex items-center">
              <img src={logo} alt="Brann Logo" className="h-12 mr-4" />
              <h1 className="text-2xl font-bold">Tett på Brann</h1>
            </div>
            {/* Navbar */}
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "font-bold underline" : "hover:opacity-80"
                    }
                  >
                    Hjem
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/calendar"
                    className={({ isActive }) =>
                      isActive ? "font-bold underline" : "hover:opacity-80"
                    }
                  >
                    Kalender
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/partners"
                    className={({ isActive }) =>
                      isActive ? "font-bold underline" : "hover:opacity-80"
                    }
                  >
                    Partnere
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    className={({ isActive }) =>
                      isActive ? "font-bold underline" : "hover:opacity-80"
                    }
                  >
                    Nyheter
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/offers"
                    className={({ isActive }) =>
                      isActive ? "font-bold underline" : "hover:opacity-80"
                    }
                  >
                    Tilbud
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hovedinnhold */}
        <main className="container mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
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
