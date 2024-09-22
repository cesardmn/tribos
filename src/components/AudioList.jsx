import { usePlaylist } from '@providers/PlaylistProvider'
import styles from '@styles/AudioList.module.css'
import { useAudio } from '@providers/AudioProvider'

export default function AudioList() {
  const { playlist } = usePlaylist()
  const { setAudio, audio } = useAudio()

  const handleSelect = (music) => {
    setAudio(music)
  }


  return (
    <ul className={`${styles.ul} ${styles.noScrollBar}`}>
      {
        playlist
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((music, index) => {
            const isSelected = music === audio;
            return (
              <li
                key={`${music.name}-${index}`}
                className={`${styles.li} ${isSelected ? styles.selected : ''}`}
                onClick={() => handleSelect(music)}
              >
                <span>{music.name}</span>
                <span className={styles.duration}>{music.duration}</span>
              </li>
            );
          })
      }
    </ul>
  )
}
