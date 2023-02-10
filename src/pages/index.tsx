import { MedicationList } from '@/components/MedicationList'
import { WeeklyCalendar } from '@/components/WeeklyCalendar'

export default function Home() {
  return (
    <>
      <WeeklyCalendar />
      <MedicationList />
    </>
  )
}
