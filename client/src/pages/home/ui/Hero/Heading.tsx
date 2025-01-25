import React from 'react'

// Shared - UI
import Typography from '@shared/ui/Typography'

export default function Heading(): React.JSX.Element {
  return (
    <div className="laptop:mb-8 laptop:gap-3 desktop:mb-10 desktop:gap-5 mb-5 flex flex-col items-center gap-2 text-center">
      <Typography tag="h1" className="line-clamp-3 text-balance">
        Discover Your Dream Home Right at Your Fingertips
      </Typography>

      <Typography
        tag="p"
        className="text-xxs text-primary-0 tablet:w-[400px] tablet:whitespace-normal laptop:w-[591px] laptop:text-base w-[256px] text-pretty whitespace-pre"
      >
        {/* Text in quotes and brackets for are support whitespace (\n)  */}
        {
          'With customized searches, we help you find properties that match your desired location, price and type. \nStart the journey to your ideal property!'
        }
      </Typography>
    </div>
  )
}
