import Head from 'next/head'
import { Podcast } from '../components/Podcast'
import { PodcastCard } from '../components/PodcastCard'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Últimos lançamentos</h1>

      <div className={styles.cardsContainer}>
        <PodcastCard />
        <PodcastCard />
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
        <Podcast />
        <Podcast />
        <Podcast />
        <Podcast />
        <Podcast />
        <Podcast />
        <Podcast />
      </div>

    </div>
  )
}
