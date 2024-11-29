import { useEffect, useState } from 'react'
import { usePlaylist } from '@providers/PlaylistProvider'
import styles from './styles.module.css'
import { useAudio } from '@providers/AudioProvider'
import InputFiles from '@/components/InputFiles'

export default function AudioList() {
  const { playlist } = usePlaylist()
  const { setAudio, audio } = useAudio()

  const [hasList, setHasList] = useState(false)

  const handleSelect = (music) => {
    setAudio(music)
  }

  useEffect(() => {
    if (playlist.length > 0) {
      setHasList(true)
    }
  }, [playlist])

  return (
    <>
      {hasList ? (
        <ul className={`${styles.ul} ${styles.noScrollBar}`}>
          {playlist
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((music, index) => {
              const isSelected = music === audio
              return (
                <li
                  key={`${music.name}-${index}`}
                  className={`${styles.li} ${isSelected ? styles.selected : ''}`}
                  onClick={() => handleSelect(music)}
                >
                  <span>{music.name}</span>
                  <span className={styles.duration}>{music.duration}</span>
                </li>
              )
            })}
        </ul>
      ) : (
        <span className={styles.inputFile}>
          <InputFiles />
        </span>
      )}
    </>
  )
}
