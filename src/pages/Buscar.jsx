import { useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';

import CardFilmes from '../components/CardFilmes';

import Styles from './GridFilmes.module.css';

const buscaURL = import.meta.env.VITE_SEARCH
const apiKEY = import.meta.env.VITE_API_KEY;


const Buscar = () => {

    const [searchParams] = useSearchParams();

    const [filmes,setFilmes] = useState([]);

    const query = searchParams.get("q");



    const getBuscaFilmes = async (url) => {

        const response = await fetch(url)

        const data = await response.json()

        setFilmes(data.results)

    }

    useEffect(() => {

        const buscaQueryURL = `${buscaURL}?${apiKEY}&query=${query}`;

        getBuscaFilmes(buscaQueryURL);

    }, [query])

    return(
        <div className={Styles.container}>
        <h2 className={Styles.title}>Resultados : <span className={Styles.query_text}>{query}</span></h2>
        <div className={Styles.filmes_container}>
           {filmes.length === 0 && <p>Carregando</p>}
           {filmes.length > 0 && filmes.map((filme) => <CardFilmes key={filme.id} filme={filme} />)}
        </div>
      </div>
    )
}

export default Buscar;