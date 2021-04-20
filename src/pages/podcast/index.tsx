import Link from 'next/link'

import styles from '../../styles/pages/podcast.module.scss'

interface EpisodeProps {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  }
}

export default function Podcast() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Link href="/">
          <a>
            <img src="/arrow-left.svg" alt="Back"/>
          </a>
        </Link>
        <img src="/banner.png" alt="banner"/>
        <button type="button">
         <img src="/play.svg" alt="Play"/>  
        </button>
      </div>

      <h1>
        Como começar na programação em
        2021 do jeito certo
      </h1>

      <div className={styles.podcastInfo}>
        <p>Diego e Richard</p>
        <span></span>
        <p>8 Jan 2021</p>
        <span></span>
        <p>35:40</p>
      </div>

      <article className={styles.content}>
        <p>
        Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a importância da contribuição open source e quais desafios circulam na comunidade.  
        </p> 
        <p>
        A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação. O Faladev é um podcast original Rocketseat.
        </p>
      </article>
    </div>
  )
}
