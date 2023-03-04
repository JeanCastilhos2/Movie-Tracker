import { useNavigate } from 'react-router-dom';
import { AiFillHome,  AiOutlineSearch } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import Styles from './MenuMobile.module.css';

const MenuMobile = () => {

    const navigate = useNavigate()
    
    const navegarInicio = () => {
        navigate(`/`)
      }
    const navegarMinhaLista = () => {
        navigate(`minhalista`)
      }

    return (
        <div>
            <nav className={Styles.MenuMobile} id="menu_mobile">
                <button onClick={navegarInicio}><AiFillHome/></button>
                <button><AiOutlineSearch /></button>
                <button onClick={navegarMinhaLista}><FaHeart/></button>
            </nav>
        </div>
    )
}

export default MenuMobile;