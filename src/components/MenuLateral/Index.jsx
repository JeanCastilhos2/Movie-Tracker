import React, { useState } from "react";
import Styles from "./MenuLateral.module.css"
import { FaGripLines } from 'react-icons/fa';

const MenuLateral = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <button className={Styles.side_button} onClick={handleMenu}><FaGripLines/></button>
      <nav className={menuAberto ? Styles.show : Styles.hide}>
        <ul>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Minha lista</li>
        </ul>
      </nav>
    </>
  );
};

export default MenuLateral;
