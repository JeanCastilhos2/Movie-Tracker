import {Link} from 'react-router-dom';
import Styles from './CardDestaque.module.css';


const CardDestaque = ( { destaque } ) => {
     
    return(


    <div className={Styles.card}>
      <Link to={`/filme/${destaque.id}`}>
        <div className={Styles.card_destaque} style={{
           backgroundSize: 'cover',
           backgroundImage: `url(https://image.tmdb.org/t/p/original${destaque.backdrop_path})`,
        }}>    
           
           <div className={Styles.card_vertical}>
             <div className={Styles.card_horizontal}>
                <div className={Styles.titulo}>
                  {destaque.title && destaque.title} 
                  {destaque.name && destaque.name} 
                </div>
                <div className={Styles.info}>
                    <div className={Styles.pontos}></div>
                </div>
                <div className={Styles.descrição}>{destaque.overview}</div>
             </div>
           </div> 
        </div>
      </Link>  
    </div> 
    )
}

export default CardDestaque;