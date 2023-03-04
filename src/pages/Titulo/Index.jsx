import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BtnTitulo from "../../components/BtnTitulo/Index";
import CardTitulo from "../../components/CardTitulo/Index";

const endPointFilmes = import.meta.env.VITE_API_M
const endPointSeries = import.meta.env.VITE_API_S
const apiKEY = import.meta.env.VITE_API_KEY

const Titulo = () => {
  const { tipo, id } = useParams()
  const [titulo, setTitulo] = useState(null)

  const getTitulo = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setTitulo(data)
  };

  let tituloURL
  tipo === 'filme'
    ? tituloURL = `${endPointFilmes}${id}?language=pt-BR&${apiKEY}`
    : tituloURL = `${endPointSeries}${id}?language=pt-BR&${apiKEY}`
  useEffect(() => {
    getTitulo(tituloURL)
  }, []);

  return (
    <>
      <div>{titulo && <CardTitulo titulo={titulo} />}</div>
      <BtnTitulo
        id={id}
        tipo={tipo}
      />
    </>
  )

}

export default Titulo;
