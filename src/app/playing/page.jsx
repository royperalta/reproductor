'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { createContext, useCallback, useContext, useEffect, useState, useRef } from 'react'
import { IoReloadCircle } from "react-icons/io5"
import Play from './Play'

function Widget() {
    axios.defaults.baseURL = 'http://localhost:20000'
    const [songs, setSongs] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [position, setPosition] = useState(-1)
    const [isPlay, setIsPlay] = useState(0)
    const [prev, setPrev] = useState(0)
    const [componente, setComponente] = useState(false)

    const audioRef = useRef(null)



    useEffect(() => {

        axios.get('/api/info')
            .then(info => {
                setSongs(info.data.reverse())
                setIsLoading(true)
            })


        //audioRef.current.pause()
    }, [])

    const handleMouseOver = (index) => {
        setPosition(index)
        setPrev(index)
        setIsPlay(index)
    }
    const handleMouseLeave = (index) => {
        setPosition(null)
        setPrev(null)

    }

    const handleIndex = (index) => {

        // console.log("la posicion es " + index)
    }

    const handleReproducir = () => {
        
        setComponente(true)
        
    }

    if (componente) {
        audioRef.current.play()
    }

console.log(audioRef)


    function Canciones() {


        return (
            <div >
                <div className='w-96'>
                    <div className='text-center py-2 text-lg font-bold'>Top 10 Perú</div>
                    <div >
                        {songs?.map((song, index) => (
                            <div className='flex justify-around items-center border-b hover:bg-red-700 cursor-pointer'
                                key={index}
                                onMouseLeave={() => handleMouseLeave(index)}
                                onMouseEnter={() => handleMouseOver(index)}
                                onClick={index === position ? () => handleReproducir(index) : () => handleReproducir(0)}
                            >
                                <div className='flex w-6 justify-center items-center text-3xl'>
                                    {index === position ? <Play /> : song.position}
                                    {index === position ? handleIndex(index) : ''}
                                </div>
                                <div className='flex'>
                                    <Image
                                        src={song.url_image}
                                        width={130}
                                        height={130}
                                        style={{ objectFit: "contain" }}
                                        alt={song.titulo}
                                    />
                                </div>
                                <div className='w-1/2 text-xs font-bold p-1'>{song.titulo}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    const Spinner = () => {
        return (
            <div className='flex justify-center items-center w-96 h-96'>
                <div>
                    <IoReloadCircle className='animate-spin h-5 w-5 mr-3 text-5xl' />
                </div>
                <div>Cargando...</div>
            </div>
        )
    }


    return (
        <div>
            <div >
                {songs && songs.length > 0 && (
                    componente ? (<div><audio ref={audioRef} src={songs[isPlay].url_audio}></audio></div>) : ''
                )}
            </div>
            <div>
                {isLoading ? <Canciones /> : <Spinner />}
            </div>

        </div>



    )
}

export default Widget