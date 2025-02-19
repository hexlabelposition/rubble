import React from 'react'
import AboutImage from '@shared/assets/images/about.jpg'

export function PartnerForProperty(): React.JSX.Element {
  return (
    <article>
      <h3 className="mb-4">Partner for Every Property Need</h3>

      <p className="desktop:mb-8 mb-6 text-balance">
        As a leading property platform, we provide full-service solutions to
        meet your needs. With top properties and dedicated experts, we ensure a
        seamless experience for buying, selling, or renting.
      </p>

      <img
        src={AboutImage}
        width={295}
        height={220}
        alt="House"
        className="laptop:max-h-[388px] min-h-[220px] w-full object-cover"
      />
    </article>
  )
}
