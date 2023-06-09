import { createContext, useContext, useState } from 'react'

export const OnPlayContext = createContext({})

export const OnPlayProvider = (props) => {
  const [onPlay, setOnPlay] = useState(false)

  return (
    <OnPlayContext.Provider
      value={{
        onPlay,
        setOnPlay,
      }}
    >
      {props.children}
    </OnPlayContext.Provider>
  )
}

export const useOnPlay = () => useContext(OnPlayContext)
