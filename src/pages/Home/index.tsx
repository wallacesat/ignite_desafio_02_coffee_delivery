import { CatalogCard } from '../../components/CatalogCard'

import { coffeeList } from './data'
import { HomeIntro } from './HomeIntro'

import { CardsContainer, HomeContainer, HomeMain } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro />
      <HomeMain>
        <h1>Nossos cafés</h1>
        <CardsContainer>
          {coffeeList.map((coffee) => (
            <CatalogCard key={coffee.id} {...coffee} />
          ))}
        </CardsContainer>
      </HomeMain>
    </HomeContainer>
  )
}
