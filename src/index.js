import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Padre from "./AppCard";
import { BrowserRouter, Route, Routes } from "react-router";
import Config from "./components/Rutes/Config";
import Navbar from "./components/Navbar";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Padre />} />
        <Route path="/add" element={<Config isEditing={false} />} />
        <Route path="/config/:id" element={<Config isEditing={true} />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
