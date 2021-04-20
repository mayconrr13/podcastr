import styles from './styles.module.scss'

export const PodcastCard = () => {
  return (
    <div className={styles.podcastCard}>
      <img src="/teste.png" alt="Podcast Foto"/>

      <div className={styles.details}>
        <h2>O que é um bom código?</h2>
        <p> Diego e Richard</p>
        <div>
          <span>8 Jan 2021</span>
          <span />
          <span>1:35:28</span>
        </div>
      </div>

      <button type="button">
        <img src="/play-green.svg" alt="Escutar agora"/>
      </button>
    </div>
  )
}
