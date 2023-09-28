'use client'

import { useState } from "react"

export default  function Contenido(){

   const [value,setValue] = useState("hola")
  
   const cambiarTexto = () =>{
    setValue("Estas encima de del div")
   }
   
   const regresarAlInicio = () => {
    setValue("hola")
   }

    return(
        <div>
            <div>{value}</div>
            <div className="bg-red-100 text-black" onMouseOver={cambiarTexto} onMouseLeave={regresarAlInicio}>
                Contenido
            </div>
        </div>
    )
}