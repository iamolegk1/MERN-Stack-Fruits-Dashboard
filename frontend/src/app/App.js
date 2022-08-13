import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { paths } from "../paths";
const { home } = paths;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;