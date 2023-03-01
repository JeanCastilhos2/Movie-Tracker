import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import BtnSubir from "../../components/BtnSubir/Index";
import CardTitulos from "../../components/CardTitulos/Index";
import Styles from '../GridFilmes.module.css';

const movieListURL = import.meta.env.VITE_API_MOVIE_LIST
const tvListURL = import.meta.env.VITE_API_TV_LIST
const apiKEY = import.meta.env.VITE_API_KEY;


const Genero = () => {

    const [listaGenero, setlistaGenero] = useState([]);
    const { tipo, genero } = useParams()

    const getListaGenero = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setlistaGenero(data.results)
    }

    useEffect(() => {
        tipo === 'filme'
            ? listaGeneroURL = `${movieListURL}${genero}&language=pt-BR&${apiKEY}`
            : listaGeneroURL = `${tvListURL}${genero}&language=pt-BR&${apiKEY}`
        getListaGenero(listaGeneroURL);
    }, []);

    return (
        <>
            <div className={Styles.filmes_container}>
                {listaGenero.length === 0 && <p>Carregando</p>}
                {listaGenero.length > 0 && listaGenero.map((titulo) => <CardTitulos key={titulo.id} titulo={titulo} />)}
            </div>
            <BtnSubir />
        </>
    )
}

export default Genero;