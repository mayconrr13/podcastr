import { usePlayer } from '../../hooks/usePlayer'
import styles from './styles.module.scss'

interface PlayButtonProps {
  episode: {
    id: string;
    title: string;
    members: string;
    thumbnail: string;
    publishedAt: string;
    file: {
      url: string;
      type: string;
      duration: string;
    }
  }
}

export const PlayButton = ({ episode }: PlayButtonProps) => {
  const { play } = usePlayer()
  
  return (
    <button
      type="button" 
      className={styles.playButton} 
      onClick={() => play(episode)}
    >
      <img src="/play-green.svg" alt="Escutar agora"/>
    </button>
  )
}
