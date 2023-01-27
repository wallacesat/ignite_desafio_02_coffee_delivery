export function formatBRLCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: 'BRL',
  }).format(value)
}

export function cepFormatter(value: string) {
  let formattedValue = value.replace(/\D/g, '')

  if (value) {
    formattedValue = formattedValue.replace(/^(\d{5})(\d)/, '$1-$2').slice(0, 9)
  }

  return formattedValue
}

export function ufFormatter(value: string) {
  let formattedValue = value.replace(/\D/g, '')

  if (value) {
    formattedValue = value.toUpperCase().slice(0, 2)
  }

  return formattedValue
}
