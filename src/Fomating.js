export const usdFomating = number => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting',
    minimumFractionDigits: 2,
  }).format(number);
};
