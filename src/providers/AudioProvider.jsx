import { createContext, useContext, useState } from 'react'

export const AudioContext = createContext({})

export const AudioProvider = (props) => {
  const [audio, setAudio] = useState(null)

  return (
    <AudioContext.Provider
      value={{
        audio,
        setAudio,
      }}
    >
      {props.children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => useContext(AudioContext)
