import Link from 'next/link'
import { formatedEpisodeTime, formatedPublicationDate } from '../../utils/formatEpisodeDetails'
import { PlayButton } from '../PlayButton'

import styles from './styles.module.scss'

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

export const Podcast = ({ episode }: EpisodeProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.podcast}>
        <Link href="/podcast">
          <a>
            <img src={episode.thumbnail} alt={episode.title}/>
            <h2>{episode.title}</h2>
          </a>
        </Link>
        <p>{episode.members}</p>
        <p>{formatedPublicationDate(episode.published_at)}</p>
        <p>{formatedEpisodeTime(episode.file.duration)}</p>
        <span>
          <PlayButton />
        </span>
      </div>
    </div>
  )
}
