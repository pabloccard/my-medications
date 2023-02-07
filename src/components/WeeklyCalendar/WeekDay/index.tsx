import { isToday as checkIsToday } from 'date-fns'
import { WeekDayContainer } from './styles'

type WeekDayProps = {
  date: Date
  setDate(date: Date): void
}

export const WeekDay = ({ date, setDate }: WeekDayProps) => {
  function handleClick() {
    setDate(date)
  }

  const weekDay = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' })
    .format(date)
    .substring(3, 0)

  const monthDay = new Intl.DateTimeFormat('pt-BR', { day: 'numeric' }).format(
    date,
  )

  const isToday = checkIsToday(date)

  return (
    <WeekDayContainer
      active={isToday}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span>{weekDay}</span>
      <span>{monthDay}</span>
    </WeekDayContainer>
  )
}
