import { CaretLeft, CaretRight } from 'phosphor-react'

import { Container } from './styles'

type DayStepperProps = {
  onValueChange: (...event: any[]) => void
  value: number
}

export const DayStepper = ({ value, onValueChange }: DayStepperProps) => {
  console.log(value)
  return (
    <Container>
      <button
        type="button"
        onClick={() => onValueChange(value - 1)}
        disabled={value === 1}
      >
        <CaretLeft weight="bold" />
      </button>

      <span>
        {value} {value > 1 ? 'dias' : 'dia'}
      </span>

      <button
        type="button"
        onClick={() => onValueChange(value + 1)}
        disabled={value === 14}
      >
        <CaretRight weight="bold" />
      </button>
    </Container>
  )
}
