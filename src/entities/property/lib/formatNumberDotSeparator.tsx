export function formatNumberDotSeparator(value: number): string {
  return new Intl.NumberFormat('de-DE').format(value)
}
