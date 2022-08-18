import axios from "axios"
import {Link} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Styles from './CardFilmes.module.css';

const imageURL = import.meta.env.VITE_IMG;

const CardFilmes = ({ filme, showLink = true }) => {

  function cadastrar(){

    const data = {
    
      id: filme.id,
      title: filme.title,
      poster_path: filme.poster_path,
      vote_average: filme.vote_average,
      }
      axios.post('http://localhost:4567/addfilme', data)
  }

    return(
        <div className={Styles.card}>
           <img src={imageURL + filme.poster_path} alt={filme.title} />
           <button onClick={cadastrar}>+</button>
           <h2>{filme.title}</h2>
           <p>
             {filme.vote_average}<FaStar/>
           </p>
           {showLink && 
             <Link to={`/filme/${filme.id}`}>
               <button>Detalhes</button>
             </Link>        
           }
        </div>
    )
}

export default CardFilmes;