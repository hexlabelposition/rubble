import type { PropertyTypeList } from './types'
import type { LocationPreferenceList } from './types'
import type { BudgetRangeList } from './types'

export const propertyTypeOptions: PropertyTypeList = [
  { key: 'house', value: 'house', title: 'House' },
  { key: 'apartment', value: 'apartment', title: 'Apartment' },
  { key: 'office', value: 'office', title: 'Office' },
  { key: 'shophouse', value: 'shophouse', title: 'Shophouse' },
  { key: 'medical', value: 'medical', title: 'Medical' },
]

export const locationPreferenceOptions: LocationPreferenceList = [
  { key: 'new-york/us', value: 'new-york/us', title: 'New York, US' },
  { key: 'los-angeles/us', value: 'los-angeles/us', title: 'Los Angeles, US' },
  { key: 'chicago/us', value: 'chicago/us', title: 'Chicago, US' },
  { key: 'miami/us', value: 'miami/us', title: 'Miami, US' },
  {
    key: 'san-francisco/us',
    value: 'san-francisco/us',
    title: 'San Francisco, US',
  },
  { key: 'seattle/us', value: 'seattle/us', title: 'Seattle, US' },
]

export const budgetRangeOptions: BudgetRangeList = [
  { key: 'under-50k', value: 'under-50k', title: 'Under $50,000' },
  { key: '50k-100k', value: '50k-100k', title: '$50,000 - $100,000' },
  { key: '100k-200k', value: '100k-200k', title: '$100,000 - $200,000' },
  { key: '200k-500k', value: '200k-500k', title: '$200,000 - $500,000' },
  { key: '500k-1m', value: '500k-1m', title: '$500,000 - $1,000,000' },
  { key: 'over-1m', value: 'over-1m', title: 'Over $1,000,000' },
]
