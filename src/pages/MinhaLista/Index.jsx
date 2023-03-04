import { useState, useEffect } from "react"
import CardTitulos from "../../components/CardTitulos/Index"
import BtnSubir from "../../components/BtnSubir/Index"
import Styles from "../GridFilmes.module.css"

const MinhaLista = () => {
  const [minhaLista, setMinhaLista] = useState([])

  const getTitulosSalvos = () => {
    const titulosSalvos = localStorage.getItem('titulos')
    if (titulosSalvos) {
      return JSON.parse(titulosSalvos)
    } else {
      return []
    }
  }

  useEffect(() => {
    setMinhaLista(getTitulosSalvos())
  }, [])

  return (
    <>
      <div className={Styles.filmes_container}>
        {minhaLista.length === 0 && <p>Sua lista está vazia</p>}
        {minhaLista.length > 0 &&
          minhaLista.map((titulo) => (
            <CardTitulos key={titulo.id} titulo={titulo.nome} />
          ))}
      </div>
      <BtnSubir />
    </>
  )
}

export default MinhaLista
