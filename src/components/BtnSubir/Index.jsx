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
        <button style={{
            position: "fixed",
            bottom: "50px",
            right: "150px",
            height: "75px", 
            width: "75px",
            fontSize: "50px",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            border: "none",
        }} onClick={subir}>▲</button>
       )}
      </>  

    )

}

export default BtnSubir;