import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Podcast } from '../components/Podcast'
import { PodcastCard } from '../components/PodcastCard'
import { api } from '../services/api'
import styles from '../styles/pages/home.module.scss'

interface EpisodeProps {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  published_at: string;
  file: {
    url: string;
    type: string;
    duration: number;
  }
}

interface EpisodesListProps {
  episodes: EpisodeProps[];
}

export default function Home({ episodes }: EpisodesListProps) {
  
  return (
    <div className={styles.homeContainer}>
      <h1>Últimos lançamentos</h1>

      <div className={styles.cardsContainer}>
        <PodcastCard episode={episodes[0]}/>
        <PodcastCard episode={episodes[1]}/>
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
        {episodes && episodes.map(episode => {
          return <Podcast episode={episode} />
        })}
      </div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get('/episodes')
  const episodes = response.data
  
  return {
    props: {
      episodes
    }
  }
}
