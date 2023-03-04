import { Link } from 'react-router-dom';
import Styles from './CardTitulos.module.css';

const imageURL = import.meta.env.VITE_IMG;

const CardTitulos = ({ titulo }) => {
    console.log(titulo)
    return (
        <div className={Styles.card}>
            <Link to={`/titulo/${titulo.tipo === 'serie' ? 'serie' : 'filme'}/${titulo.id}`}>
                <img src={imageURL + titulo.poster_path} alt={titulo.title || titulo.name || titulo.nome} />
                <a>{titulo.title || titulo.name || titulo.nome}</a>
            </Link>
        </div>
    )
}

export default CardTitulos;