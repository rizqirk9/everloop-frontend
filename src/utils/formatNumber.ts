export function formatNumber(input: number) {
  return new Intl.NumberFormat('id-ID').format(input);
}
