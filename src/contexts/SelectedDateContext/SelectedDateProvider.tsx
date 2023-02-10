import { ReactNode, useState } from 'react'
import { SelectedDateContext } from '.'

type SelectedDateProviderProps = {
  children: ReactNode
}

export const SelectedDateProvider = ({
  children,
}: SelectedDateProviderProps) => {
  const [selectedDate, setDate] = useState(new Date())

  function setSelectedDate(date: Date) {
    setDate(date)
  }

  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </SelectedDateContext.Provider>
  )
}
