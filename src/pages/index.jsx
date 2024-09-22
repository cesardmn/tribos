import Head from 'next/head'
import Player from '@/components/Player'
import InputFiles from '@/components/InputFiles'
import AudioList from '@/components/AudioList'
import StopWatch from '@/components/StopWatch'
import Blocks from '@/components/Blocks'
import { MdPlaylistPlay, MdDashboard } from 'react-icons/md'
import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('AudioList')

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`)
      });
    } else {
      document.exitFullscreen();
    }
  };

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
          <span className="logo" onClick={toggleFullscreen} style={{ cursor: 'pointer' }}>
            <img src="./icon-192x192.png" alt="Logo" />
          </span>
          <span>
            <StopWatch />
          </span>
        </div>

        <div className="content box">
          {page === 'AudioList' && <AudioList />}
          {page === 'Blocks' && <Blocks />}
        </div>

        <div className="box">
          <Player />
        </div>

        <nav>
          <span>
            <InputFiles />
          </span>
          <span onClick={() => setPage('Blocks')}>
            <MdDashboard />
          </span>
          <span onClick={() => setPage('AudioList')}>
            <MdPlaylistPlay />
          </span>
        </nav>
      </main>
    </>
  )
}
