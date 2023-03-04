import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardTitulos from "../../components/CardTitulos/Index";
import Styles from "../GridFilmes.module.css";

const buscaURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;

const Resultados = () => {

  const [resultados, setResultados] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const getResultados = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setResultados(data.results);
  };

  useEffect(() => {
    const buscaQueryURL = `${buscaURL}?${apiKEY}&query=${query}`;
    getResultados(buscaQueryURL);
  }, [query]);

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.filmes_container}>
          {resultados.length === 0 && <p>Carregando</p>}
          {resultados.length > 0 &&
            resultados.map((resultado) => <CardTitulos key={resultado.id} titulo={resultado} />)}
        </div>
      </div>
    </>
  );
};

export default Resultados;
