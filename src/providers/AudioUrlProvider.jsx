import { createContext, useContext, useState } from 'react'

export const AudioUrlContext = createContext({})

export const AudioUrlProvider = (props) => {
  const [audioUrl, setAudioUrl] = useState(null)

  return (
    <AudioUrlContext.Provider
      value={{
        audioUrl,
        setAudioUrl,
      }}
    >
      {props.children}
    </AudioUrlContext.Provider>
  )
}

export const useAudioUrl = () => useContext(AudioUrlContext)
