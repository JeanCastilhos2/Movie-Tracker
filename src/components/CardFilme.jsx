import { FaStar } from 'react-icons/fa';
/* import Styles from './Card.module.css'; */


const imageURL = import.meta.env.VITE_IMG;

const CardFilme = ({ filme }) => {
    return(
        <div /* className={Styles.container} */>
          <img src={imageURL + filme.poster_path} alt={filme.title} />
   
          <h1>{filme.title}</h1>
          <p>
            <FaStar/>{filme.vote_average}
          </p>
          <p>Idioma: {filme.original_language} </p>
          <p>Duração: {filme.runtime} </p>
          <p>Lançamento: {filme.release_date} </p>
          <p>Orçamento: U$ {filme.budget} </p>
          <p>Bilheteria: U$ {filme.revenue} </p>
          <p>Sinopse:</p>
          <p>
            {filme.overview}
          </p>
        </div>
    )
}

export default CardFilme;