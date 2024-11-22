import Head from 'next/head'
import Player from '@/components/Player'
import AudioList from '@/components/AudioList'
import StopWatch from '@/components/StopWatch'
import Blocks from '@/components/Blocks'
import { MdPlaylistPlay, MdDashboard } from 'react-icons/md'
import { useState } from 'react'
import Watch from '@/components/Watch'

const PlayerApp = () => {
  const [page, setPage] = useState('AudioList')

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
        <title>Tribos</title>
        <meta name="description" content="Tribos Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="app">
        <div className="top box">
          <div className="cotainer-top">
            <div className="left" onClick={toggleFullscreen}>
              <img src="./logos/skeleton/transparente.svg" alt="Logo" />
              <Watch />
            </div>

            <StopWatch />
          </div>
        </div>

        <div className="content box">
          {page === 'AudioList' && <AudioList />}
          {page === 'Blocks' && <Blocks />}
        </div>

        <div className="box">
          <Player />
        </div>

        <nav>
          <span onClick={() => setPage('Blocks')}>
            <MdDashboard />
            BLOCOS
          </span>
          <span onClick={() => setPage('AudioList')}>
            <MdPlaylistPlay />
            PLAYLIST
          </span>
        </nav>
      </div>
    </>
  )
}

export default PlayerApp
