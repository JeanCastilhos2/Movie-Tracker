import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardFilme } from '../components/CardFilme';

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

const Filme = () => {

    const {id} = useParams();

    const [filme, setFilme] = useState(null);

    const getFilme = async (url) => {

        const response = await fetch(url);

        const data = await response.json();

        setFilme(data);
   
    }

    useEffect(() => {

        const filmeURL = `${moviesURL}${id}?${apiKEY}`;

        getFilme(filmeURL);

    }, []);


    return(
        <div>{filme && <CardFilme filme={filme} />}</div>
    )
}

export default Filme;