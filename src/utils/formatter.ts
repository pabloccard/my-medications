import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const day = (date: Date) => {
  return format(date, 'd', { locale: ptBR })
}

export const shortWeekDay = (date: Date) => {
  return format(date, 'EEEEEE', { locale: ptBR })
}

export const weekDay = (date: Date) => {
  return format(date, 'eee', { locale: ptBR })
}

export const month = (date: Date) => {
  return format(date, 'MMMM', { locale: ptBR })
}

export const year = (date: Date) => {
  return format(date, 'yyyy', { locale: ptBR })
}
