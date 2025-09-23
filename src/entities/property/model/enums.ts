export const PROPERTY_TYPES = [
  'house',
  'apartment',
  'office',
  'shophouse',
  'medical',
] as const

export type PropertyType = (typeof PROPERTY_TYPES)[number]

export const BUDGET_RANGES = [
  'under-50k',
  '50k-100k',
  '100k-200k',
  '200k-500k',
  '500k-1m',
  'over-1m',
] as const

export type BudgetRangeType = (typeof BUDGET_RANGES)[number]

export const LOCATION_PREFERENCES = [
  'new-york/us',
  'los-angeles/us',
  'chicago/us',
  'miami/us',
  'san-francisco/us',
  'seattle/us',
] as const

export type LocationPreferenceType = (typeof LOCATION_PREFERENCES)[number]
