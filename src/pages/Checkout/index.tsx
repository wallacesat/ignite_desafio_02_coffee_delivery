import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartCard } from '../../components/CartCard'
import { Input } from '../../components/Input'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { PaymentMethod } from '../../reducers/checkout/reducers'

import {
  cepFormatter,
  formatBRLCurrency,
  ufFormatter,
} from '../../utils/formatters'

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
import { stateUFList } from '../../utils/constants'

const addressFormValidationSchema = zod.object({
  cep: zod.string().regex(/^(\d{0,5}|\d{5}\-\d{0,3})$/s).min(1, 'Campo obrigatório'), //eslint-disable-line
  street: zod.string().min(1, 'Campo obrigatório'),
  number: zod.string().min(1, 'Campo obrigatório'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Campo obrigatório'),
  city: zod.string().min(1, 'Campo obrigatório'),
  state: zod.string().refine((val) => stateUFList.includes(val), {
    message: 'UF inexistente',
  }),
})

type AddressFormValidationData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const {
    address,
    paymentMethod,
    cart: { items: cartItems, totalItems, totalPrice, deliveryPrice },
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    addNewAddress,
    addNewPaymentMethod,
    clearCart,
  } = React.useContext(CheckoutContext)

  const redirect = useNavigate()

  const [paymentSelectedMethod, setPaymentSelectedMethod] =
    React.useState<PaymentMethod | null>(paymentMethod)

  const [cepHasFilled, setCepHasFilled] = React.useState(false)
  const [paymentMethodHasSelected, setPaymentMethodHasSelected] =
    React.useState(true)

  const newAddressForm = useForm<AddressFormValidationData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: address || {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, watch, setValue, formState, setError, resetField } =
    newAddressForm

  const cep = watch('cep')

  React.useEffect(() => {
    if (/[0-9]{5}-[\d]{3}/g.test(cep) && cep.length === 9) {
      fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            const {
              logradouro: street,
              uf: state,
              localidade: city,
              bairro: district,
            } = data

            setValue('street', street)
            setValue('state', state)
            setValue('city', city)
            setValue('district', district)
          }
        })
      setCepHasFilled(true)
    }

    if (cep.length > 0 && cep.length < 9) {
      setValue('number', '')
      if (cepHasFilled) {
        setError('cep', { message: 'CEP inválido' })
      }
    }

    if (cep.length < 1) {
      setCepHasFilled(false)
      resetField('cep')
    }
  }, [cep]) //eslint-disable-line

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
    setPaymentMethodHasSelected(true)
  }

  function handleCreateNewAddress(data: AddressFormValidationData) {
    if (!/[0-9]{5}-[\d]{3}/g.test(data.cep)) {
      setError('cep', { message: 'Cep inválido' })
      return null
    }

    if (!paymentSelectedMethod) {
      setPaymentMethodHasSelected(false)
      return null
    }

    addNewAddress(data)
    addNewPaymentMethod(paymentSelectedMethod)
    clearCart()

    redirect('/success')
  }

  const { errors } = formState

  return (
    <CheckoutWrapper onSubmit={handleSubmit(handleCreateNewAddress)} action="">
      <AddressAndPaymentContainer>
        <ContainerTitle>Complete seu pedido</ContainerTitle>
        <AddressContainer>
          <SectionHeader
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon="map-pin-line"
          />
          <AddressInputsContainer>
            <FormProvider {...newAddressForm}>
              <Input
                placeholder="CEP"
                name="cep"
                fieldError={errors?.cep}
                mask={cepFormatter}
              />
              <Input
                placeholder="Rua"
                name="street"
                fieldError={errors?.street}
              />
              <Input
                placeholder="Número"
                name="number"
                fieldError={errors?.number}
              />
              <Input placeholder="Complemento" name="complement" isOptional />
              <Input
                placeholder="Bairro"
                name="district"
                fieldError={errors?.district}
              />
              <Input
                placeholder="Cidade"
                name="city"
                fieldError={errors?.city}
              />
              <Input
                placeholder="UF"
                name="state"
                fieldError={errors?.state}
                mask={ufFormatter}
              />
            </FormProvider>
          </AddressInputsContainer>
        </AddressContainer>
        <PaymentContainer>
          <SectionHeader
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon="currency-dollar"
          />
          <PaymentSelectContainer>
            <>
              {['credit', 'debit', 'money'].map((paymentMethodType) => (
                <PaymentSelect
                  key={paymentMethodType}
                  variant={paymentMethodType as PaymentMethod}
                  onSelect={() =>
                    handleSelectPaymentMethod(
                      paymentMethodType as PaymentMethod,
                    )
                  }
                  isSelected={paymentMethodType === paymentSelectedMethod}
                />
              ))}
              {!paymentMethodHasSelected && (
                <span>* Informe o meio de pagamento</span>
              )}
            </>
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
          <button type="submit" disabled={!totalItems}>
            Confirmar pedido
          </button>
        </ItemsContainer>
      </CartItemsContainer>
    </CheckoutWrapper>
  )
}
