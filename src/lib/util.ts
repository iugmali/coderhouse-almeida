export const formatCurrency = (amount: number) => {
  return `R$ ${(amount/100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}
