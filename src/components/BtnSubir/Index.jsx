import React from "react";
import { useEffect, useState } from "react";

const BtnSubir = () => {

    const [ btnSubir, setBtnSubir ] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
         if(window.scrollY > 80) {
            setBtnSubir(true)
         }else 
           {setBtnSubir(false)}
        })

    }, [btnSubir])

    const subir = () => {
        window.scrollTo({
         top: 0,
         behavior: "smooth"  
        })
    }

    return(

      <>
       {btnSubir && (
        <button onClick={subir}>▲</button>
       )}
      </>  

    )

}

export default BtnSubir;