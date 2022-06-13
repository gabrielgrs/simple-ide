import Editor from 'react-simple-code-editor'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 16px;
  padding: 3%;
  background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
`

export const IDE = styled(Editor)`
  border-radius: 4px;
  color: #fff;
  min-width: 400px;
  overflow-y: auto;
  background-color: #282c34;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
`

export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  transition: opacity 600ms ease;

  &:hover {
    opacity: 0.7;
  }
`

export const Preview = styled.div`
  padding: 8px;
`
