import Head from 'next/head'
import Player from '@/components/Player'
import AudioList from '@/components/AudioList'
import StopWatch from '@/components/StopWatch/StopWatch'
import Blocks from '@/components/Blocks'
import { MdPlaylistPlay, MdDashboard } from 'react-icons/md'
import { useState } from 'react'
import Watch from '@/components/Watch/Watch'

import styles from './styles.module.css'

const PlayerApp = () => {
  const [page, setPage] = useState('AudioList')
  const [pdf, setPdf] = useState(null) // Estado para o PDF

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
        )
      })
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <>
      <Head>
        <title>Tribos Player</title>
        <meta name="description" content="Tribos Player" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.app}>
        <header className={styles.box}>
          <div className={styles.full} onClick={toggleFullscreen}>
            <img src="./logos/skeleton/transparente.svg" alt="Logo" />
            <Watch />
          </div>

          <div className={styles.sw}>
            <StopWatch />
          </div>
        </header>

        <main>
          {page === 'AudioList' && (
            <div className={styles.appPlayer}>
              <div className={styles.box}>
                <AudioList />
              </div>

              <div className={styles.box}>
                <Player />
              </div>
            </div>
          )}
          {page === 'Blocks' && <Blocks pdf={pdf} setPdf={setPdf} />}{' '}
          {/* Passando pdf e setPdf para Blocks */}
        </main>

        <footer>
          <nav>
            <span onClick={() => setPage('Blocks')}>
              <MdDashboard />
              BLOCOS
            </span>
            <span onClick={() => setPage('AudioList')}>
              <MdPlaylistPlay />
              PLAYER
            </span>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default PlayerApp
