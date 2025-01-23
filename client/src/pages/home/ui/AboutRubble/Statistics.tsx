import React from 'react'

// Shared - UI
import TopRightArrowIcon from '@shared/assets/icons/TopRightArrow'

interface Statistic {
  title: string
  count: string
}

const statistics: Statistic[] = [
  {
    count: '800+',
    title: 'Properties Available',
  },
  {
    count: '460+',
    title: 'Satisfied Customer',
  },
  {
    count: '280+',
    title: 'Total Partners',
  },
  {
    count: '120+',
    title: 'Awards Winning',
  },
]

export default function Statistics(): React.JSX.Element {
  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-4 desktop:gap-6">
      {statistics.map(({ title, count }, index: number) => (
        <li key={index}>
          <div className="flex max-h-[258px] min-h-[174px] flex-col justify-between rounded-xl border border-secondary-200 p-4 laptop:h-full">
            <div className="flex aspect-square h-9 items-center justify-center self-end rounded-full border border-secondary-200 desktop:h-11">
              <TopRightArrowIcon className="desktop:h-6 desktop:w-6" />
            </div>
            <div className="flex flex-col-reverse gap-3 desktop:gap-5">
              <h4 className="text-xs font-medium text-primary-500 desktop:text-base">{title}</h4>
              <p className="text-2xl font-medium text-primary-500 desktop:text-5xl">{count}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
