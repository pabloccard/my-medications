import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  min-width: 600px;

  th {
    /* background-color: ${(props) => props.theme['gray-500']}; */
    padding: 0 0.875rem;
    text-align: left;
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.875rem;
    /* line-height: 1.6; */

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
      color: ${(props) => props.theme.purple};
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    padding: 0.875rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      width: 5%;
      padding-left: 1.5rem;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      padding-right: 1.5rem;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      color: ${(props) => props.theme['green-600']};
    }
  }
`
