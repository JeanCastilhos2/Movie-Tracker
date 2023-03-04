import { FaStar } from "react-icons/fa";
import Styles from "./CardTitulo.module.css";

const CardTitulo = ({ titulo }) => {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500${titulo.poster_path}`;

  return (
    <div className={`${Styles.card} ${Styles.card_destaque}`}>
      <div className={`${Styles.card_vertical} ${Styles.link}`}>
        <div className={Styles.titulo}>{titulo.title}</div>
        <div className={Styles.descricao}>{titulo.overview}</div>
      </div>
      <div className={`${Styles.card_horizontal} ${Styles.link}`}>
        <img src={backgroundImageUrl} alt={titulo.title} />
        <div className={Styles.informacoes}>
          <div className={Styles.classificacao}>
            <FaStar /> {titulo.vote_average}
          </div>
          <div className={Styles.outrasInformacoes}>
            <p>Idioma: {titulo.original_language} </p>
            <p>Duração: {titulo.runtime} </p>
            <p>Lançamento: {titulo.release_date} </p>
            <p>Orçamento: U$ {titulo.budget} </p>
            <p>Bilheteria: U$ {titulo.revenue} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTitulo;

