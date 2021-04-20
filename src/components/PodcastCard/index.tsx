import Link from 'next/link'

import { PlayButton } from '../PlayButton'

import styles from './styles.module.scss'
import { formatedEpisodeTime, formatedPublicationDate } from '../../utils/formatEpisodeDetails'

interface EpisodeProps {
  episode: {
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
}

export const PodcastCard = ({ episode }: EpisodeProps) => {
  

  return (
    <Link href="/podcast">
      <a className={styles.podcastCard} >
        <img src={episode.thumbnail} alt={episode.title}/>

        <div className={styles.details}>
          <h2>{episode.title}</h2>
          <p>{episode.members}</p>
          <div>
            <span>{formatedPublicationDate(episode.published_at)}</span>
            <span />
            <span>{formatedEpisodeTime(episode.file.duration)}</span>
          </div>
        </div>

        <PlayButton />
      </a>
    </Link>
  )
}
