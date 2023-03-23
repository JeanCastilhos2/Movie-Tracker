import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Styles from './Navbar.module.css';
import Logo from '../../assets/Logo/logo.png';
import MenuLateral from '../MenuLateral/Index';

const Navbar = () => {

  const [busca, setBusca] = useState("")
  const [inputAberto, setInputAberto] = useState(false);
  const navigate = useNavigate()

  const buscar = () => {
    navigate(`/buscar?q=${busca}`)
    setBusca("")
  }

  const handleSearchInput = () => {
    setInputAberto(!inputAberto);
  }

  const handleSubmit = (e) => {
    setInputAberto(false)
    e.preventDefault();
    buscar()
  }

  return (
    <div>
      <nav className={Styles.navbar} id="navbar">
        <MenuLateral />
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button className={Styles.open_button} onClick={handleSearchInput} type="submit" >{inputAberto ? "x" : <BiSearchAlt2/>}</button>
        <div className={inputAberto ? Styles.search_container_open : Styles.search_container_hide}>
          <input type="text" placeholder="Buscar" onChange={(e) => setBusca(e.target.value)} value={busca} />
          <button className={Styles.search_button} onClick={handleSubmit} type="submit" ><BiSearchAlt2 /></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;