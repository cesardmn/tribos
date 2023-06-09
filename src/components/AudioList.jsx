import { usePlaylist } from '@providers/PlaylistProvider'
import styles from '@styles/AudioList.module.css'
import { useAudio } from '@providers/AudioProvider'

export default function AudioList() {
  const { playlist } = usePlaylist()
  const { setAudio, audio } = useAudio()

  const habdleSelect = (music) => {
    setAudio(music)
    console.log(music)
  }

  return (
    <ul className={`${styles.ul} ${styles.noSrcollBar}`}>
      {playlist.map((music) => {
        const isSelected = music === audio
        return (
          <li
            key={music.name}
            className={`${styles.li} ${isSelected ? styles.selected : ''}`}
            onClick={() => {
              habdleSelect(music)
            }}
          >
            <span>{music.name}</span>
            <span className={styles.duration}>{music.duration}</span>
          </li>
        )
      })}
    </ul>
  )
}
