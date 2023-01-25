import * as React from 'react'
import { ThemeContext } from 'styled-components'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'

import introCoffeeIllustration from '../../../assets/intro-coffee-illustration.svg'

import {
  DifferentialItem,
  DifferentialsWrapper,
  IntroWrapper,
  IntroContent,
} from './styles'

export function HomeIntro() {
  const themeContext = React.useContext(ThemeContext)

  const differentialsList = [
    {
      icon: <ShoppingCartSimple size={16} weight="fill" />,
      description: 'Compra simples e segura',
      backgroundColor: themeContext['yellow-700'],
    },
    {
      icon: <Package size={16} weight="fill" />,
      description: 'Embalagem mantém o café intacto',
      backgroundColor: themeContext['gray-600'],
    },
    {
      icon: <Timer size={16} weight="fill" />,
      description: 'Entrega rápida e rastreada',
      backgroundColor: themeContext['yellow-500'],
    },
    {
      icon: <Coffee size={16} weight="fill" />,
      description: 'O café chega fresquinho até você',
      backgroundColor: themeContext['purple-500'],
    },
  ]

  return (
    <IntroWrapper>
      <IntroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <DifferentialsWrapper>
          {differentialsList.map((differentialItem) => (
            <DifferentialItem
              key={differentialItem.description}
              backgroundColor={differentialItem.backgroundColor}
            >
              <div>{differentialItem.icon}</div>
              <span>{differentialItem.description}</span>
            </DifferentialItem>
          ))}
        </DifferentialsWrapper>
      </IntroContent>
      <img src={introCoffeeIllustration} alt="" />
    </IntroWrapper>
  )
}
