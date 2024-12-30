import React from 'react'

import Link from '../../ui/Link'
import Typography from '../../ui/Typography'

export default function FooterLegal(): React.JSX.Element {
  return (
    <ul className="flex flex-col justify-center gap-4 tablet:flex-row-reverse tablet:justify-between">
      <li>
        <Link as="internal" to="/policy">
          <Typography
            tag="span"
            className="text-xs font-medium text-secondary-500 desktop:text-base"
          >
            Privacy Policy & Terms Of Use
          </Typography>
        </Link>
      </li>

      <li>
        <Link as="internal" to="/copyright">
          <Typography
            tag="span"
            className="text-xs font-medium text-secondary-500 desktop:text-base"
          >
            &copy; Rubble 2024, All Rights Reserved.
          </Typography>
        </Link>
      </li>
    </ul>
  )
}
