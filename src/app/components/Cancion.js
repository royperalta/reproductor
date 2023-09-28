

export default function Cancion({ audioRef, url_audio }) {





    return (
        <div>
            <div className="">
                <audio controls ref={audioRef} >
                    <source src={url_audio} type="audio/mp4" />
                </audio>
            </div>
        </div>
    )
}