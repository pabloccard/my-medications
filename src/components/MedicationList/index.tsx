import { ScheduleType } from '@/@types/Schedule'
import { SchedulesContext } from '@/contexts/SchedulesContext'
import { SelectedDateContext } from '@/contexts/SelectedDateContext'
import { useContext, useEffect, useState } from 'react'
import { Container, Table } from './styles'

export const MedicationList = () => {
  const { selectedDate } = useContext(SelectedDateContext)
  const { findSchedules } = useContext(SchedulesContext)

  const [schedules, setSchedules] = useState<ScheduleType[]>()

  useEffect(() => {
    const schedules = findSchedules(selectedDate)
    setSchedules(schedules)
  }, [findSchedules, selectedDate])

  return (
    <Container>
      <Table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td></td>
            <td>Fluconazol</td>
            <td>12:46</td>
            <td>ingerido</td>
          </tr>
          <tr>
            <td></td>
            <td>Fluconazol</td>
            <td>12:46</td>
            <td>ingerido</td>
          </tr>
          <tr>
            <td></td>
            <td>Fluconazol</td>
            <td>12:46</td>
            <td>ingerido</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
