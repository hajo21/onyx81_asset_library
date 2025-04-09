import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocumentsPage from "./pages/DocumentsPage";
import VideosPage from "./pages/VideosPage";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
    </Routes>
  );
}

export default App;