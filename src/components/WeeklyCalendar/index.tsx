import { useState, useContext } from 'react'
import { SelectedDateContext } from '@/contexts/SelectedDateContext'
import { day, weekDay, month, year, shortWeekDay } from '@/utils/formatter'
import { getCurrentWeek } from '@/utils/getCurrentWeek'
import {
  addDays,
  eachDayOfInterval,
  endOfWeek,
  isSameDay,
  isToday,
  startOfWeek,
  subDays,
} from 'date-fns'

import { AnimatePresence } from 'framer-motion'
import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  WeeklyCalendarContainer,
  SelectedDate,
  Controls,
  WeekDaysContainer,
  WeekDay,
} from './styles'

export const WeeklyCalendar = () => {
  const [week, setWeek] = useState<Date[]>(getCurrentWeek())

  const { setSelectedDate, selectedDate } = useContext(SelectedDateContext)

  function setNextWeek() {
    setWeek((state) => {
      const firstWeekDay = addDays(state[6], 1)
      const lastWeekDay = endOfWeek(firstWeekDay)
      return eachDayOfInterval({ start: firstWeekDay, end: lastWeekDay })
    })
    setSelectedDate(startOfWeek(addDays(selectedDate, 7)))
  }

  function setPreviousWeek() {
    setWeek((state) => {
      const firstWeekDay = startOfWeek(subDays(state[0], 1))
      const lastWeekDay = endOfWeek(firstWeekDay)
      return eachDayOfInterval({ start: firstWeekDay, end: lastWeekDay })
    })
    setSelectedDate(startOfWeek(subDays(selectedDate, 7)))
  }

  function resetCalendar() {
    setSelectedDate(new Date())
    setWeek(getCurrentWeek())
  }

  function handleSelectDate(date: Date) {
    setSelectedDate(date)
  }

  return (
    <AnimatePresence>
      <WeeklyCalendarContainer>
        <header>
          <SelectedDate $isActive={isToday(selectedDate)}>
            <strong>{day(selectedDate)}</strong>
            <div>
              <span>{weekDay(selectedDate)}</span>
              <span>{`${month(selectedDate)} | ${year(selectedDate)}`}</span>
            </div>
          </SelectedDate>

          <Controls isToday={isToday(selectedDate)}>
            <button onClick={resetCalendar}>Hoje</button>
            <button onClick={setPreviousWeek}>
              <CaretLeft />
            </button>
            <button onClick={setNextWeek}>
              <CaretRight />
            </button>
          </Controls>
        </header>

        <WeekDaysContainer>
          {week.map((date) => (
            <WeekDay
              key={String(date)}
              $active={isSameDay(date, selectedDate)}
              $isToday={isToday(date)}
              onClick={() => handleSelectDate(date)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>{shortWeekDay(date)}</span>
              <span>{day(date)}</span>
            </WeekDay>
          ))}
        </WeekDaysContainer>
      </WeeklyCalendarContainer>
    </AnimatePresence>
  )
}
