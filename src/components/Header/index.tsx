import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMM', { locale: ptBR })
  
  return (
    <header className={styles.headerContainer}>
      <div>
        <img src="/logo.svg" alt="logo"/>

        <p>O melhor para você ouvir, sempre</p>

        <span>{currentDate}</span>
      </div>
    </header>
  )
}
