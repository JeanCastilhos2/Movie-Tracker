import { useState, useEffect } from "react";
import CardFilmes from "../components/CardFilmes";
import Styles from './GridFilmes.module.css';

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;


const TopFilmes = () => {

    const [topFilmes,setTopFilmes] = useState([]);

    const getTopFilmes = async (url) => {

        const response = await fetch(url);

        const data = await response.json();

        setTopFilmes(data.results);

    } 
   
    useEffect(() => {

        const topFilmesURL = `${moviesURL}top_rated?${apiKEY}`;

        console.log(topFilmesURL)

        getTopFilmes(topFilmesURL);

    }, []);

    return(
          <div className={Styles.filmes_container}>
             {topFilmes.length === 0 && <p>Carregando</p> }
             {topFilmes.length > 0 && topFilmes.map((filme) => <CardFilmes key={filme.id} filme={filme} />)}
          </div>
    )
}

export default TopFilmes;