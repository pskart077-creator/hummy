export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatDiscount(oldPrice: number, price: number) {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}
