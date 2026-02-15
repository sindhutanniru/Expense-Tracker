import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MoneyReceived from "./pages/MoneyReceived";
import MoneySent from "./pages/MoneySent";
import Profile from "./pages/Profile";

function App() {
  const user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* AFTER LOGIN */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* MONEY RECEIVED */}
        <Route
          path="/moneyreceived"
          element={user ? <MoneyReceived /> : <Navigate to="/login" />}
        />

        {/* MONEY SENT */}
        <Route
          path="/moneysent"
          element={user ? <MoneySent /> : <Navigate to="/login" />}
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;