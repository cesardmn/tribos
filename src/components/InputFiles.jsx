import React from 'react'

// providers
import { useAudio } from '@providers/AudioProvider'
import { usePlaylist } from '@providers/PlaylistProvider'

import { formatTime } from '../utils/index'

import { MdAudioFile } from 'react-icons/md'

export default function InputFiles() {
  const { setAudio } = useAudio()
  const { setPlaylist } = usePlaylist()

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

  return (
    <>
      <label htmlFor="inputFiles">
        <MdAudioFile />
      </label>
      <input
        id="inputFiles"
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
