'use client'

import { useEffect, useState } from "react"
import { Posicion } from "./Posicion"
import { Titulo } from "./Titulo"
import { Foto } from "./Foto"
import Cancion from "./Cancion"

export default function Contenido() {

    const [data, setData] = useState([])
    const [hoverIndex, setHoverIndex] = useState(null)
    const [song, setSong] = useState([])


    useEffect(() => {
        fetch('http://localhost:20000/api/info')
            .then(info => info.json())
            .then(info => {setData(info);setSong(info.url_audio)})
    }, [])

    const handleMouseOver = (index) => {
        setHoverIndex(index)
    }
    const handleMouseLeave = () => {
        setHoverIndex(null)
    }  


    return (
        <div className="">
            {data.map((cancion, index) => (
                <div key={index} className="flex hover:bg-[#343333] m-1" onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave}>
                    {index === hoverIndex ? (<Posicion estado={true} position={cancion.position} />) : (<Posicion estado={false} position={cancion.position} />)}
                    <Foto url_image={cancion.url_image} />
                    <Titulo titulo={cancion.titulo} />
                    <Cancion url_audio={cancion.url_audio} />
                </div>
            ))}
        </div>
    )
}