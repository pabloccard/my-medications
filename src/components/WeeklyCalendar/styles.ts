import { motion } from 'framer-motion'
import styled from 'styled-components'

export const WeeklyCalendarContainer = styled.div`
  margin: 5rem auto;
  width: 600px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
`

type SelectedDateProps = {
  $isActive: boolean
}

export const SelectedDate = styled(motion.div)<SelectedDateProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > strong {
    color: ${(props) =>
      props.$isActive ? props.theme['gray-100'] : props.theme['gray-300']};
    font-size: 4.5rem;
    line-height: 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      color: ${(props) => props.theme['gray-300']};
      text-transform: capitalize;
      line-height: 1.6;
    }
  }
`
type ControlsProps = {
  isToday: boolean
}

export const Controls = styled.div<ControlsProps>`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;

  button:first-child {
    all: unset;
    border: 1px solid ${(props) => props.theme['green-600']};
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: 4px;
    text-align: center;
    padding: 0.75rem;
    font-weight: 500;
    color: ${(props) =>
      props.isToday ? props.theme['gray-100'] : props.theme['gray-300']};
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['green-600']};
      color: white;
      transition: background-color 0.2s, color 0.2s;
    }
  }

  button {
    all: unset;
    background-color: ${(props) => props.theme['gray-500']};
    border-radius: 4px;
    padding: 0.25rem;
    cursor: pointer;

    color: ${(props) => props.theme['gray-300']};
    line-height: 0;
  }
`
export const WeekDaysContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
type WeekDayVariants = {
  $isToday: boolean
  $active: boolean
}

export const WeekDay = styled(motion.button)<WeekDayVariants>`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  position: relative;
  padding: 0.875rem 1rem;

  color: ${(props) =>
    props.$active ? props.theme['gray-100'] : props.theme['gray-300']};

  cursor: pointer;
  transition: transform 0.2s ease-in;

  span:first-child {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  span:last-child {
    font-weight: 700;
  }

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: -0.25rem;
    background: ${(props) => props.$isToday && props.theme['green-600']};
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-0.5rem);
  }
`
