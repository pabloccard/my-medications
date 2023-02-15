import styled from 'styled-components'

export const Container = styled.div`
  header {
    color: ${(props) => props.theme['gray-200']};
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1120px;
  margin: 0 auto;
  height: 100vh;

  img {
    transform: rotateY(180deg);
  }
`

export const Img = styled.div``

export const Inputs = styled.div``
