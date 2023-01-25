import * as React from 'react'
import { ThemeContext } from 'styled-components'
import { IconProps } from 'phosphor-react'

import { Wrapper, Description, IconWrapper } from './styles'

interface DeliveryDescriptionProps {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  backgroundIconColor: 'yellow' | 'yellow-dark' | 'purple'
  title: string
  titleComplement?: string
  children: React.ReactNode
}

export function DeliveryDescription({
  icon: Icon,
  title,
  titleComplement,
  children,
  backgroundIconColor,
}: DeliveryDescriptionProps) {
  const themeContext = React.useContext(ThemeContext)

  const iconWrapperColor = {
    yellow: themeContext['yellow-500'],
    'yellow-dark': themeContext['yellow-700'],
    purple: themeContext['purple-500'],
  }

  return (
    <Wrapper>
      <IconWrapper backgroundColor={iconWrapperColor[backgroundIconColor]}>
        {<Icon size={16} weight="fill" />}
      </IconWrapper>
      <Description>
        <span>
          {title} <strong>{titleComplement}</strong>
        </span>
        <span>
          <strong>{children}</strong>
        </span>
      </Description>
    </Wrapper>
  )
}
