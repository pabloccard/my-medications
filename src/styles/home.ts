import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
`

export const Controls = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    all: unset;
    background-color: ${(props) => props.theme['gray-500']};
    border-radius: 4px;
    line-height: 0;
    cursor: pointer;
    padding: 0.2rem;

    svg {
      fill: green;
    }
  }
`
