'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoReloadCircle } from "react-icons/io5"

function Widget() {
    axios.defaults.baseURL = 'http://localhost:20000'
    const [songs, setSongs] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        axios.get('/api/info')
            .then(info => {
                setSongs(info.data.reverse())
                setIsLoading(true)

            })
    }, [])

    const canciones = (
        <div>
            <div className='w-96'>
                <div className='text-center py-2 text-lg font-bold'>Top 10 Perú</div>
                <div >
                    {songs?.map((song, index) => (
                        <Link href={`https://www.youtube.com/watch?v=${song.id_video}`}>
                            <div className='flex justify-around items-center border-b hover:bg-gray-700 cursor-pointer'
                                key={index}                        >
                                <div className='flex w-4.5 items-center text-3xl'>{song.position}</div>
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
                        </Link>

                    ))}
                </div>
            </div>
        </div>

    )

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
            {isLoading ? canciones : <Spinner />}
        </div>

    )
}

export default Widget