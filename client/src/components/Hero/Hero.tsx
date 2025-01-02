import React from 'react'

// UI
import Link from '@/ui/Link'
import Button from '@/ui/Button'
import Container from '@ui/Container'
import Typography from '@/ui/Typography'

const metaTitle = 'Real Estate Property Search and Listings Platform'
const title = 'Discover Your Dream Home Right at Your Fingertips'
const description =
  'With customized searches, we help you find properties that match your desired location, price and type. \nStart the journey to your ideal property!'

export default function Hero(): React.ReactNode {
  return (
    <div className="py-6 laptop:pt-0 desktop:pb-12">
      <Container>
        <div className="bg-hero h-[568px] rounded-[10px] px-3 py-15 laptop:h-[720px] desktop:h-[867px] desktop:py-[100px]">
          <div className="mb-5 flex flex-col items-center gap-2 text-center laptop:mb-8 laptop:gap-3 desktop:mb-10 desktop:gap-5">
            <Typography tag="h1" className="sr-only">
              {metaTitle}
            </Typography>

            <Typography
              tag="p"
              className="w-[303px] text-4xl font-semibold text-primary-0 laptop:w-[620px] laptop:text-6xl desktop:w-[870px] desktop:text-8xl"
            >
              {title}
            </Typography>

            <Typography
              tag="p"
              className="w-[265px] whitespace-pre-wrap text-xxs font-medium text-primary-0 laptop:w-[600px] laptop:whitespace-normal laptop:text-sm desktop:w-[591px] desktop:text-base"
            >
              {description}
            </Typography>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Button className="inline-flex h-9 items-center rounded-lg border border-primary-300 bg-primary-500 px-4 laptop:h-10 desktop:h-12 desktop:px-5">
              <Typography
                tag="span"
                className="text-sm font-semibold text-primary-0 desktop:text-base"
              >
                Get Started
              </Typography>
            </Button>

            <Link
              as="internal"
              to="/blog"
              className="inline-flex h-9 items-center rounded-lg border border-secondary-200 bg-primary-0 px-4 laptop:h-10 desktop:h-12 desktop:px-5"
            >
              <Typography
                tag="span"
                className="text-sm font-semibold text-primary-500 desktop:text-base"
              >
                Watch Demo
              </Typography>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
