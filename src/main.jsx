import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "../src/pages/Home/Index";
import Titulo from "../src/pages/Titulo/Index";
import MeusFilmes from "../src/pages/MeusFilmes/Index";
import Series from "./pages/Series/Index";
import Filmes from "./pages/Filmes/Index";
import Resultados from "./pages/Resultados/Index";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="minhaLista" element={<MeusFilmes />} />
          <Route path="series/:genero" element={<Series />} />
          <Route path="filmes/:genero" element={<Filmes />} />
          <Route path="titulo/:tipo/:id" element={<Titulo />} />
          <Route path="buscar" element={<Resultados />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
