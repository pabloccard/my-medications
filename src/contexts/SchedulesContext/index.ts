import { CreateScheduleParams } from '@/@types/CreateScheduleParams'
import { ScheduleType } from '@/@types/Schedule'
import { createContext } from 'react'

type SchedulesContextType = {
  schedules: Array<ScheduleType>
  createSchedule: (data: CreateScheduleParams) => void
  findSchedules: (date: Date) => Array<ScheduleType>
}

export const SchedulesContext = createContext<SchedulesContextType>(null!)
