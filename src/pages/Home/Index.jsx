import React from "react";
import { useState, useEffect } from "react";
import CardDestaque from "../../components/CardDestaque/Index";
import MovieRow from "../../components/MovieRow/Index";
import BtnSubir from "../../components/BtnSubir/Index";
import { getLista } from "../../services/gets";

const Home = () => {
  const [listaSeries, setListaSeries] = useState([]);
  const [listaTreding, setListaTreding] = useState([]);
  const [listaAcao, setListaAcao] = useState([]);
  const [listaComedia, setListaComedia] = useState([]);
  const [listaAnimação, setListaAnimação] = useState([]);
  const [listaDocumental, setListaDocumental] = useState([]);
  const [destaque, setDestaque] = useState([]);

  const getHomeFilmes = async () => {
    const listaS = await getLista(
      `/discover/tv?with_network=213&language=pt-BR`
    );
    setListaSeries(listaS);

    const listaT = await getLista(`/trending/all/week?language=pt-BR`);
    setListaTreding(listaT);

    const listaA = await getLista(
      `/discover/movie?with_genres=28&language=pt-BR`
    );
    setListaAcao(listaA);

    const listaAN = await getLista(
      `/discover/movie?with_genres=16&language=pt-BR`
    );
    setListaAnimação(listaAN);

    const listaD = await getLista(
      `/discover/tv?with_genres=99&language=pt-BR`
    );
    setListaDocumental(listaD);

    const listaC = await getLista(
      `/discover/movie?with_genres=35&language=pt-BR`
    );
    setListaComedia(listaC);

    const random = Math.floor(Math.random() * listaT.length);
    const filmeDestaque = listaT[random];
    setDestaque(filmeDestaque);
  };

  useEffect(() => {
    getHomeFilmes();
  }, []);

  return (
    <div>
       <div>
        <CardDestaque destaque={destaque} titulo="Em Destaque" />
      </div>
      <div>
        <MovieRow lista={listaTreding} titulo="Popular" />
      </div>
      <div>
        <MovieRow lista={listaSeries} titulo="Séries" />
      </div>
      <div>
        <MovieRow lista={listaAcao} titulo="Ação" />
      </div>
      <div>
        <MovieRow lista={listaAnimação} titulo="Animações" />
      </div>
      <div>
        <MovieRow lista={listaComedia} titulo="Comedia" />
      </div>
      <div>
        <MovieRow lista={listaDocumental} titulo="Documental" />
      </div>
      <BtnSubir />
    </div>
  );
};

export default Home;
