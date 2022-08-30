import { FaStar } from 'react-icons/fa';

import Styles from './CardFilme.module.css';

import './CardFilme.module.css';

const imageURL = import.meta.env.VITE_IMG;

export function CardFilme( { filme } ) {

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

    return (
   

<div className={Styles.movie_card}>
  
    <div className={Styles.container}>
          
        <div className={Styles.hero}>

          <img src={imageURL + filme.poster_path} alt={filme.title} />
            
            <div className={Styles.details}>
      
              <div className={Styles.title1}>{filme.title}<span>{filme.original_language}</span></div>

              <div className={Styles.title2}><FaStar />{filme.vote_average}</div>    

              <div className={Styles.title2}>Duração : {filme.runtime} min</div>  

              <div className={Styles.title2}>Lançamento : {filme.release_date}</div>    
        
            </div> 
      
        </div> 
    
      <div className={Styles.description}>
      
            <div className={Styles.column1}>
            {filme.add === 'true' ?
             <button className={Styles.btn_add} onClick={deletar}>-</button> 
              :
             <button className={Styles.btn_add} onClick={cadastrar}>+</button>
            } 
            </div>  
      
           <div className={Styles.column2}>
              <p>{filme.overview}</p>
           </div> 
      </div> 

    </div> 

</div> 




      /*   <div>



            <img src={imageURL + filme.poster_path} alt={filme.title} />
            <h1>{filme.title}</h1>
            <p>
                <FaStar />{filme.vote_average}
            </p>
            <p>Idioma: {filme.original_language} </p>
            <p>Duração: {filme.runtime} </p>
            <p>Lançamento: {filme.release_date} </p>
            <p>Orçamento: U$ {filme.budget} </p>
            <p>Bilheteria: U$ {filme.revenue} </p>
            <p>Sinopse:</p>
            <p>{filme.overview}</p>
        </div>  */
    );
}

