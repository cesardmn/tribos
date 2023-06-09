import styles from '@styles/Wave.module.css'
import { useOnPlay } from '@/providers/OnPlayProvider'

export default function Wave() {
  const { onPlay } = useOnPlay()

  return (
    <div className={styles.loadingWave}>
      <div
        className={`${styles.loadingBar} ${onPlay && styles.animation}`}
      ></div>
      <div
        className={`${styles.loadingBar} ${onPlay && styles.animation}`}
      ></div>
      <div
        className={`${styles.loadingBar} ${onPlay && styles.animation}`}
      ></div>
      <div
        className={`${styles.loadingBar} ${onPlay && styles.animation}`}
      ></div>
    </div>
  )
}
