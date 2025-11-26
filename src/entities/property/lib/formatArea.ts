export function formatArea(area: number): string {
  return new Intl.NumberFormat("de-DE").format(area);
}
