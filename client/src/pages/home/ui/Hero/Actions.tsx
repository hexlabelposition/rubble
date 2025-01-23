import React from 'react'

// Shared
import Link from '@shared/ui/Link'
import Button from '@shared/ui/Button'

export default function Actions(): React.ReactNode {
  return (
    <div className="grid">
      <div className="flex justify-center gap-2">
        <Button apperance="button">Get Started</Button>
        <Link to="/blog" apperance="button">
          Watch Demo
        </Link>
      </div>
    </div>
  )
}
