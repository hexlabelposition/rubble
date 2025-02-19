import React from 'react'
import { Link } from '@shared/ui/Link'

export function Legal(): React.JSX.Element {
  return (
    <div className="tablet:flex-row tablet:justify-between flex flex-col-reverse justify-center gap-8">
      <p>© Rubble 2024, All Rights Reserved.</p>
      <p>
        <Link to="/policy">Privacy Policy & Terms of Use</Link>
      </p>
    </div>
  )
}
