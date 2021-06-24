import Image from 'next/image'
import Head from 'next/head'
import { usePlayer } from '../../hooks/usePlayer'
import styles from './styles.module.scss'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useRef, useState } from 'react'
import { formatedEpisodeTime } from '../../utils/formatEpisodeDetails'

export const Player = () => {
  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying, 
    togglePlay, 
    setPlayingState, 
    playPrevious, 
    playNext, 
    hasPrevious, 
    hasNext, 
    isLooping, 
    toggleLoop, 
    isShuffling, 
    toggleShuffle,
    clearPlayState 
  } = usePlayer()

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [progress, setProgress] = useState(0)

  const episode = episodeList[currentEpisodeIndex]


  function setupProgressListener() {
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount
    setProgress(amount)
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayState()
    }
  }


  useEffect(() => {
    if(!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying]);

  return (
    <div className={styles.playerContainer}>
      <Head>
        <title>Home | Podcastr</title>
      </Head>

      <header className={styles.miniPlayer}>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <img src={episode.thumbnail} />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? styles.empty : ''}>
        <div className={styles.progress}>
          <span>{formatedEpisodeTime(progress) || '0:00:00'}</span>
          <div className={styles.slider}>
            {episode ? (
              <Slider 
                max={episode.file.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{backgroundColor: '#04d361'}}
                railStyle={{backgroundColor: '#9f75ff'}}
                handleStyle={{borderColor: '#04d361', borderWidth: 4}}
              />
            ) : (
              <div className={styles.emptySlider}></div>
            )}
          </div>
          <span>{episode ? formatedEpisodeTime(episode.file.duration) : '0:00:00'}</span>
        </div>

        {episode && (
          <audio 
            src={episode.file.url} 
            ref={audioRef}
            autoPlay 
            onEnded={handleEpisodeEnded}
            loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <div className={styles.buttons}>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            className={isShuffling ? styles.isActive : ''}
          >
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type="button" disabled={!episode || !hasPrevious} onClick={() => playPrevious()}>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button type="button" className={styles.playButton} disabled={!episode} onClick={togglePlay}>
            {isPlaying ? (
              <img src="/pause.svg" alt="Tocar"/>
            ) : (
              <img src="/play.svg" alt="Tocar"/>
            )}
          </button>
          <button type="button" disabled={!episode || !hasNext} onClick={() => playNext()}>
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>
          <button
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
            className={isLooping ? styles.isActive : ''}
          >
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  )
}
