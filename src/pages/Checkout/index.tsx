import * as React from 'react'

import { CartCard } from '../../components/CartCard'
import { Input } from '../../components/Input'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { PaymentMethod } from '../../reducers/checkout/reducers'

import { formatBRLCurrency } from '../../utils/formatters'

import { PaymentSelect } from './PaymentSelect'
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
  const {
    paymentMethod,
    cart: { items: cartItems, totalItems, totalPrice, deliveryPrice },
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
  } = React.useContext(CheckoutContext)

  const [paymentSelectedMethod, setPaymentSelectedMethod] =
    React.useState<PaymentMethod | null>(null)

  React.useEffect(() => {
    if (paymentMethod) {
      setPaymentSelectedMethod(paymentMethod)
    }
  }, [paymentMethod])

  function handleSelectPaymentMethod(paymentMethodType: PaymentMethod | null) {
    setPaymentSelectedMethod((state) => {
      if (state === paymentMethodType) {
        return null
      }

      return paymentMethodType
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <CheckoutWrapper onSubmit={handleSubmit} action="">
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
            {['credit', 'debit', 'money'].map((paymentMethodType) => (
              <PaymentSelect
                key={paymentMethodType}
                variant={paymentMethodType as PaymentMethod}
                onSelect={() =>
                  handleSelectPaymentMethod(paymentMethodType as PaymentMethod)
                }
                isSelected={paymentMethodType === paymentSelectedMethod}
              />
            ))}
          </PaymentSelectContainer>
        </PaymentContainer>
      </AddressAndPaymentContainer>
      <CartItemsContainer>
        <ContainerTitle>Cafés selecionados</ContainerTitle>
        <ItemsContainer>
          {!totalItems ? (
            <>
              <span>Nenhum item foi adicionado ao carrinho</span>
              <hr />
            </>
          ) : (
            cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <CartCard
                  id={item.id}
                  imgUrl={item.imgUrl}
                  amount={item.amount}
                  price={item.price * item.amount}
                  title={item.title}
                  onClickMinus={item.amount > 1 ? decrementCartItem : () => {}}
                  onClickPlus={incrementCartItem}
                  onClickRemove={removeCartItem}
                />
                <hr />
              </div>
            ))
          )}

          <PurchaseSummary>
            <PurchaseSummaryDescription>
              <span>Total de itens</span>
              <span>{formatBRLCurrency(totalPrice)}</span>
            </PurchaseSummaryDescription>
            <PurchaseSummaryDescription>
              <span>Entrega</span>
              <span>{formatBRLCurrency(deliveryPrice)}</span>
            </PurchaseSummaryDescription>
            <PurchaseSummaryTotal>
              <span>Total</span>
              <span>{formatBRLCurrency(totalPrice + deliveryPrice)}</span>
            </PurchaseSummaryTotal>
          </PurchaseSummary>
          <button type="submit">Confirmar pedido</button>
        </ItemsContainer>
      </CartItemsContainer>
    </CheckoutWrapper>
  )
}
