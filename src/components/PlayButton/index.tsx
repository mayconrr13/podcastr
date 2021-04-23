import { usePlayer } from '../../hooks/usePlayer'
import styles from './styles.module.scss'

interface Episode {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  }
}

interface EpisodesData {
  episodeList: Episode[],
  index: number;
}

interface PlayButtonProps {
  episodes: EpisodesData
}

export const PlayButton = ({ episodes }: PlayButtonProps) => {
  const { playList } = usePlayer()

  const { episodeList, index } = episodes
  
  return (
    <button
      type="button" 
      className={styles.playButton} 
      onClick={() => playList(episodeList, index)}
    >
      <img src="/play-green.svg" alt="Escutar agora"/>
    </button>
  )
}
