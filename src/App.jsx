import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Karaoke from "./pages/Karaoke";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
    <Route path="/karaoke" element={<Karaoke />} />
</Routes>
  );
}
