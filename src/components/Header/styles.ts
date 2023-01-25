import styled from 'styled-components'

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  & > a {
    height: 2.5rem;
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationTag = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${(props) => props.theme['purple-200']};
  color: ${(props) => props.theme['purple-500']};

  & > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-700']};
  }
`

export const CartButton = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  position: relative;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['yellow-700']};
`

export const CartBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8.35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-700']};

  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`
