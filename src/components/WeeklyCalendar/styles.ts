import { motion } from 'framer-motion'
import styled from 'styled-components'

export const WeeklyCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 5rem auto;
  width: 600px;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const TodaysDate = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > strong {
    color: ${(props) => props.theme['gray-200']};
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
export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > button {
    all: unset;
    border: 1px solid ${(props) => props.theme['green-600']};
    width: 100%;
    border-radius: 4px;
    text-align: center;
    padding: 0.25rem 0;
    font-weight: 500;
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['green-600']};
      color: white;
      transition: background-color 0.2s, color 0.2s;
    }
  }

  div {
    display: flex;
    gap: 0.5rem;

    > button {
      all: unset;
      background-color: ${(props) => props.theme['gray-500']};
      border-radius: 4px;
      padding: 0.25rem;
      cursor: pointer;

      color: ${(props) => props.theme['gray-300']};
      line-height: 0;
    }
  }
`
export const WeekDaysContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
`
