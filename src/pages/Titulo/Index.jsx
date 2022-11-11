import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardFilme } from "../../components/CardFilme/Index";

const moviesURL = import.meta.env.VITE_API_M;
const apiKEY = import.meta.env.VITE_API_KEY;

const Titulo = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  const getFilme = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setFilme(data);
  };

  useEffect(() => {
    const filmeURL = `${moviesURL}${id}?language=pt-BR&${apiKEY}`;
    getFilme(filmeURL);
  }, []);

  return <div>{filme && <CardFilme filme={filme} />}</div>;
};

export default Titulo;
