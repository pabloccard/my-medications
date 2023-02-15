import {
  Container,
  NumberInput,
  RadioGroupItem,
  RadioGroupRoot,
} from './styles'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'

const newScheduleSchemaValidation = z.object({
  medicationName: z.string(),
  durationInDays: z.number(),
  interval: z.string(),
  startTime: z.string(),
  startDate: z.string(),
})

type FormData = z.infer<typeof newScheduleSchemaValidation>

export const NewScheduleModal = () => {
  const [duration, setDuration] = useState(1)
  const [interval, setInterval] = useState(12)

  const { register, handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(newScheduleSchemaValidation),
  })

  function onChangeDuration(action: 'increment' | 'decrement') {
    switch (action) {
      case 'increment':
        duration === 7 ? setDuration(1) : setDuration((prev) => prev + 1)
        break
      case 'decrement':
        duration === 1 ? setDuration(7) : setDuration((prev) => prev - 1)
        break
    }
  }

  function onChangeInterval(action: 'increment' | 'decrement') {
    if (interval > 12) {
      setInterval(4)
      return
    }

    switch (action) {
      case 'increment':
        interval === 12 ? setInterval(4) : setInterval((prev) => prev + 2)
        break
      case 'decrement':
        interval === 4 ? setInterval(12) : setInterval((prev) => prev - 2)
        break
    }
  }

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="medicationName">Nome do medicamento</label>
        <input
          {...register('medicationName')}
          type="text"
          id="medicationName"
          placeholder="Fenergan"
        />
      </div>

      <div>
        <label htmlFor="duration">
          Por quantos dias você deve tomar o medicamento?
        </label>
        <NumberInput>
          <button onClick={() => onChangeDuration(`decrement`)}>
            <CaretLeft />
          </button>
          <label htmlFor="">
            <input
              {...register('durationInDays', { valueAsNumber: true })}
              type="number"
              id="duration"
              value={duration}
            />
            <span>
              {duration}
              {duration > 1 ? ' dias' : ' dia'}
            </span>
          </label>
          <button onClick={() => onChangeDuration(`increment`)}>
            <CaretRight />
          </button>
        </NumberInput>
      </div>

      <div>
        <label htmlFor="interval">Qual o intervalo de horas?</label>
        <Controller
          control={control}
          name="interval"
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RadioGroupRoot value={value} onValueChange={onChange}>
              <RadioGroupItem value="8h">8h</RadioGroupItem>
              <RadioGroupItem value="10h">10h</RadioGroupItem>
              <RadioGroupItem value="12h">12h</RadioGroupItem>
            </RadioGroupRoot>
          )}
        />
      </div>

      <div>
        <label htmlFor="startTime">
          Qual horário você irá começar a medicação?{' '}
        </label>
        <input {...register('startTime')} type="time" id="startTime" />
      </div>

      <div>
        <label htmlFor="startDate">
          Que dia você irá começar tomar a medicação{' '}
        </label>
        <input {...register('startDate')} type="date" id="startDate" />
      </div>

      <button type="submit">Criar Cronograma</button>
    </Container>
  )
}
