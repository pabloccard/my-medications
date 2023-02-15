import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.form`
  width: 488px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    display: block;
    color: ${(props) => props.theme['gray-300']};
    margin-bottom: 0.5rem;
  }

  input {
    background: ${(props) => props.theme.input};
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 8px;

    color: ${(props) => props.theme.placeholder};
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    color: red;
  }

  button[type='submit'] {
    all: unset;

    background-color: ${(props) => props.theme['green-600']};
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;

    color: ${(props) => props.theme.white};
    font-weight: bold;
    text-align: center;
  }
`

export const NumberInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 220px;
  position: relative;

  button {
    all: unset;

    padding: 0.75rem;

    background: ${(props) => props.theme.input};
    border-radius: 6px;
    cursor: pointer;

    color: ${(props) => props.theme['green-600']};
    line-height: 0;

    &:focus {
      border: 1px solid ${(props) => props.theme['green-600']}; 
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    position: absolute;
    display: none;
  }

  span {
    color: ${(props) => props.theme.white};
  }
`

export const RadioGroupRoot = styled(RadioGroup.Root)`
  width: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.theme.input};
  padding: 0.75rem 0;
  color: ${(props) => props.theme['green-600']};
  border-radius: 8px;
  transition: color ease 0.2s, background-color ease 0.2s;

  &[data-state='checked'] {
    background: ${(props) => props.theme['green-600']};
    color: ${(props) => props.theme.white};
  }
`
