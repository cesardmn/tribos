// providers
import { AudioUrlProvider } from '@/providers/AudioUrlProvider'
import { OnPlayProvider } from '@/providers/OnPlayProvider'

// styles
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <OnPlayProvider>
      <AudioUrlProvider>
        <Component {...pageProps} />
      </AudioUrlProvider>
    </OnPlayProvider>
  )
}
