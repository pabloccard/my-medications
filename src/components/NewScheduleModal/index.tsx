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
import { useContext, useState } from 'react'
import { SchedulesContext } from '@/contexts/SchedulesContext'

const newScheduleSchemaValidation = z.object({
  title: z.string(),
  durationInDays: z.number(),
  intervalInHours: z.string(),
  startTime: z.string(),
  startDate: z.string(),
})

type FormData = z.infer<typeof newScheduleSchemaValidation>

export const NewScheduleModal = () => {
  const [duration, setDuration] = useState<number>(1)

  const { createSchedule } = useContext(SchedulesContext)

  const { register, handleSubmit, control, setValue } = useForm<FormData>({
    resolver: zodResolver(newScheduleSchemaValidation),
  })

  function onChangeDuration(action: 'increment' | 'decrement') {
    const maxDuration = 14
    const minDuration = 2
    let newDuration = duration

    if (action === 'increment') {
      newDuration = duration < maxDuration ? duration + 1 : minDuration
    } else {
      newDuration = duration > minDuration ? duration - 1 : maxDuration
    }

    setDuration(newDuration)
    setValue('durationInDays', newDuration)
  }

  function onSubmit(data: FormData) {
    createSchedule(data)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="medicationName">Nome do medicamento</label>
        <input
          {...register('title')}
          type="text"
          id="medicationName"
          placeholder="Fenergan"
        />
      </div>

      <div>
        <label htmlFor="duration">
          Por quanto tempo você deve tomar a medicação?
        </label>
        <NumberInput>
          <button type="button" onClick={() => onChangeDuration(`decrement`)}>
            <CaretLeft />
          </button>
          <label htmlFor="">
            <input
              {...register('durationInDays', { valueAsNumber: true })}
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
            <span>
              {duration}
              {duration > 1 ? ' dias' : ' dia'}
            </span>
          </label>
          <button type="button" onClick={() => onChangeDuration(`increment`)}>
            <CaretRight />
          </button>
        </NumberInput>
      </div>

      <div>
        <label htmlFor="interval">Qual o intervalo de horas?</label>
        <Controller
          control={control}
          name="intervalInHours"
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RadioGroupRoot value={value} onValueChange={onChange}>
              <RadioGroupItem value="8">8h</RadioGroupItem>
              <RadioGroupItem value="10">10h</RadioGroupItem>
              <RadioGroupItem value="12">12h</RadioGroupItem>
            </RadioGroupRoot>
          )}
        />
      </div>

      <div>
        <label htmlFor="startTime">
          Qual horário você irá começar a medicação?
        </label>
        <input {...register('startTime')} type="time" id="startTime" />
      </div>

      <div>
        <label htmlFor="startDate">
          Que dia você irá começar tomar a medicação
        </label>
        <input {...register('startDate')} type="date" id="startDate" />
      </div>

      <button type="submit">Criar Cronograma</button>
    </Container>
  )
}
