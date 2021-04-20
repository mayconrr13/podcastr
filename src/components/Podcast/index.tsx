import styles from './styles.module.scss'

export const Podcast = () => {
  return (
    <div className={styles.podcast}>
      <div>
        <img src="/teste.png" alt="teste"/>
        <h2>Title</h2>
      </div>
      <p>Integrantes do podcast</p>
      <p>8 Jan 2021</p>
      <p>1:35:28</p>
      <span>
        <button type="button">
          <img src="/play-green.svg" alt="Escutar agora"/>
        </button>
      </span>
    </div>
  )
}
