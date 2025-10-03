import type { Key } from 'react'

interface StatisticItem {
  key: Key
  title: string
  count: number
}

type StatisticList = Array<StatisticItem>

export const statistics: StatisticList = [
  {
    key: 'properties-available',
    title: 'Properties Available',
    count: 800,
  },
  {
    key: 'satisfied-customers',
    title: 'Satisfied Customer',
    count: 460,
  },
  {
    key: 'total-partners',
    title: 'Total Partners',
    count: 280,
  },
  {
    key: 'awards-winning',
    title: 'Awards Winning',
    count: 120,
  },
]
