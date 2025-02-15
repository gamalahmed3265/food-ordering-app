export const formatCurrency = (number: number, egypt: boolean = false) => {
  const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });
  const EGYPT_CURRENCY_FORMATTER = new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
  });
  return egypt
    ? EGYPT_CURRENCY_FORMATTER.format(number)
    : CURRENCY_FORMATTER.format(number);
};
