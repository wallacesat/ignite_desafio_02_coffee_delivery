import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { AddressDescriptionContainer, AddressTitleContainer } from './styles'

interface SectionHeaderProps {
  title: string
  subtitle: string
  icon: 'map-pin-line' | 'currency-dollar'
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  const iconColor = {
    'map-pin-line': 'yellow',
    'currency-dollar': 'purple',
  }

  return (
    <AddressTitleContainer iconColor={iconColor[icon]}>
      {icon === 'map-pin-line' ? (
        <MapPinLine size={22} />
      ) : (
        <CurrencyDollar size={22} />
      )}
      <AddressDescriptionContainer>
        <h5>{title}</h5>
        <span>{subtitle}</span>
      </AddressDescriptionContainer>
    </AddressTitleContainer>
  )
}
