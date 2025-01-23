import React from 'react'

// Shared - UI
import Article from '@shared/ui/Article'
import Image from '@shared/ui/Image'

// Assets
import AboutImage from '@shared/assets/images/about.jpg'

export default function CompleteSolution(): React.JSX.Element {
  return (
    <Article>
      <h3 className="mb-2 font-semibold text-primary-500 desktop:text-2xl">
        Partner for Every Property Need
      </h3>

      <p className="mb-3 text-xs font-medium text-secondary-500 desktop:text-base">
        As a leading property platform, we provide full-service solutions to meet your needs. With
        top properties and dedicated experts, we ensure a seamless experience for buying, selling,
        or renting.
      </p>

      <Image
        src={AboutImage}
        width={295}
        height={220}
        alt="House"
        className="max-h-[388px] min-h-[220px] w-full object-cover"
      />
    </Article>
  )
}
