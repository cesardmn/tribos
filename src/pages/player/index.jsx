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
        <link rel="icon" href="./icon-192x192.png" sizes="192x192" />
        <link rel="icon" href="./icon-256x256.png" sizes="256x256" />
        <link rel="icon" href="./icon-384x384.png" sizes="384x384" />
        <link rel="icon" href="./icon-512x512.png" sizes="512x512" />
      </Head>
      <main className="noSelect">
        <div className="top box">
          <div className="cotainer-top">
            <div className="left" onClick={toggleFullscreen}>
              <img src="./icon-192x192.png" alt="Logo" />
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
      </main>
    </>
  )
}

export default PlayerApp
