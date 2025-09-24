import Link from 'next/link'

import { LoginForm } from '@features/login-form'

import { Button } from '@shared/ui'
import { Separator } from '@shared/ui'
import { LogoIcon } from '@shared/ui'
import { GoogleIcon } from '@shared/ui'
import { FacebookIcon } from '@shared/ui'

import { routes } from '@shared/config'

export default function LoginPage() {
  return (
    <main>
      <section className='grid gap-y-14 text-center xl:gap-y-20'>
        <header className='flex flex-col items-center'>
          <Link
            aria-label='Go to home page'
            href={routes.home}
            className='mb-8 xl:mb-12'
          >
            <LogoIcon
              aria-hidden={true}
              width={40}
              height={40}
              className='2xl:size-28'
            />
          </Link>

          <h1 className='mb-4 text-xl font-semibold xl:mb-6 2xl:text-3xl'>
            Hey, Welcome Back!
          </h1>

          <p className='text-secondary-500 text-xs text-balance 2xl:text-base'>
            Please enter your information to log in to your account.
          </p>
        </header>

        <div className='flex flex-col gap-y-6 xl:gap-y-8'>
          <Button
            variant='secondary'
            size='medium'
            className='gap-x-3 text-sm font-semibold 2xl:text-base'
          >
            <GoogleIcon aria-hidden={true} width={24} height={24} />
            Login with Google
          </Button>

          <Button
            variant='secondary'
            size='medium'
            className='gap-x-3 text-sm font-semibold 2xl:text-base'
          >
            <FacebookIcon aria-hidden={true} width={24} height={24} />
            Login with Facebook
          </Button>
        </div>

        <div className='gax-x-4 flex items-center xl:gap-x-8'>
          <Separator className='flex-1' />
          <span className='text-secondary-500 text-xs 2xl:text-base'>Or</span>
          <Separator className='flex-1' />
        </div>

        <div className='flex flex-col gap-y-8 xl:gap-y-14'>
          <LoginForm />

          <p className='text-secondary-500 text-xs 2xl:text-base'>
            Don&apos;t have an account?{' '}
            <Link href={routes.register} className='text-primary-500'>
              Register
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
