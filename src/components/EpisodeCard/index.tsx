import Link from 'next/link'
import Image from 'next/image'

import { PlayButton } from '../PlayButton'

import styles from './styles.module.scss'

interface EpisodeProps {
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

export const EpisodeCard = ({ episode }: EpisodeProps) => {
  

  return (
    <div className={styles.podcastCard}>
      <Link href={`/episodes/${episode.id}`}>
        <a>
          <Image width={192} height={192} src={episode.thumbnail} alt={episode.title} objectFit="cover"/>

          <div className={styles.details}>
            <h2>{episode.title}</h2>
            <p>{episode.members}</p>
            <div>
              <span>{episode.publishedAt}</span>
              <span />
              <span>{episode.file.duration}</span>
            </div>
          </div>
        </a>
      </Link>

      <PlayButton />
    </div>
  )
}
