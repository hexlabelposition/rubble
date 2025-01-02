import React from 'react'

// UI
import Article from '@ui/Article'
import Icon from '@/ui/Icon'
import Typography from '@ui/Typography'

type Processes = {
  id: number
  number: string
  icon:
    | 'buildings'
    | 'calendar'
    | 'bath'
    | 'bed'
    | 'dollarSquare'
    | 'locationTick'
    | 'location'
    | 'logo'
    | 'maximize'
    | 'menu'
    | 'top-right-arrow'
  title: string
  description: string
}

const processes: Processes[] = [
  {
    id: 1,
    number: '01',
    icon: 'buildings',
    title: 'Discover Property',
    description:
      'Find a wide selection of properties that perfectly suit your needs and preferences.\nBrowse a comprehensive list of properties that offer detailed information.',
  },
  {
    id: 2,
    number: '02',
    icon: 'calendar',
    title: 'Schedule Visit',
    description:
      'Once you find a property of interest, schedule a visit at your convenience. Choose a date and time, and our team will ensure a smooth viewing experience.',
  },
  {
    id: 3,
    number: '03',
    icon: 'locationTick',
    title: 'Property Visit',
    description:
      'Visit, explore the neighborhood, and ensure every detail meets your expectations. Our team will be on hand to answer questions and provide information.',
  },
  {
    id: 4,
    number: '04',
    icon: 'dollarSquare',
    title: 'Finalize The Deal',
    description:
      "After the visit, if you're ready, we'll guide you through a secure transaction, handling everything from negotiation to paperwork until you're the official owner.",
  },
]

export default function ProcessList(): React.ReactNode {
  return (
    <ul className="latop:gap-5 grid gap-4 laptop:grid-cols-2 laptop:grid-rows-2 desktop:gap-6">
      {processes.map(({ id, icon, number, title, description }: Processes) => (
        <li key={id}>
          <Article className="desktop:h-full">
            <div className="mb-10 flex items-center justify-between laptop:mb-[50px]">
              <div className="flex aspect-square h-10 items-center justify-center rounded-lg border border-secondary-200 laptop:h-12">
                <Icon
                  name={icon}
                  width={20}
                  height={20}
                  alt="Icon"
                  className="laptop:h-6 laptop:w-6"
                />
              </div>

              <Typography
                tag="span"
                className="text-lg font-semibold text-primary-500 laptop:text-2xl"
              >
                {number}
              </Typography>
            </div>

            <div>
              <Typography
                tag="h3"
                className="mb-2 text-base font-semibold text-primary-500 laptop:text-2xl"
              >
                {title}
              </Typography>
              <Typography
                tag="p"
                className="whitespace-pre-wrap text-xs font-medium text-secondary-500 laptop:whitespace-normal laptop:text-base"
              >
                {description}
              </Typography>
            </div>
          </Article>
        </li>
      ))}
    </ul>
  )
}
