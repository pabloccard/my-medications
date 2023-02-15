export const DurationInput = () => {
  return (
    <Container>
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
          dias
        </label>
        <button onClick={() => onChangeDuration(`increment`)}>
          <CaretRight />
        </button>
      </NumberInput>
    </Container>
  )
}
