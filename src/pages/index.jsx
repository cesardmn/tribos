import Player from '@/components/Player'
import Head from 'next/head'

//components
import InputFiles from '@/components/InputFiles'

// styles
import { MdPlaylistPlay, MdDashboard } from 'react-icons/md'
import AudioList from '@/components/AudioList'

export default function App() {
  return (
    <>
      <Head>
        <title>Tribos</title>
        <meta name="description" content="Tribos Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.jpg" />
      </Head>
      <main className="noSelect">
        <div className="top">
          <span>tribos</span>
          <span>stopwatch</span>
        </div>

        <div className="content">
          <AudioList />
        </div>

        <Player />

        <nav>
          <span>
            <InputFiles />
          </span>
          <span>
            <MdDashboard />
          </span>
          <span>
            <MdPlaylistPlay />
          </span>
        </nav>
      </main>
    </>
  )
}
