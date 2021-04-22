import Image from 'next/image'
import Link from 'next/link'
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

export const Episode = ({ episode }: EpisodeProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.podcast}>
        <Link href={`/episodes/${episode.id}`}>
          <a>
            <Image width={120} height={120} src={episode.thumbnail} alt={episode.title} objectFit="cover"/>
            <h2>{episode.title}</h2>
          </a>
        </Link>
        <p>{episode.members}</p>
        <p>{episode.publishedAt}</p>
        <p>{episode.file.duration}</p>
        <span>
          <PlayButton />
        </span>
      </div>
    </div>
  )
}
