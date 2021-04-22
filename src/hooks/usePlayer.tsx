import { createContext, ReactNode, useContext } from 'react'

interface ProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext('')

export function PlayerProvider({ children }: ProviderProps): JSX.Element {
  return (
    <PlayerContext.Provider value={'Maycon'} >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)

  return context
}