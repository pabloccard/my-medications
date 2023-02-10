import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

export const getCurrentWeek = () => {
  const firstWeekDay = startOfWeek(new Date())
  const lastWeekDay = endOfWeek(firstWeekDay)
  return eachDayOfInterval({ start: firstWeekDay, end: lastWeekDay })
}
