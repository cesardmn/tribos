import React, { useEffect, useRef } from 'react'

// providers
import { useAudio } from '@providers/AudioProvider'
import { usePlaylist } from '@providers/PlaylistProvider'

import { formatTime } from '../utils/index'

import { MdAudioFile } from 'react-icons/md'

import styles from '@styles/InputFiles.module.css'

export default function InputFiles() {
  const { setAudio, audio } = useAudio()
  const { playlist, setPlaylist } = usePlaylist()

  const inputRef = useRef(null)

  const handleChange = async (e) => {
    const inputTarget = e.target
    const inputFiles = [...inputTarget.files]

    const fileObjects = await Promise.all(
      inputFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const audio = document.createElement('audio')
          audio.addEventListener('loadedmetadata', () => {
            resolve({
              name: file.name
                .replace(/\.[^/.]+$/, '')
                .trim()
                .toUpperCase(),
              src: URL.createObjectURL(file),
              duration: formatTime(audio.duration),
            })
          })
          audio.addEventListener('error', reject)
          audio.src = URL.createObjectURL(file)
        })
      })
    )

    setPlaylist(fileObjects)
    setAudio(fileObjects[0])
  }

  const handleArrowLeft = () => {
    const currentIndex = playlist.findIndex((item) => item === audio)
    const nextIndex = (currentIndex + 1) % playlist.length

    setAudio(playlist[nextIndex])

    // Ajusta o scroll para manter o item selecionado visível
    if (inputRef.current && inputRef.current.children[nextIndex]) {
      inputRef.current.children[nextIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handleArrowLeft()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleArrowLeft])

  return (
    <>
      <label htmlFor="inputFiles" className={styles.inputFiles}>
        <MdAudioFile />
        import files
      </label>
      <input
        id="inputFiles"
        ref={inputRef}
        accept="audio/*"
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={(e) => {
          handleChange(e)
        }}
      />
    </>
  )
}
