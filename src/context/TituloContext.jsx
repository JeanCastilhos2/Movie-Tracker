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

  const removeTitulo = (id, tipo, nome, poster_path) => {
    setTitulos(titulos.filter((titulo) => titulo.id !== id || titulo.tipo !== tipo || titulo.nome !== nome || titulo.poster_path !== poster_path));
  };

  const isTituloSalvo = (id, tipo, nome, poster_path) => {
    return titulos.some((titulo) => titulo.id === id && titulo.tipo === tipo && titulo.nome === nome && titulo.poster_path === poster_path);
  };

  const setTituloNota = (id, tipo, nota) => {
    setTitulos(
      titulos.map((titulo) => {
        if (titulo.id === id && titulo.tipo === tipo) {
          return { ...titulo, nota };
        }
        return titulo;
      })
    );
  };

  const setTituloStatus = (id, tipo, status) => {
    setTitulos(
      titulos.map((titulo) => {
        if (titulo.id === id && titulo.tipo === tipo) {
          return { ...titulo, status: status };
        }
        return titulo;
      })
    );
  };

  const setTituloData = (id, tipo, data) => {
    setTitulos(
      titulos.map((titulo) => {
        if (titulo.id === id && titulo.tipo === tipo) {
          return { ...titulo, data: data };
        }
        return titulo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("titulos", JSON.stringify(titulos));
  }, [titulos]);

  return (
    <TituloContext.Provider
      value={{
        titulos,
        addTitulo,
        removeTitulo,
        isTituloSalvo,
        setTituloNota,
        setTituloStatus,
        setTituloData
      }}
    >
      {props.children}
    </TituloContext.Provider>
  );
};

export default TituloContextProvider;
