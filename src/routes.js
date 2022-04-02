import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ModeChoice from "./pages/ModeChoice";
import PlayerChoice from "./pages/PlayerChoice";

export default function RoutesGeneral() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModeChoice />} />

        <Route path="/playervsplayer" element={<PlayerChoice />} />
        <Route path="/playervscomputer" element={<PlayerChoice />} />
      </Routes>
    </BrowserRouter>
  );
}
