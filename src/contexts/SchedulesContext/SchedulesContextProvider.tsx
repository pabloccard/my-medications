import { ScheduleType } from '@/@types/Schedule'
import { addDays, eachMinuteOfInterval, isSameDay } from 'date-fns'
import { ReactNode } from 'react'
import { SchedulesContext } from '.'
import { v4 as uuidV4 } from 'uuid'
import { CreateScheduleParams } from '@/@types/CreateScheduleParams'
import { usePersistedState } from '@/hooks/usePersistedState'

export const SchedulesContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [schedules, setSchedules] = usePersistedState<ScheduleType[]>(
    '@my-medications: schedules',
    [],
  )

  function createSchedule(data: CreateScheduleParams) {
    const { title, startDate, startTime, durationInDays, intervalInHours } =
      data

    const scheduleAlreadyExists = schedules.some(
      (schedule) =>
        schedule.title.toLocaleLowerCase() === title.toLocaleLowerCase(),
    )

    if (scheduleAlreadyExists) {
      throw new Error('você já tem um cronograma com este medicamento')
    }

    const startDateTime = new Date(`${startDate} ${startTime}`)
    const endDateTime = addDays(startDateTime, durationInDays)
    const intervalInMinutes = Number(intervalInHours) * 60

    const newSchedules = eachMinuteOfInterval(
      { start: startDateTime, end: endDateTime },
      { step: intervalInMinutes },
    ).map((schedule) => {
      return {
        id: uuidV4(),
        title,
        ingested: false,
        datetime: schedule,
      }
    })

    setSchedules((prev) => [...prev, ...newSchedules])
  }

  function findSchedules(date: Date) {
    return schedules.filter((schedule) =>
      isSameDay(schedule.datetime, new Date(date)),
    )
  }

  return (
    <SchedulesContext.Provider
      value={{ schedules, createSchedule, findSchedules }}
    >
      {children}
    </SchedulesContext.Provider>
  )
}
