import styles from './styles.module.scss'

export const PlayButton = () => {
  return (
    <button
      type="button" 
      className={styles.playButton} 
      onClick={() => console.log('clicked')}
    >
      <img src="/play-green.svg" alt="Escutar agora"/>
    </button>
  )
}
