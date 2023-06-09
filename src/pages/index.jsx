import Player from '@/components/Player'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

import { useAudioUrl } from '@/providers/AudioUrlProvider'

export default function App() {
  const urls = [
    './bases/01 - JUST DO WAY YOU ARE.wav',
    './bases/02 - CAN_T STOP THE FEELING.wav',
    './bases/03 - SKY FULL OF STARS.wav',
    './bases/04 - SONÍFERA.wav',
    './bases/05 - PROPAGANDA.wav',
    './bases/06 - DEIXE-MEIR.wav',
  ]

  const { setAudioUrl } = useAudioUrl()
  // const [duration, setDuration] = useState(null);
  // const audioRef = useRef();

  const handleUrl = () => {
    let number = Math.floor(Math.random() * urls.length)
    setAudioUrl(urls[number])
  }

  return (
    <>
      <Head>
        <title>Tribos</title>
        <meta name="description" content="Tribos Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.jpg" />
      </Head>
      <main>
        <div className="tools">
          <div className="top">top</div>
          <div className="content">

          <button onClick={handleUrl}>change</button>

            <Player />
          </div>
          <nav className="bottom">bottom </nav>
        </div>
      </main>
    </>
  )
}
