import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

import Styles from './MenuMobile.module.css';

const MenuMobile = () => {

    const [btnSubir, setBtnSubir] = useState(false);
    const navigate = useNavigate()

    const navegarInicio = () => {
        navigate(`/`)
    }
    const navegarMinhaLista = () => {
        navigate(`minhalista`)
    }

    const subir = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setBtnSubir(true)
            } else { setBtnSubir(false) }
        })
    }, [btnSubir])

    return (
        <div>
            <nav className={Styles.MenuMobile} id="menu_mobile">
                <button onClick={navegarInicio}><AiFillHome /></button>
                <button><AiOutlineSearch /></button>
                <button onClick={navegarMinhaLista}><FaHeart /></button>
                <button onClick={subir}><FiArrowUp/></button>
            </nav>
        </div>
    )
}

export default MenuMobile;