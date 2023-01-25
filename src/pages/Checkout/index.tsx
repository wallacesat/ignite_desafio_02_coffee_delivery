import * as React from 'react'

import { CartCard } from '../../components/CartCard'
import { Input } from '../../components/Input'

import { PaymentSelect, PaymentSelectVariant } from './PaymentSelect'
import { SectionHeader } from './SectionHeader'

import {
  AddressAndPaymentContainer,
  AddressContainer,
  AddressInputsContainer,
  CartItemsContainer,
  CheckoutWrapper,
  ContainerTitle,
  ItemsContainer,
  PaymentContainer,
  PaymentSelectContainer,
  PurchaseSummary,
  PurchaseSummaryDescription,
  PurchaseSummaryTotal,
} from './styles'

export function Checkout() {
  const [paymentSelectedMethod, setPaymentSelectedMethod] =
    React.useState<PaymentSelectVariant | null>(null)

  function handleSelectPaymentMethod(
    paymentMethod: PaymentSelectVariant | null,
  ) {
    console.log(paymentMethod)
    setPaymentSelectedMethod((state) => {
      if (state === paymentMethod) {
        return null
      }

      return paymentMethod
    })
  }

  return (
    <CheckoutWrapper>
      <AddressAndPaymentContainer>
        <ContainerTitle>Complete seu pedido</ContainerTitle>
        <AddressContainer>
          <SectionHeader
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon="map-pin-line"
          />
          <AddressInputsContainer>
            <Input type="text" placeholder="CEP" />
            <Input type="text" placeholder="Rua" />
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" isOptional />
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
          </AddressInputsContainer>
        </AddressContainer>
        <PaymentContainer>
          <SectionHeader
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon="currency-dollar"
          />
          <PaymentSelectContainer>
            {['credit', 'debit', 'money'].map((paymentMethod) => (
              <PaymentSelect
                key={paymentMethod}
                variant={paymentMethod as PaymentSelectVariant}
                onSelect={() =>
                  handleSelectPaymentMethod(
                    paymentMethod as PaymentSelectVariant,
                  )
                }
                isSelected={paymentMethod === paymentSelectedMethod}
              />
            ))}
          </PaymentSelectContainer>
        </PaymentContainer>
      </AddressAndPaymentContainer>
      <CartItemsContainer>
        <ContainerTitle>Cafés selecionados</ContainerTitle>
        <ItemsContainer>
          <CartCard />
          <hr />
          <CartCard />
          <hr />
          <PurchaseSummary>
            <PurchaseSummaryDescription>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </PurchaseSummaryDescription>
            <PurchaseSummaryDescription>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </PurchaseSummaryDescription>
            <PurchaseSummaryTotal>
              <span>Total</span>
              <span>R$ 33,20</span>
            </PurchaseSummaryTotal>
          </PurchaseSummary>
          <button>COnfirmar pedido</button>
        </ItemsContainer>
      </CartItemsContainer>
    </CheckoutWrapper>
  )
}
