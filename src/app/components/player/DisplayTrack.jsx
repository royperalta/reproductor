import Image from "next/image";
import { BsMusicNoteBeamed } from 'react-icons/bs'
export default function DisplayTrack({ currentTrack, audioRef, setDuration, progressBarRef }) {

const onLoadedMetadata = () =>{  
 
  setDuration(audioRef.current.duration)
  progressBarRef.current.max=audioRef.current.duration
  /* const seconds  = audioRef.current.duration;
  setDuration(seconds)
  progressBarRef.current.max = seconds */
}

  return (
    <div>
      <audio
        src={currentTrack.url_audio}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <div>
        <div>
          {currentTrack.url_image ? (
            <Image alt={currentTrack.titulo} src={currentTrack.url_image} width={500} height={300} />
          ) : (
            <div>
              <span>
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="">
          <p>{currentTrack.titulo}</p>
        </div>
      </div>
    </div>
  )
}
