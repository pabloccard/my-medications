import {
  addDays,
  eachDayOfInterval,
  endOfWeek,
  startOfWeek,
  subDays,
  format,
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { AnimatePresence } from 'framer-motion'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import {
  WeeklyCalendarContainer,
  TodaysDate,
  Controls,
  WeekDaysContainer,
} from './styles'
import { WeekDay } from './WeekDay'

export const WeeklyCalendar = () => {
  const [week, setWeek] = useState(() => {
    const firstWeekDay = startOfWeek(new Date())
    const lastWeekDay = endOfWeek(firstWeekDay)
    return eachDayOfInterval({ start: firstWeekDay, end: lastWeekDay })
  })

  const [date, setDate] = useState(new Date())

  function setNextWeek() {
    setWeek((state) => {
      const firstWeekDay = addDays(state[6], 1)
      const lastWeekDay = endOfWeek(firstWeekDay)
      return eachDayOfInterval({ start: firstWeekDay, end: lastWeekDay })
    })
  }

  function setPreviousWeek() {
    setWeek((state) => {
      const firstWeekDay = startOfWeek(subDays(state[0], 1))
      const lastWeekDay = endOfWeek(firstWeekDay)
      return eachDayOfInterval({ start: firstWeekDay, end: lastWeekDay })
    })
  }

  function resetAll() {
    setDate(new Date())
    setWeek(() => {
      const firstWeekDay = startOfWeek(new Date())
      const lastWeekDay = endOfWeek(firstWeekDay)
      return eachDayOfInterval({ start: firstWeekDay, end: lastWeekDay })
    })
  }

  const weekDayName = format(date, 'eee', { locale: ptBR })
  const monthDay = format(date, 'd', { locale: ptBR })
  const month = format(date, 'MMMM', { locale: ptBR })
  const year = format(date, 'yyyy', { locale: ptBR })

  return (
    <AnimatePresence>
      <WeeklyCalendarContainer>
        <header>
          <TodaysDate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <strong>{monthDay}</strong>
            <div>
              <span>{weekDayName}</span>
              <span>
                {month} | {year}
              </span>
            </div>
          </TodaysDate>

          <Controls>
            <button onClick={resetAll}>Hoje</button>
            <div>
              <button onClick={setPreviousWeek}>
                <CaretLeft />
              </button>
              <button onClick={setNextWeek}>
                <CaretRight />
              </button>
            </div>
          </Controls>
        </header>

        <WeekDaysContainer>
          {week.map((date) => (
            <WeekDay key={String(date)} date={date} setDate={setDate} />
          ))}
        </WeekDaysContainer>
      </WeeklyCalendarContainer>
    </AnimatePresence>
  )
}
