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
  isPlaying: boolean;
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
}

const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData)

export function PlayerProvider({ children }: ProviderProps): JSX.Element {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode: Episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      isPlaying,
      play,
      togglePlay,
      setPlayingState
    }} >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)

  return context
}