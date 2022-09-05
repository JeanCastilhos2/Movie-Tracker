import { useState, useEffect } from "react";
import CardFilmes from "../../components/CardFilmes/Index";
import BtnSubir from "../../components/BtnSubir/Index";
import Styles from '../GridFilmes.module.css';


const MeusFilmes = () => {

   const [meusFilmes,setMeusFilmes] = useState([]);

   const getMeusFilmes = async (url) => {

        const response = await fetch(url);

        const data = await response.json();

        setMeusFilmes(data);
        
    } 

    useEffect(() => {

        const meusFilmesURL = `http://localhost:4567/filmes`;

        getMeusFilmes(meusFilmesURL);

    },[meusFilmes]); 

    return(
          <>
          <div className={Styles.filmes_container}>
             {meusFilmes.length === 0 && <p>Carregando</p> }
             {meusFilmes.length > 0 && meusFilmes.map((filme) => <CardFilmes key={filme.id} filme={filme} />)}
          </div>
          <BtnSubir/>
          </>

    )
}

export default MeusFilmes;