import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export function formatedEpisodeTime(duration: number): string {
  const hours = Math.floor(duration / (60 * 60))
  const minutes = Math.floor((duration % (60 * 60)) / 60)
  const seconds = (duration % (60 * 60)) % 60

  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export function formatedPublicationDate (date: string): string {
  const formatedDate = format(new Date(date), 'd MMM yy', { locale: ptBR })

  return formatedDate
}