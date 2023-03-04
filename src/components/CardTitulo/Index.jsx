import BtnTitulo from "../../components/BtnTitulo/Index";
import { FaStar } from "react-icons/fa";
import Styles from "./CardTitulo.module.css";

const CardTitulo = ({ titulo }) => {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500${titulo.poster_path}`;

  return (
    <div className={`${Styles.card} ${Styles.card_destaque}`}>
      <div className={`${Styles.card_vertical} ${Styles.link}`}>
        <div className={Styles.titulo}>{titulo.title || titulo.name}</div>
        <div className={Styles.descricao}>{titulo.overview}</div>
      </div>
      <div className={`${Styles.card_horizontal} ${Styles.link}`}>
        <img src={backgroundImageUrl} alt={titulo.title} />
        <div className={Styles.informacoes}>
          <div className={Styles.classificacao}>
          <FaStar /> {titulo.vote_average.toFixed(1)}
          </div>
          <div className={Styles.outrasInformacoes}>
            <p>Idioma: {titulo.original_language} </p>
            <p>Duração: {titulo.runtime} </p>
            <p>Lançamento: {titulo.release_date} </p>
            <p>Orçamento: U$ {titulo.budget} </p>
            <p>Bilheteria: U$ {titulo.revenue} </p>
            <BtnTitulo
            id={titulo.id}
            tipo={titulo.name ? 'serie' : 'filme'}
            nome={titulo.name || titulo.title}
            poster_path={titulo.poster_path}
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardTitulo;

