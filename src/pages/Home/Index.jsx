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
        <CardDestaque destaque={destaque} />
      </div>
      <div>
        <MovieRow lista={listaSeries} titulo="Séries" />
      </div>
      <div>
        <MovieRow lista={listaTreding} titulo="Popular" />
      </div>
      <div>
        <MovieRow lista={listaAcao} titulo="Ação" />
      </div>
      <BtnSubir />
    </div>
  );
};

export default Home;
