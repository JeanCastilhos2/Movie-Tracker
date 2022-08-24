import {Link} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Styles from './CardFilmes.module.css';

const imageURL = import.meta.env.VITE_IMG;

const CardFilmes = ({ filme }) => {

  function cadastrar(){

    const data = {
    
      id: filme.id,
      title: filme.title,
      poster_path: filme.poster_path,
      vote_average: filme.vote_average,
      
      }

    fetch("http://localhost:4567/addfilme", {
     method: "POST",
     headers: {"Content-Type": "application/json", },
     body: JSON.stringify(data),
  })

  }

  function deletar(){

    const data = {
    
      id: filme.id,

      }

    fetch("http://localhost:4567/delfilme", {
     method: "POST",
     headers: {"Content-Type": "application/json", },
     body: JSON.stringify(data),
  })

  }
     
    return(

        <div className={Styles.card}>
           <img src={imageURL + filme.poster_path} alt={filme.title} />
           {filme.add === 'true' ?
           <button className={Styles.add} onClick={deletar}>-</button> 
           :
           <button className={Styles.add_btn} onClick={cadastrar}>+</button>
           }
           <h2>{filme.title}</h2>
           <p>
             {filme.vote_average}<FaStar/>
           </p>
           <Link to={`/filme/${filme.id}`}>
               <button>Detalhes</button>
           </Link>        

        </div>
    )
}

export default CardFilmes;