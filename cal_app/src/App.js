// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "bulma/css/bulma.css";

// Nav Bar
import NavBar from "./components/nav_bar";

// Pages
import HomePage from "./pages/Home";
import Calendar from "./pages/Calendar";
import Event from "./pages/Event";
import Venue from "./pages/Venue";

import { AppProvider } from "./contexts/app";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/planning" element={<Calendar />} />
            <Route path="/events" element={<Event />} />
            <Route path="/venues" element={<Venue />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
