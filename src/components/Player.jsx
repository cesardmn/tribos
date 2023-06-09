import { useEffect, useRef, useState } from 'react'
import { useOnPlay } from '@/providers/OnPlayProvider'
import { useAudioUrl } from '@/providers/AudioUrlProvider'
import { formatTime } from '../utils/index'
import styles from '@styles/Player.module.css'
import { TbPlayerPlayFilled, TbPlayerStopFilled } from 'react-icons/tb'

import Wave from './Wave'

export default function Player() {
  const { onPlay, setOnPlay } = useOnPlay()
  const { audioUrl } = useAudioUrl()

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [audioName, setAudioName] = useState('')
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
    const audio = audioRef.current
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setOnPlay(false)

    setAudioName(audioUrl?.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, ''))

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [audioUrl])

  const progressWidth = (currentTime / duration) * 100 + '%' // Calcula o percentual de progresso

  return (
    <div className={styles.player} onClick={handlePlayStop}>
      <div className={styles.titleWrapper}>
        <h3>{audioName}</h3>
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

      <audio src={audioUrl} ref={audioRef}></audio>
    </div>
  )
}
