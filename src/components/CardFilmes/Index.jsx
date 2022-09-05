import {Link} from 'react-router-dom';
import Styles from './CardFilmes.module.css';

const imageURL = import.meta.env.VITE_IMG;

const CardFilmes = ({ filme }) => {
     
    return(

        <div className={Styles.card}>
           <Link to={`/filme/${filme.id}`}>
               <img src={imageURL + filme.poster_path} alt={filme.title} />
           </Link>        

        </div>
    )
}

export default CardFilmes;