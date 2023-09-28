import './cutomize-progress-bar.css'

export default function ProgressBar({ progressBarRef,audioRef,timeProgress,duration }) {

    const handleProgressChange = () => {       
      audioRef.current.currentTime = progressBarRef.current.value
    }

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };

    return (
        <div className='flex my-5 justify-center'>
           
            <span className="mx-2">{formatTime(timeProgress)}</span>
            <input
                type="range"
                ref={progressBarRef}
                defaultValue={0}
                onChange={handleProgressChange}
            />
            <span className="mx-2">{formatTime(duration)}</span>
        </div>
    )
}
