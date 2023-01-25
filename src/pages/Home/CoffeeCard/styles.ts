import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  & > img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  & > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-700']};
    text-align: center;
    margin-bottom: 0.5rem;
  }

  & > span {
    text-align: center;
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 2.0625rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const CoffeeTag = styled.div`
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-700']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-200']};
`

export const CardFooter = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

export const PrefixValue = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-600']};
`

export const Value = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => props.theme['gray-600']};
`

export const CartActions = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 2.375rem;
`

export const AddCartButton = styled.button`
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme['gray-100']};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`
