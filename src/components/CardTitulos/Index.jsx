import { Link } from 'react-router-dom';
import Styles from './CardTitulos.module.css';

const imageURL = import.meta.env.VITE_IMG;

const CardTitulos = ({ titulo }) => {
    return (
        <div className={Styles.card}>
            <Link to={`/titulo/${titulo.name ? 'serie' : 'filme'}/${titulo.id}`}>
                <img src={imageURL + titulo.poster_path} alt={titulo.title} />
                <a>{titulo.title}</a>
                <a>{titulo.name}</a>
            </Link>
        </div>
    )
}

export default CardTitulos;