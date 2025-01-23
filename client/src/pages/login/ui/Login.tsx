import React from 'react'

// Subcomponents
import LoginHeading from './LoginHeading'
import LoginForm from './LoginForm'

export default function Login(): React.JSX.Element {
  return (
    <div className="grid gap-10 desktop:w-[508px]">
      <LoginHeading />
      <LoginForm />
    </div>
  )
}
