import { useState, useEffect } from "react";
import CardFilmes from "../components/CardFilmes";
import Styles from './GridFilmes.module.css';

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;


const Home = () => {

    const [homeFilmes,setHomeFilmes] = useState([]);

    const getHomeFilmes = async (url) => {

        const response = await fetch(url)

        const data = await response.json()

        setHomeFilmes(data.results)


    }

    useEffect(() => {

        const homeFilmesURL = `${moviesURL}popular?${apiKEY}`;

        getHomeFilmes(homeFilmesURL);

    }, []);

    return(
          <div className={Styles.filmes_container}>
             {homeFilmes.length === 0 && <p>Carregando</p> }
             {homeFilmes.length > 0 && homeFilmes.map((filme) => <CardFilmes key={filme.id} filme={filme} />)}
          </div>
    )
}

export default Home;