import { useEffect, useRef, useState } from 'react'
import { useOnPlay } from '@/providers/OnPlayProvider'
import { useAudio } from '@/providers/AudioProvider'
import { formatTime } from '../../utils/index'
import styles from './styles.module.css'
import { TbPlayerPlayFilled, TbPlayerStopFilled } from 'react-icons/tb'
import Wave from '@/components/Wave/Wave'

export default function Player() {
  const { onPlay, setOnPlay } = useOnPlay()
  const { audio } = useAudio()

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef()

  const handlePlayStop = () => {
    if (audioRef.current.src) {
      setOnPlay(!onPlay)
      if (onPlay) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      } else {
        audioRef.current.play()
      }
    }
  }

  const handleKeyDown = (event) => {
    // Se a tecla pressionada for a tecla "ArrowRight" (código 39), chama a função handlePlayStop
    if (event.keyCode === 39) {
      handlePlayStop()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handlePlayStop])

  useEffect(() => {
    const currentAudio = audioRef.current
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setOnPlay(false)

    const handleLoadedMetadata = () => {
      setDuration(currentAudio.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(currentAudio.currentTime)
      if (currentAudio.currentTime === currentAudio.duration) {
        setOnPlay(false)
      }
    }

    currentAudio.addEventListener('loadedmetadata', handleLoadedMetadata)
    currentAudio.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      currentAudio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      currentAudio.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [audio])

  const progressWidth = (currentTime / duration) * 100 + '%'

  return (
    <div
      className={`${styles.player} ${onPlay && styles.selected}`}
      onClick={handlePlayStop}
    >
      <div className={styles.titleWrapper}>
        <h3>{audio?.name}</h3>
        <Wave />
      </div>
      <div className={styles.seekBar}>
        <div className={styles.progress} style={{ width: progressWidth }}></div>
      </div>
      <div className={styles.time}>
        <span className="currentTime">{formatTime(currentTime)}</span>
        <div className="playStop">
          {onPlay ? (
            <span>
              <TbPlayerStopFilled />
            </span>
          ) : (
            <span>
              <TbPlayerPlayFilled />
            </span>
          )}
        </div>
        <span className="duration">{formatTime(duration)}</span>
      </div>
      <audio src={audio?.src} ref={audioRef}></audio>
    </div>
  )
}
