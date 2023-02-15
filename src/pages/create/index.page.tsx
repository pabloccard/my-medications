import { NewScheduleModal } from '@/components/NewScheduleModal'
import Image from 'next/image'
import { Container, Img } from './styles'
import medicine from '../../assets/medicine-cuate.svg'

export default function Create() {
  return (
    <Container>
      {/* <header>
        <h2>Crie um novo cronograma de medicação</h2>
      </header> */}

      <NewScheduleModal />

      <Image src={medicine} alt="" width={520} />
    </Container>
  )
}
