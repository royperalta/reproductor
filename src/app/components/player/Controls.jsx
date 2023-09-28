import { useCallback, useEffect, useRef, useState } from 'react'
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp
} from 'react-icons/io5'



export default function Controls({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks, trackIndex, setCurrentTrack, setTrackIndex
}) {

  const [isPlaying, setIsPlaying] = useState(false)

  const playAnimationRef = useRef()

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    )
    console.log('run')
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [audioRef, duration, progressBarRef, setTimeProgress])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      playAnimationRef.current = requestAnimationFrame(repeat)
    } else {
      audioRef.current.pause()
      cancelAnimationFrame(playAnimationRef.current)
    }


  }, [isPlaying, audioRef, repeat])


  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  }


  const handlePrevious = () => {

    if (trackIndex === 0) {
      console.log(tracks)
      let lastTrackIndex = tracks.lenght - 1;
      console.log(lastTrackIndex)
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex])
    } else {
      setTrackIndex((prev) => prev - 1)
      setCurrentTrack(tracks[trackIndex - 1])
    }
  }

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  }
  const skipForward = () => {
    audioRef.current.currentTime += 15;
  }

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0)
      setCurrentTrack(tracks[0])
    } else {
      setTrackIndex((prevState) => prevState + 1)
      setCurrentTrack(tracks[trackIndex + 1])
    }

  }

  return (
    <div>
      <div className='flex gap-4 my-5 justify-center'>
        <button className='text-5xl' onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button className='text-5xl' onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>
        <button className='text-5xl' onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button className='text-5xl' onClick={skipForward}>
          <IoPlayForwardSharp />
        </button>
        <button className='text-5xl' onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>


      </div>
      <div>
        <button>
          icons
        </button>
        <input type='range' min={0} max={100} position />
      </div>
    </div>
  )
}
