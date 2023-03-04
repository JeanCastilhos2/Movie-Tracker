import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Styles from "./MenuLateral.module.css"
import { FaGripLines } from 'react-icons/fa'

const MenuLateral = () => {

  const [menuAberto, setMenuAberto] = useState(false);
  const [filmesAberto, setFilmesAberto] = useState(false);
  const [seriesAberto, setSeriesAberto] = useState(false);
  const navigate = useNavigate()

  const handleMenu = () => {
    setMenuAberto(!menuAberto);
  }
  
  const handleMenuSeries = () => {
    setFilmesAberto(false)
    setSeriesAberto(!seriesAberto);
  }

  const handleMenuFilmes = () => {
    setSeriesAberto(false)
    setFilmesAberto(!filmesAberto);
  }

  const handleNavegarSeries = (e, generoId) => {
    e.preventDefault()
    setMenuAberto(false)
    navegarSeries(generoId)
  }
  
  const handleNavegarFilmes = (e, generoId) => {
    e.preventDefault()
    setMenuAberto(false)
    navegarFilmes(generoId)
  }

  const navegarSeries = (idGenero) => {
    setFilmesAberto(false)
    setSeriesAberto(false)
    navigate(`series/${idGenero}`)
  }

  const navegarFilmes = (idGenero) => {
    setFilmesAberto(false)
    setSeriesAberto(false)
    navigate(`filmes/${idGenero}`)
  }

  const navegarMinhaLista = () => {
    setMenuAberto(false)
    navigate(`minhalista`)
  }

  return (
    <>
      <button className={Styles.side_button} onClick={handleMenu}><FaGripLines /></button>
      <nav className={menuAberto ? Styles.show : Styles.hide}>
        <ul className={Styles.ul} >
          <li onClick={handleMenuSeries} >Séries</li>
          <div className={seriesAberto ? Styles.series_show : Styles.series_hide}>
            <li onClick={(e) => handleNavegarSeries(e, "16")}><span>Animação</span></li>
            <li onClick={(e) => handleNavegarSeries(e, "35")}><span>Comedia</span></li>
            <li onClick={(e) => handleNavegarSeries(e, "18")}><span>Drama</span></li>
            <li onClick={(e) => handleNavegarSeries(e, "99")}><span>Documentario</span></li>
            <li onClick={(e) => handleNavegarSeries(e, "36")}><span>Epóca</span></li>
            <li onClick={(e) => handleNavegarSeries(e, "27")}><span>Terror</span></li>
            <li onClick={(e) => handleNavegarSeries(e, "37")}><span>Westrem</span></li>
          </div>
          <li onClick={handleMenuFilmes} >Filmes</li>
          <div className={filmesAberto ? Styles.filmes_show : Styles.filmes_hide}>
            <li onClick={(e) => handleNavegarFilmes(e, "28")}><span>Ação</span></li>
            <li onClick={(e) => handleNavegarFilmes(e, "12")}><span>Aventura</span></li>
            <li onClick={(e) => handleNavegarFilmes(e, "16")}><span>Animação</span></li>
            <li onClick={(e) => handleNavegarFilmes(e, "35")}><span>Comedia</span></li>
            <li onClick={(e) => handleNavegarFilmes(e, "18")}><span>Drama</span></li>
            <li onClick={(e) => handleNavegarFilmes(e, "99")}><span>Documentario</span></li>
            <li onClick={(e) => handleNavegarFilmes(e, "27")}><span>Terror</span></li>
          </div>
          <li onClick={navegarMinhaLista}>Minha lista </li>
        </ul>
      </nav>
    </>
  )
}

export default MenuLateral
