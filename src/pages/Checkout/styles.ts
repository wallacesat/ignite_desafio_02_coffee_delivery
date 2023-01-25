import styled from 'styled-components'

export const CheckoutWrapper = styled.form`
  display: grid;
  grid-template-columns: 57.144% 1fr;
  gap: 2rem;
`

export const AddressAndPaymentContainer = styled.div``

export const CartItemsContainer = styled.div``

export const ContainerTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`
const AddressAndPaymentContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-100']};
`

export const AddressContainer = styled(AddressAndPaymentContainerBase)`
  margin-bottom: 0.75rem;
`

export const AddressInputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;
  margin-top: 2rem;

  & label:nth-child(1),
  label:nth-child(3),
  label:nth-child(5) {
    width: 100%;
    max-width: 35%;
  }

  & label:nth-child(2) {
    width: 100%;
    max-width: 100%;
  }

  & label:nth-child(4) {
    flex: 1;
  }

  & label:nth-child(6) {
    flex: 1;
  }

  & label:nth-child(7) {
    width: 100%;
    max-width: 10%;
  }
`

export const PaymentContainer = styled(AddressAndPaymentContainerBase)``

export const PaymentSelectContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px;
  gap: 1.5rem;
  background: ${(props) => props.theme['gray-100']};

  & > span {
    text-align: center;
  }

  & > hr {
    border: 1px solid ${(props) => props.theme['gray-300']};
  }

  & > div.cart-card > hr {
    margin-top: 1.5rem;
  }

  & > button {
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-500']};
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow-700']};
    }
  }
`

export const PurchaseSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const PurchaseDescriptionBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PurchaseSummaryDescription = styled(PurchaseDescriptionBase)`
  & > span:first-child {
    font-size: 0.875rem;
  }
`

export const PurchaseSummaryTotal = styled(PurchaseDescriptionBase)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`
