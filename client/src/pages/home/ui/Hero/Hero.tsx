import React from 'react'
import { Container } from '@shared/ui/Container'

export function Hero(): React.JSX.Element {
  return (
    <div className="laptop:pt-0 desktop:pb-12 py-6">
      <Container>
        <div className="bg-hero tablet:h-[668px] tablet:rounded-md laptop:h-[720px] laptop:rounded-lg desktop:h-[867px] desktop:rounded-xl desktop:py-26 h-[568px] rounded px-3 py-15">
          <div className="laptop:mb-8 laptop:gap-3 desktop:mb-10 desktop:gap-5 mb-5 flex flex-col items-center gap-2 text-center">
            {/* <Typography tag="h1" className="line-clamp-3 text-balance">
              Discover Your Dream Home Right at Your Fingertips
            </Typography> */}

            {/* <Typography
              tag="p"
              className="text-xxs text-primary-0 tablet:w-[400px] tablet:whitespace-normal laptop:w-[591px] laptop:text-base w-[256px] whitespace-pre"
            >
              With customized searches, we help you find properties that match
              your desired location, price and type. Start the journey to your
              ideal property!
            </Typography> */}
          </div>

          <div className="grid">
            <div className="flex justify-center gap-2">
              {/* <button>Get Started</button> */}
              {/* <Link to="/blog">Watch Demo</Link> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
