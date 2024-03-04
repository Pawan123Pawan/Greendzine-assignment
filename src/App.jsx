import React from "react";
import Login from "./components/Login";
import Productivity from "./components/Productivity";
import UserInformation from "./components/UserInformation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resister from "./components/Resister";
import ForgoatPassword from "./components/ForgoatPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Resister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgoatPassword />} />
        <Route path="/home" element={<Productivity />} />
        <Route path="/user" element={<UserInformation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
