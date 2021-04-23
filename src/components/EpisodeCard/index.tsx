import Link from 'next/link'
import Image from 'next/image'

import { PlayButton } from '../PlayButton'

import styles from './styles.module.scss'
import { usePlayer } from '../../hooks/usePlayer'
import { formatedEpisodeTime } from '../../utils/formatEpisodeDetails'

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

interface EpisodeCardProps {
  episode: Episode;
  list: {
    episodeList: Episode[];
    index: number;
  }
}

export const EpisodeCard = ({ episode, list }: EpisodeCardProps) => {
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
              <span>{formatedEpisodeTime(episode.file.duration)}</span>
            </div>
          </div>
        </a>
      </Link>

      <PlayButton episodes={list} />
    </div>
  )
}
