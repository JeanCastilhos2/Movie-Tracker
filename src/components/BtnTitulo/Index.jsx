import { useContext, useState } from "react";
import { TituloContext } from "../../context/TituloContext";
import Styles from './BtnTitulo.module.css';

const TituloButton = ({ id, tipo, nome, poster_path }) => {

  const { addTitulo, removeTitulo, isTituloSalvo } = useContext(
    TituloContext
  )

  const [adicionado, setAdicionado] = useState(
    isTituloSalvo(id, tipo, nome, poster_path)
  )

  const handleClick = () => {
    if (adicionado) {
      removeTitulo(id, tipo, nome, poster_path);
      setAdicionado(false);
    } else {
      addTitulo({ id, tipo,  nome, poster_path});
      setAdicionado(true);
    }
  }

  return (
    <button className={Styles.BtnTitulo} onClick={handleClick}>
      {adicionado ? <span>-</span> : <span>+</span>}
    </button>
  )
}

export default TituloButton;
