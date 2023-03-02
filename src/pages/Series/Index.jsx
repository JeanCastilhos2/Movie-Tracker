import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import BtnSubir from "../../components/BtnSubir/Index";
import CardTitulos from "../../components/CardTitulos/Index";
import Styles from '../GridFilmes.module.css';

const tvListURL = import.meta.env.VITE_API_TV_LIST
const apiKEY = import.meta.env.VITE_API_KEY;

const Series = () => {

    const [lista, setlista] = useState([]);
    const { genero } = useParams()

    const getLista = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setlista(data.results)
    }

    useEffect(() => {
        const listaURL = `${tvListURL}${genero}&language=pt-BR&${apiKEY}`
        getLista(listaURL);
    }, [lista]);

    return (
        <>
            <div className={Styles.filmes_container}>
                {lista.length === 0 && <p>Carregando</p>}
                {lista.length > 0 && lista.map((titulo) => <CardTitulos key={titulo.id} titulo={titulo} />)}
            </div>
            <BtnSubir />
        </>
    )
}

export default Series;