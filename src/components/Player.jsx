import { useEffect, useRef, useState } from 'react'
import { useOnPlay } from '@/providers/OnPlayProvider'
import { useAudio } from '@/providers/AudioProvider'
import { formatTime } from '../utils/index'
import styles from '@styles/Player.module.css'
import { TbPlayerPlayFilled, TbPlayerStopFilled } from 'react-icons/tb'

import Wave from '@components/Wave'

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
    }

    currentAudio.addEventListener('loadedmetadata', handleLoadedMetadata)
    currentAudio.addEventListener('timeupdate', handleTimeUpdate)

    // console.log(audio)

    return () => {
      currentAudio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      currentAudio.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [audio])

  const progressWidth = (currentTime / duration) * 100 + '%' // Calcula o percentual de progresso

  return (
    <div
      className={`${styles.player} ${onPlay && styles.selected}`}
      onClick={handlePlayStop}
    >
      <div className={styles.titleWrapper}>
        <h3>{audio?.name}</h3>
        <Wave />
      </div>
      {/* seek */}
      <div className={styles.seekBar}>
        <div className={styles.progress} style={{ width: progressWidth }}></div>
      </div>

      {/* time */}
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
