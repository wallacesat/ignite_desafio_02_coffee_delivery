import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { DeliveryDescription } from './DeliveryDescription'

import delivery from '../../assets/delivery.svg'

import { DeliveryDetails, SuccessMain, Wrapper } from './styles'

export function Success() {
  return (
    <Wrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <SuccessMain>
        <DeliveryDetails>
          <DeliveryDescription
            title="Entrega em"
            titleComplement="Rua João Daniel Martinelli, 102"
            icon={MapPin}
            backgroundIconColor="purple"
          >
            Farrapos - Porto Alegre, RS
          </DeliveryDescription>
          <DeliveryDescription
            title="Previsão de entrega"
            icon={Timer}
            backgroundIconColor="yellow"
          >
            20 min - 30 min
          </DeliveryDescription>
          <DeliveryDescription
            title="Pagamento na entrega"
            icon={CurrencyDollar}
            backgroundIconColor="yellow-dark"
          >
            Cartão de Crédito
          </DeliveryDescription>
        </DeliveryDetails>
        <img src={delivery} alt="" />
      </SuccessMain>
    </Wrapper>
  )
}
