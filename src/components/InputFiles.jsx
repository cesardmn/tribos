import React from 'react'

// providers
import { useAudio } from '@providers/AudioProvider'
import { usePlaylist } from '@providers/PlaylistProvider'

import { MdAudioFile } from 'react-icons/md'

export default function InputFiles() {
  const { setAudio } = useAudio()
  const { setPlaylist } = usePlaylist()

  const handleChange = (e) => {
    const inputTarget = e.target
    const inputFiles = [...inputTarget.files]

    const fileObjects = (() =>
      inputFiles.map((file) => {
        return {
          name: file.name
            .replace(/\.[^\/.]+$/, '')
            .trim()
            .toUpperCase(),
          src: URL.createObjectURL(file),
        }
      }))()

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
