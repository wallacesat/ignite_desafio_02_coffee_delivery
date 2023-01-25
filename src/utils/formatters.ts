export function formatBRLCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: 'BRL',
  }).format(value)
}
