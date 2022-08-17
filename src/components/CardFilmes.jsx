import {Link} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Styles from './CardFilmes.module.css';


const imageURL = import.meta.env.VITE_IMG;

const CardFilmes = ({ filme, showLink = true }) => {


    return(
        <div className={Styles.card}>
          <img src={imageURL + filme.poster_path} alt={filme.title} />
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