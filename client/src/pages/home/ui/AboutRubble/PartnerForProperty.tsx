import React from 'react'
import { Image } from '@shared/ui/Image'
import { Article } from '@shared/ui/Article'
import { Typography } from '@shared/ui/Typography'

import AboutImage from '@shared/assets/images/about.jpg'

export function PartnerForProperty(): React.JSX.Element {
  return (
    <Article>
      <Typography tag="h3" className="mb-4">
        Partner for Every Property Need
      </Typography>

      <Typography tag="p" className="desktop:mb-8 mb-6 text-balance">
        As a leading property platform, we provide full-service solutions to
        meet your needs. With top properties and dedicated experts, we ensure a
        seamless experience for buying, selling, or renting.
      </Typography>

      <Image
        src={AboutImage}
        width={295}
        height={220}
        alt="House"
        className="laptop:max-h-[388px] min-h-[220px] w-full object-cover"
      />
    </Article>
  )
}
