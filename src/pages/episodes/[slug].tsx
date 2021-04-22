import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { api } from '../../services/api'

import styles from '../../styles/pages/episodes.module.scss'
import { formatedEpisodeTime, formatedPublicationDate } from '../../utils/formatEpisodeDetails'

interface Episode {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  }
}

interface EpisodeProps {
  episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Link href="/">
          <a>
            <img src="/arrow-left.svg" alt="Home"/>
          </a>
        </Link>
        <Image 
          src={episode.thumbnail} 
          alt={episode.title}
          width={720}
          height={160}
          objectFit="cover"         
        />
        <button type="button">
         <img src="/play.svg" alt="Play"/>  
        </button>
      </div>

      <h1>{episode.title}</h1>

      <div className={styles.podcastInfo}>
        <p>{episode.members}</p>
        <span></span>
        <p>{episode.publishedAt}</p>
        <span></span>
        <p>{episode.file.duration}</p>
      </div>

      <article className={styles.content} dangerouslySetInnerHTML={{__html:episode.description}} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  const response = await api.get(`/episodes/${slug}`)

  const episode = {
    id: response.data.id,
    title: response.data.title,
    members: response.data.members,
    thumbnail: response.data.thumbnail,
    publishedAt: formatedPublicationDate(response.data.published_at),
    description: response.data.description,
    file: {
      url: response.data.file.url,
      type: response.data.file.type,
      duration: formatedEpisodeTime(response.data.file.duration),
    }
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24 //24
  }
}