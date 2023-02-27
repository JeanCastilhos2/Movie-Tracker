import { Link } from 'react-router-dom';
import Styles from './CardDestaque.module.css';

const CardDestaque = ({ destaque }) => {

  return (
    <Link className={Styles.link} to={`/titulo/${destaque.name ? 'serie' : 'filme'}/${destaque.id}`}>
      <section className={Styles.card_destaque} style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${destaque.backdrop_path})`,
      }}>
        <div className={Styles.card_vertical}>
          <div className={Styles.card_horizontal}>
            <div className={Styles.titulo}>
              {destaque.title && destaque.title}
              {destaque.name && destaque.name}
            </div>
            <div className={Styles.info}></div>
            <div className={Styles.descrição}>{destaque.overview}</div>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default CardDestaque;