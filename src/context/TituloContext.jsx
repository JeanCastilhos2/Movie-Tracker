import React, { createContext, useState, useEffect } from "react";

export const TituloContext = createContext();

const TituloContextProvider = (props) => {
  const [titulos, setTitulos] = useState([]);

  useEffect(() => {
    const storedTitles = localStorage.getItem("titulos");
    if (storedTitles) {
      setTitulos(JSON.parse(storedTitles));
    }
  }, []);

  const addTitulo = (newTitulo) => {
    setTitulos([...titulos, newTitulo]);
  };

  const removeTitulo = (tituloId, tituloTipo, tituloNome, tituloPosterPath) => {
    setTitulos(titulos.filter((titulo) => titulo.id !== tituloId || titulo.tipo !== tituloTipo || titulo.nome !== tituloNome || titulo.posterPath !== tituloPosterPath));
  };

  const isTituloSalvo = (tituloId, tituloTipo, tituloNome, tituloPosterPath) => {
    return titulos.some((titulo) => titulo.id === tituloId && titulo.tipo === tituloTipo && titulo.nome === tituloNome && titulo.posterPath === tituloPosterPath);
  };

  useEffect(() => {
    localStorage.setItem("titulos", JSON.stringify(titulos));
  }, [titulos]);

  return (
    <TituloContext.Provider
      value={{ titulos, addTitulo, removeTitulo, isTituloSalvo }}
    >
      {props.children}
    </TituloContext.Provider>
  );
};

export default TituloContextProvider;
