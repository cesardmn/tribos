// providers
import { AudioProvider } from '@/providers/AudioProvider'
import { PlaylistProvider } from '@/providers/PlaylistProvider'
import { OnPlayProvider } from '@/providers/OnPlayProvider'

// styles
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AudioProvider>
      <PlaylistProvider>
        <OnPlayProvider>
          <Component {...pageProps} />
        </OnPlayProvider>
      </PlaylistProvider>
    </AudioProvider>
  )
}
