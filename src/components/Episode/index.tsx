import Image from 'next/image'
import Link from 'next/link'
import { formatedEpisodeTime } from '../../utils/formatEpisodeDetails'
import { PlayButton } from '../PlayButton'

import styles from './styles.module.scss'

interface Episode {
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

interface EpisodeProps {
  episode: Episode;
  list: {
    episodeList: Episode[];
    updatedIndex: number;
  }
}

export const Episode = ({ episode, list }: EpisodeProps) => {
  const { episodeList, updatedIndex} = list

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
        <p>{formatedEpisodeTime(episode.file.duration)}</p>
        <span>
          <PlayButton episodes={{episodeList, index: updatedIndex }} />
        </span>
      </div>
    </div>
  )
}
