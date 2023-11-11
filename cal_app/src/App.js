// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "bulma/css/bulma.css";

// TODO: import Header from "./components/Header";
// TODO: import Footer from "./components/Footer";

// Nav Bar
import NavBar from "./components/cal_planning/nav_bar";

// Pages
import HomePage from "./pages/Home";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* TODO: <Header /> */}
      <Routes>
        <Route>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/calplanning" element={<Calendar />} />
          <Route path="/test" />
        </Route>
      </Routes>
      {/* TODO: <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
