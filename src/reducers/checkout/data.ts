import expresso from '../../assets/coffeeImages/expresso.svg'
import americano from '../../assets/coffeeImages/americano.svg'
import cremoso from '../../assets/coffeeImages/cremoso.svg'
import gelado from '../../assets/coffeeImages/gelado.svg'
import comLeite from '../../assets/coffeeImages/com-leite.svg'
import latte from '../../assets/coffeeImages/latte.svg'
import capuccino from '../../assets/coffeeImages/capuccino.svg'
import macchiato from '../../assets/coffeeImages/macchiato.svg'
import mochaccino from '../../assets/coffeeImages/mochaccino.svg'
import chocolateQuente from '../../assets/coffeeImages/chocolate-quente.svg'
import cubano from '../../assets/coffeeImages/cubano.svg'
import havaiano from '../../assets/coffeeImages/havaiano.svg'
import arabe from '../../assets/coffeeImages/arabe.svg'
import irlandes from '../../assets/coffeeImages/irlandes.svg'

import { CartItem } from './reducers'

export const catalog: CartItem[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['Tradicional'],
    imgUrl: expresso,
    amount: 1,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['Tradicional'],
    imgUrl: americano,
    amount: 1,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['Tradicional'],
    imgUrl: cremoso,
    amount: 1,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
    imgUrl: gelado,
    amount: 1,
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imgUrl: comLeite,
    amount: 1,
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imgUrl: latte,
    amount: 1,
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imgUrl: capuccino,
    amount: 1,
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imgUrl: macchiato,
    amount: 1,
  },
  {
    id: 9,
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imgUrl: mochaccino,
    amount: 1,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['Especial', 'Com leite'],
    imgUrl: chocolateQuente,
    amount: 1,
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    imgUrl: cubano,
    amount: 1,
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['Especial'],
    imgUrl: havaiano,
    amount: 1,
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['Especial'],
    imgUrl: arabe,
    amount: 1,
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
    imgUrl: irlandes,
    amount: 1,
  },
]
