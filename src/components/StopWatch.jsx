import React, { useState } from 'react'
import { formatWatch } from '../utils/index'

import styles from '@styles/StopWatch.module.css'

export default function StopWatch() {
  const [time, setTime] = useState(0)
  const [timer, setTimer] = useState(null)
  const [running, setRunning] = useState(false)
  const [viewClass, setViewClass] = useState('pause')

  const play = () => {
    setViewClass('run')
    setRunning(true)
    setTimer(
      setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    )
  }

  const pause = () => {
    setViewClass('pause')
    setRunning(false)
    clearInterval(timer)
    setTimer(null)
  }

  const handleRunning = () => {
    running ? pause() : play()
    window.navigator.vibrate(70)
  }

  const handleReset = () => {
    setViewClass('pause')
    pause()
    setTime(0)
  }

  return (
    <div
      onClick={handleRunning}
      onDoubleClick={handleReset}
      className={`
      ${styles.StopWatch} 
      ${viewClass === 'run' ? styles.run : styles.pause}
      `}
    >
      {formatWatch(time)}
    </div>
  )
}
