'use client'

import { useEffect, useRef, useState } from "react"
import { Posicion } from "../components/Posicion"
import { Foto } from "../components/Foto"
import { Titulo } from "../components/Titulo"
import Cancion from "../components/Cancion"


export default function Contenido() {

    const [data, setData] = useState([])
    const [hoverIndex, setHoverIndex] = useState(null)
    const [currentSong, setCurrentSong] = useState(null)
    const [song, setSong] = useState("")

    const audioRef = useRef(null)

    useEffect(() => {
        fetch('http://localhost:20000/api/info')
            .then(info => info.json())
            .then(info => { setData(info) })
    }, [])

    // console.log(audioRef)

    /*   const playPause = () => {
  
          if (audioRef.current.paused) {
              audioRef.current.play()
          } else {
              audioRef.current.pause()
          }
      }
   */

    const playNextSong = () => {
        setCurrentSong((prev) => (prev + 1) % data.length)

    }

    const handleMouseOver = (index) => {
        console.log(index)
        setSong(data[index].url_audio)
        audioRef.current.load();
    }

    const handleMouseLeave = () =>{
        setSong(null)
        audioRef.current.load();
    }


    return (
        <div className="">
            {data.map((cancion, index) => (
                <div key={index} onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave} className="flex hover:bg-[#343333] m-1"   >
                    {index === hoverIndex ? (<Posicion estado={true} position={cancion.position} />) : (<Posicion estado={false} position={cancion.position} />)}
                    <Foto url_image={cancion.url_image} />
                    <Titulo titulo={cancion.titulo} />

                </div>
            ))}

            <p>Reproduciendo: {song}</p>
            <audio controls ref={audioRef}>
                <source src={song} type="audio/mp3" />
                Tu navegador no admite el elemento de audio.
            </audio>
        </div>
    )
}