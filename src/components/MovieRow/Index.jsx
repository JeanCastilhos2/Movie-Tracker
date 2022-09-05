import React from "react";
import Style from'./MovieRow.module.css';
import {Link} from 'react-router-dom';
import { useState } from "react";

const imageURL = import.meta.env.VITE_IMG;

const MovieRow = ( { lista , titulo } ) => {

   const [ x , setX ] = useState(0);

   const goLeft = () => {

      let position = x + Math.round(window.innerWidth / 3);
      if(position > 0) {
         position = 0;
      }
      setX(position)
   }

   const goRigth = () => {

      let position = x + Math.round(window.innerWidth / -3);
      let w = lista.length * 200;
      if( (window.innerWidth - w) > position) {
         position = (window.innerWidth - w) - 60;
      }
      setX(position);
   }


    return(
         <div className={Style.mv_container}>
            <h2>{titulo}</h2>
            <button className={Style.btn_left} onClick={goLeft}>◄</button>
            <button className={Style.btn_rigth} onClick={goRigth}>►</button>
            <div className={Style.mv_lista_area}>
                <div className={Style.mv_lista} style={{ marginLeft: x, width: lista.length * 200 }}>                  
                        {lista.length === 0 && <p>Carregando</p> }
                        {lista.length > 0 && lista.map((filme, key) => (
                           <div className={Style.mv_filme}>
                              <Link to={`/filme/${filme.id}`}>
                                 <img src={imageURL + filme.poster_path} alt={filme.title} />
                              </Link>   
                           </div>
                        ))}                
                </div>
            </div>
         </div>
    )
}

export default MovieRow;