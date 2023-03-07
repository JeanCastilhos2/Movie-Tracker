import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Styles from './CardTitulos.module.css';


const imageURL = import.meta.env.VITE_IMG;

const CardTitulos = ({ titulo }) => {

    const [nota, setNota] = useState(titulo.nota);

    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= nota; i++) {
          stars.push(
            <FaStar
              key={i}
              style={{ color: "green" }}
              size={"3vh"}
            />
          )
        }
        return stars
      };

    return (
        <div className={Styles.card}>
          {titulo.tipo ?
            <Link to={`/titulo/${titulo.tipo === 'serie' ? 'serie' : 'filme'}/${titulo.id}`}>
                <img src={imageURL + titulo.poster_path} alt={titulo.title || titulo.name || titulo.nome} />
                <a>{titulo.title || titulo.name || titulo.nome}</a>
                <div>{renderStars()}</div>
            </Link>
          : 
            <Link to={`/titulo/${titulo.title ? 'filme' : 'serie'}/${titulo.id}`}>
                <img src={imageURL + titulo.poster_path} alt={titulo.title || titulo.name || titulo.nome} />
                <a>{titulo.title || titulo.name || titulo.nome}</a>
                <div>{renderStars()}</div>
            </Link>
          }

        </div>
    )
}

export default CardTitulos;
