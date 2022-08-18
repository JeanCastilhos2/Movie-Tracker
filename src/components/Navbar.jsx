import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Styles from './Navbar.module.css';
import Logo from '../assets/logo.png';


const Navbar = () => {

  const [busca, setBusca] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();
    
    if(!busca) return;

    navigate(`/buscar?q=${busca}`);
    setBusca("");
  }

    return(
      <div>
        <nav className={Styles.navbar} id="navbar">
            <Link to="/">
               <img src={Logo} alt="logo"/> 
            </Link>
            <Link to="meusfilmes">
               <h2>Meus filmes</h2>
              </Link>
            <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Buscar" onChange={(e) => setBusca(e.target.value)} value={busca}/>
               <button type="submit" ><BiSearchAlt2/></button>
            </form>
        </nav>
      </div>
    )
}

export default Navbar;