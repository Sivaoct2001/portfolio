import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Links from "./components/header/header";
import Footer from "./components/footer/footer";
import Overview from "./components/pages/overview";
import Certify from "./components/pages/certification";
import Myportfolio from "./components/pages/portfolio";

function App() {
  return (
    <div>
      <Links />

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/certification" element={<Certify />} />
        <Route path="/portfolio" element={<Myportfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
