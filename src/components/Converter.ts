export function calculateMarkupPercentage(finalPrice: number, discountPercentage: number): number {
  let originalPrice = finalPrice / (1 - discountPercentage / 100);
  let markupPercentage = ((originalPrice - finalPrice) / finalPrice) * 100;
  return Number(markupPercentage.toFixed(2));
}

