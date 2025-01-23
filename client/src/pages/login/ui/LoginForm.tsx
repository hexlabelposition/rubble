import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Shared - UI
import Button from '@shared/ui/Button'
import Divider from '@shared/ui/Divider'
import Typography from '@shared/ui/Typography'

export default function LoginForm(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-7 w-full flex flex-col items-center gap-10">
        <div className="grid w-full gap-4">
          <Button className="w-full rounded border border-secondary-200 py-3">
            <Typography tag="span" className="font-semibold">
              Login with Google
            </Typography>
          </Button>

          <Button className="w-full rounded border border-secondary-200 py-3">
            <Typography tag="span" className="font-semibold">
              Login with Facebook
            </Typography>
          </Button>
        </div>

        <Divider>Or</Divider>

        <form className="flex flex-col space-y-4">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <Button className="last:mt-7">Login with Email</Button>
        </form>
      </div>

      <Typography tag="p" className="inline-block">
        Dont’t have an account?{' '}
        <Link to="/register" className="inline-block text-primary-500">
          Register
        </Link>
      </Typography>
    </div>
  )
}
