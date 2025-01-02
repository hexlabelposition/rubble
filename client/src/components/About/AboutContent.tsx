import React from 'react'

// UI
import Article from '@ui/Article'
import Typography from '@ui/Typography'
import Icon from '@ui/Icon'

const statistics = [
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

export default function AboutContent(): React.ReactNode {
  return (
    <div className="grid gap-4 laptop:grid-cols-[minmax(auto,816px)_auto] desktop:gap-6">
      <Article>
        <Typography
          tag="h3"
          className="mb-2 font-semibold text-primary-500 desktop:text-2xl"
        >
          Partner for Every Property Need
        </Typography>

        <Typography
          tag="p"
          className="mb-3 text-xs font-medium text-secondary-500 desktop:text-base"
        >
          As a leading property platform, we provide full-service solutions to
          meet your needs. With top properties and dedicated experts, we ensure
          a seamless experience for buying, selling, or renting.
        </Typography>

        <img
          src="./src/assets/images/about.jpg"
          width={295}
          height={220}
          alt="House"
          className="max-h-[388px] min-h-[220px] w-full rounded-[10px] object-cover desktop:rounded-xl"
        />
      </Article>

      <ul className="grid grid-cols-2 grid-rows-2 gap-4 desktop:gap-6">
        {statistics.map((statistic) => (
          <li key={statistic.title}>
            <StatisticCard title={statistic.title} count={statistic.count} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function StatisticCard({
  title,
  count,
}: {
  title: string
  count: string
}): React.ReactNode {
  return (
    <div className="flex max-h-[258px] min-h-[174px] flex-col justify-between rounded-xl border border-secondary-200 p-4 laptop:h-full">
      <div className="flex aspect-square h-9 items-center justify-center self-end rounded-full border border-secondary-200 desktop:h-11">
        <Icon
          name="top-right-arrow"
          width={16}
          height={16}
          alt="Top left arrow icon"
          className="desktop:h-6 desktop:w-6"
        />
      </div>
      <div className="flex flex-col-reverse gap-3 desktop:gap-5">
        <Typography
          tag="h4"
          className="text-xs font-medium text-primary-500 desktop:text-base"
        >
          {title}
        </Typography>
        <Typography
          tag="p"
          className="text-2xl font-medium text-primary-500 desktop:text-5xl"
        >
          {count}
        </Typography>
      </div>
    </div>
  )
}
