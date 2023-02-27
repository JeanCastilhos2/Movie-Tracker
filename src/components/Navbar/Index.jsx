import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Styles from './Navbar.module.css';
import Logo from '../../assets/Logo/logo.png';


const Navbar = () => {

  const [busca, setBusca] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
   console.log(busca)
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
               <input type="text" placeholder="Buscar" onChange={(e) => setBusca(e.target.value)} value={busca}/>
               <button onSubmit={handleSubmit} type="submit" ><BiSearchAlt2/></button>
        </nav>
      </div>
    )
}

export default Navbar;