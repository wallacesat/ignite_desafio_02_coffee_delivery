import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconWrapperProps {
  backgroundColor: string
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Description = styled.div`
  & > span {
    display: block;
  }
`
