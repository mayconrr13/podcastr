import { GetStaticProps } from 'next'
import { Episode } from '../components/Episode'
import { EpisodeCard } from '../components/EpisodeCard'
import { usePlayer } from '../hooks/usePlayer'
import { api } from '../services/api'
import styles from '../styles/pages/home.module.scss'
import { formatedEpisodeTime, formatedPublicationDate } from '../utils/formatEpisodeDetails'

interface EpisodeProps {
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

interface EpisodesListProps {
  lastestEpisodes: EpisodeProps[];
  allEpisodes: EpisodeProps[];
}

export default function Home({ lastestEpisodes, allEpisodes }: EpisodesListProps) {
  const { playList } = usePlayer()

  const episodeList = [...lastestEpisodes, ...allEpisodes]
  
  return (
    <div className={styles.homeContainer}>
      <h1>Últimos lançamentos</h1>

      <div className={styles.cardsContainer}>
        {lastestEpisodes.map((episode, index) => {
          return (<EpisodeCard episode={episode} list={{episodeList , index}} key={episode.id}/>)
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
        {allEpisodes && allEpisodes.map((episode, index) => {
          const updatedIndex = index + lastestEpisodes.length
          return <Episode episode={episode} list={{episodeList , updatedIndex}} key={episode.id}/>
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
      duration: episode.file.duration,
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
