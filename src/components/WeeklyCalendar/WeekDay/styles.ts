import { motion } from 'framer-motion'
import styled from 'styled-components'

type WeekDayVariants = {
  active: boolean
}

export const WeekDayContainer = styled(motion.button)<WeekDayVariants>`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['gray-600']};
  padding: 0.875rem 1rem;
  border-radius: 8px;
  border-top: 1rem solid ${(props) => props.theme['gray-500']};
  border-color: ${(props) => props.active && props.theme['green-600']};
  color: ${(props) =>
    props.active ? props.theme['gray-200'] : props.theme['gray-300']};

  /* transform: ${(props) => props.active && 'translateY(-1.5rem)'}; */
  transition: transform 0.2s;
  cursor: pointer;

  span:first-child {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  span:last-child {
    font-weight: 700;
  }

  &:hover {
    transform: translateY(-0.5rem);
  }
`
