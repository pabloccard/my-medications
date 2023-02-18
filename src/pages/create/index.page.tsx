import { NewScheduleModal } from '@/components/NewScheduleModal'
import Image from 'next/image'
import { Container } from './styles'
import medicine from '../../assets/medicine-cuate.svg'

export default function Create() {
  return (
    <Container>
      <NewScheduleModal />
      <Image src={medicine} alt="" width={600} />
    </Container>
  )
}
