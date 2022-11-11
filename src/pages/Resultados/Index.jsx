import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CardFilmes from "../../components/CardFilmes/Index";
import BtnSubir from "../../components/BtnSubir/Index";
import Styles from "../GridFilmes.module.css";

const buscaURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;

const Resultados = () => {

  const [searchParams] = useSearchParams();
  const [buscaFilmes, setBuscaFilmes] = useState([]);
  const query = searchParams.get("q");

  const getBuscaFilmes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setBuscaFilmes(data.results);
  };

  useEffect(() => {

    const buscaQueryURL = `${buscaURL}?${apiKEY}&query=${query}`;
    getBuscaFilmes(buscaQueryURL);

  }, [query]);

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.filmes_container}>
          {buscaFilmes.length === 0 && <p>Carregando</p>}
          {buscaFilmes.length > 0 &&
            buscaFilmes.map((filme) => <CardFilmes key={filme.id} filme={filme} />)}
        </div>
      </div>
      <BtnSubir />
    </>
  );
};

export default Resultados;
