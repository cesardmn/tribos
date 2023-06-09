import { createContext, useContext, useState } from 'react'

export const PlaylistContext = createContext({})

export const PlaylistProvider = (props) => {
  const [playlist, setPlaylist] = useState([])

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        setPlaylist,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  )
}

export const usePlaylist = () => useContext(PlaylistContext)
