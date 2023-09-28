'use client'
import { useEffect, useRef, useState } from "react";
import Controls from "../components/player/Controls";
import ProgressBar from "../components/player/ProgressBar";
import {tracks as datos} from "../components/player/tracks";
import DisplayTrack from "../components/player/DisplayTrack";

export default function AudioPlayer() {

const [tracks, setTracks] = useState([])
const [trackIndex, setTrackIndex] = useState(0);
const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex])
const [timeProgress,setTimeProgress] = useState(0)
const [duration,setDuration] = useState(0);


const audioRef = useRef();
const progressBarRef = useRef();


useEffect(()=>{    
    datos()
    .then(data=>{setTracks(data)})
    .catch((error)=>console.error(error.messsage))
},[])

return (
    <div className="flex justify-center">
      <div>
        {tracks.length > 0 && (
          <>
            {/* Pass the first track to DisplayTrack */}
            <DisplayTrack audioRef={audioRef} currentTrack={tracks[trackIndex]} setDuration={setDuration} progressBarRef={progressBarRef} />
            <Controls {...{tracks,trackIndex,setCurrentTrack,setTrackIndex}} audioRef={audioRef} progressBarRef={progressBarRef} duration={duration} setTimeProgress={setTimeProgress}/>
            <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration}/>
          </>
        )}
      </div>
     
    </div>
  );
}
