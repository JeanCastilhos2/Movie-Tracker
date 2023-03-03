import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiFillHome,  AiOutlineSearch } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import Styles from './MenuMobile.module.css';

const MenuMobile = () => {

    return (
        <div>
            <nav className={Styles.MenuMobile} id="menu_mobile">
                <button><AiFillHome/></button>
                <button><AiOutlineSearch /></button>
                <button><FaHeart/></button>
            </nav>
        </div>
    )
}

export default MenuMobile;