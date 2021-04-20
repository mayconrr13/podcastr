import Head from 'next/head'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Últimos lançamentos</h1>

      <div>
        <div className={styles.podcastCard}>
          <img src="" alt=""/>

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
      </div>

      <h1>Todos os episódios</h1>

      <div className={styles.podcastsInfoHeader}>
        <p>PODCAST</p>
        <p>INTEGRANTES</p>
        <p>DATA</p>
        <p>DURAÇÃO</p>
        <span />
      </div>
      
      <div className={styles.podcastsList}>
        <div className={styles.podcasts}>
          <div>
            <img src="" alt=""/>
            <h2>Title</h2>
          </div>
          <p>Integrantes do podcast</p>
          <p>8 Jan 2021</p>
          <p>1:35:28</p>
          <button type="button">
            <img src="/play-green.svg" alt="Escutar agora"/>
          </button>
        </div>
      </div>

    </div>
  )
}
