import { createContext, ReactNode, useContext, useState } from 'react'

interface ProviderProps {
  children: ReactNode;
}

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  file: {
    url: string;
    duration: string;
  }
}
interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  play: (episode: Episode) => void;
}

const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData)

export function PlayerProvider({ children }: ProviderProps): JSX.Element {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  function play(episode: Episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      play,
    }} >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)

  return context
}