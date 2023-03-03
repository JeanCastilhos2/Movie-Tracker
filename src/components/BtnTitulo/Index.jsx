import { useContext, useState } from "react";
import { TituloContext } from "../../context/TituloContext";
import Styles from './BtnTitulo.module.css';

const TituloButton = ({ id, tipo, nome, posterPath }) => {

  const { titulos, addTitulo, removeTitulo, isTituloSalvo } = useContext(
    TituloContext
  )

  const [adicionado, setAdicionado] = useState(
    isTituloSalvo(id, tipo, nome, posterPath)
  )

  const handleClick = () => {
    if (adicionado) {
      removeTitulo(id, tipo, nome, posterPath);
      setAdicionado(false);
    } else {
      addTitulo({ id, tipo,  nome, posterPath});
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
