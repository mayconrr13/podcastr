import { GetStaticProps } from 'next'
import { Episode } from '../components/Episode'
import { EpisodeCard } from '../components/EpisodeCard'
import { api } from '../services/api'
import styles from '../styles/pages/home.module.scss'
import { formatedEpisodeTime, formatedPublicationDate } from '../utils/formatEpisodeDetails'

interface EpisodeProps {
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

interface EpisodesListProps {
  lastestEpisodes: EpisodeProps[];
  allEpisodes: EpisodeProps[];
}

export default function Home({ lastestEpisodes, allEpisodes }: EpisodesListProps) {
  
  return (
    <div className={styles.homeContainer}>
      <h1>Últimos lançamentos</h1>

      <div className={styles.cardsContainer}>
        {lastestEpisodes.map(episode => {
          return (<EpisodeCard episode={episode} key={episode.id}/>)
        })}
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
        {allEpisodes && allEpisodes.map(episode => {
          return <Episode episode={episode} key={episode.id}/>
        })}
      </div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get('/episodes', { params: {
    _limit: 12,
    _sort: 'publised_at',
    _order: 'desc'
  }})

  const episodes = response.data.map(episode => {return {
    id: episode.id,
    title: episode.title,
    members: episode.members,
    thumbnail: episode.thumbnail,
    publishedAt: formatedPublicationDate(episode.published_at),
    file: {
      url: episode.file.url,
      type: episode.file.type,
      duration: formatedEpisodeTime(episode.file.duration),
  }}})

  const lastestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)
  
  return {
    props: {
      lastestEpisodes,
      allEpisodes
    }
  }
}
