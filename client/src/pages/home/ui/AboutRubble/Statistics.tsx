import React from 'react'
import { Article } from '@shared/ui/Article'

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

export function Statistics(): React.JSX.Element {
  return (
    <ul className="desktop:gap-12 grid grid-cols-[155px_155px] grid-rows-[174px_174px] gap-8">
      {statistics.map(({ title, count }, index: number) => (
        <li key={index}>
          <Article className="flex flex-col justify-between">
            {/* <div className="border-secondary-200 laptop:border-[1.2px] desktop:size-22 grid size-18 place-items-center self-end rounded-full border">
              <TopRightArrowIcon className="desktop:size-12" />
            </div>
            <div className="desktop:gap-10 desktop:max-w-[192px] flex w-full min-w-[123px] flex-col-reverse gap-6">
              <h4 className="text-primary-500 desktop:text-base text-xs font-medium">
                {title}
              </h4>
              <p className="text-primary-500 desktop:text-5xl text-2xl font-medium">
                {count}
              </p>
            </div> */}
          </Article>
        </li>
      ))}
    </ul>
  )
}
