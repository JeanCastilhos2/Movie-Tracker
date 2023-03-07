import { useContext, useState } from "react";
import { TituloContext } from "../../context/TituloContext";
import { FaStar } from "react-icons/fa";
import Styles from "./BtnTitulo.module.css";

const TituloButton = ({ id, tipo, nome, poster_path }) => {

  const {
    addTitulo,
    removeTitulo,
    isTituloSalvo,
    setTituloNota,
    setTituloStatus,
    setTituloData
  } = useContext(TituloContext);

  const [adicionado, setAdicionado] = useState(
    isTituloSalvo(id, tipo, nome, poster_path)
  )
  const [nota, setNota] = useState(0);
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");

  const handleClick = () => {
    if (adicionado) {
      removeTitulo(id, tipo, nome, poster_path);
      setAdicionado(false);
    } else {
      addTitulo({
        id,
        tipo,
        nome,
        poster_path,
        nota,
        status,
        data,
      });
      setAdicionado(true);
    }
  };

  const handleStarClick = (num) => {
    if (adicionado) {
      setNota(num);
      setTituloNota(id, tipo, num);
    }
  }

  const handleStatusClick = (option) => {
    setTituloStatus(id, tipo, option)
    setTituloData(id, tipo, "")
  }

  const handleDateChange = (e) => {
    setData(e.target.value);
    setTituloData(id, tipo, e.target.value);
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      const color = i <= nota ? "green" : "grey";
      stars.push(
        <FaStar
          key={i}
          className={Styles.star}
          style={{ color: color }}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  const renderStatusButtons = () => {
    const options = ["assistido", "quero assistir"];
    return options.map((option) => {
      const active = status === option;
      return (
        <button
          key={option}
          className={`${Styles.statusButton} ${active ? Styles.active : ""
            }`}
          onClick={() => handleStatusClick(option)}
        >
          {option}
        </button>
      );
    });
  };

  const renderDateInput = () => {
    if (status === "assistido") {
      return (
        <div className={Styles.dateContainer}>
          <label>Data de Assistido:</label>
          <input
            type="date"
            value={data}
            onChange={handleDateChange}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <button className={Styles.BtnTitulo} onClick={handleClick}>
        {adicionado ? <span>-</span> : <span>+</span>}
      </button>
      {adicionado ? (
        <div className={Styles.details}>
          <div className={Styles.starsContainer}>{renderStars()}</div>
          <div className={Styles.statusContainer}>
            {renderStatusButtons()}
          </div>
          {renderDateInput()}
        </div>
      ) : null}
    </div>
  );
};

export default TituloButton;
