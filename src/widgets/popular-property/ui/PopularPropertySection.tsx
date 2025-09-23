import Link from 'next/link'

import { PropertyArticle } from '@entities/property'
import type { PropertyList } from '@entities/property'

import { Section } from '@shared/ui'
import { routes } from '@shared/config'

interface PopularPropertySectionProps {
  properties: PropertyList
}

export const PopularPropertySection = ({
  properties,
}: PopularPropertySectionProps) => {
  return (
    <Section.Root>
      <Section.Header>
        <Section.Label>Popular Property</Section.Label>
        <Section.Title>Explore Diverse Property Listings</Section.Title>
        <Section.Description>
          Discover properties for every need, from cozy homes to luxury estates.
        </Section.Description>
      </Section.Header>

      <Section.Body>
        <ul className='grid gap-8 lg:grid-cols-3 xl:gap-12'>
          {properties.map((property) => (
            <li key={property.id}>
              <Link href={routes.propertyDetail(property.id)}>
                <PropertyArticle {...property} />
              </Link>
            </li>
          ))}
        </ul>
      </Section.Body>
    </Section.Root>
  )
}
