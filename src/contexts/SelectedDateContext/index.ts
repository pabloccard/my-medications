import { createContext } from 'react'

type SelectedDateType = {
  setSelectedDate(date: Date): void
  selectedDate: Date
}

export const SelectedDateContext = createContext<SelectedDateType>(null!)
