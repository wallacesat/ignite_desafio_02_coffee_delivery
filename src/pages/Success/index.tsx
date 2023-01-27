import * as React from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { CheckoutContext } from '../../contexts/CheckoutContext'

import { DeliveryDescription } from './DeliveryDescription'

import delivery from '../../assets/delivery.svg'

import { DeliveryDetails, SuccessMain, Wrapper } from './styles'

export function Success() {
  const { address, paymentMethod } = React.useContext(CheckoutContext)

  const paymenteMethodParse = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
  }

  return (
    <Wrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <SuccessMain>
        <DeliveryDetails>
          {!!address && (
            <DeliveryDescription
              title="Entrega em"
              titleComplement={`${address.street} ${address.number || ''}`}
              icon={MapPin}
              backgroundIconColor="purple"
            >
              {`${address.district} - ${address.city}, ${address.state}`}
            </DeliveryDescription>
          )}
          <DeliveryDescription
            title="Previsão de entrega"
            icon={Timer}
            backgroundIconColor="yellow"
          >
            20 min - 30 min
          </DeliveryDescription>
          {!!paymentMethod && (
            <DeliveryDescription
              title="Pagamento na entrega"
              icon={CurrencyDollar}
              backgroundIconColor="yellow-dark"
            >
              {paymenteMethodParse[paymentMethod]}
            </DeliveryDescription>
          )}
        </DeliveryDetails>
        <img src={delivery} alt="" />
      </SuccessMain>
    </Wrapper>
  )
}
