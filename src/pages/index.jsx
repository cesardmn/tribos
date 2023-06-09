// react

//next
import Head from 'next/head'

//components
import Player from '@/components/Player'
import InputFiles from '@/components/InputFiles'
import AudioList from '@/components/AudioList'
import StopWatch from '@/components/StopWatch'
import Blocks from '@/components/Blocks'

// styles
import { MdPlaylistPlay, MdDashboard } from 'react-icons/md'
import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('AudioList')

  return (
    <>
      <Head>
        <title>Tribos</title>
        <meta name="description" content="Tribos Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.ico" />
      </Head>
      <main className="noSelect">
        <div className="top box">
          <span className="logo">
            <img src="./logo.ico" alt="" />
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
          <span onClick={() => {setPage('Blocks')}} >
            <MdDashboard />
          </span>
          <span onClick={() =>{setPage('AudioList')}} >
            <MdPlaylistPlay />
          </span>
        </nav>
      </main>
    </>
  )
}
