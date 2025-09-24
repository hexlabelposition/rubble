import Link from 'next/link'

import { RegisterForm } from '@features/register-form'

import { Separator } from '@shared/ui'
import { LogoIcon } from '@shared/ui'
import { Button } from '@shared/ui'
import { GoogleIcon } from '@shared/ui'
import { FacebookIcon } from '@shared/ui'

import { routes } from '@shared/config'

export default function RegisterPage() {
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
            Register Your Account
          </h1>

          <p className='text-secondary-500 text-xs text-balance 2xl:text-base'>
            Please enter your details to register your account.
          </p>
        </header>

        <div className='flex flex-col gap-y-6 xl:gap-y-8'>
          <Button
            variant='secondary'
            size='medium'
            className='gap-x-3 text-sm font-semibold 2xl:min-h-24 2xl:text-base'
          >
            <GoogleIcon aria-hidden={true} width={24} height={24} />
            Register with Google
          </Button>

          <Button
            variant='secondary'
            size='medium'
            className='gap-x-3 text-sm font-semibold 2xl:min-h-24 2xl:text-base'
          >
            <FacebookIcon aria-hidden={true} width={24} height={24} />
            Register with Facebook
          </Button>
        </div>

        <div className='gax-x-4 flex items-center xl:gap-x-8'>
          <Separator className='flex-1' />
          <span className='text-secondary-500 text-xs 2xl:text-base'>Or</span>
          <Separator className='flex-1' />
        </div>

        <div className='flex flex-col gap-y-8 xl:gap-y-14'>
          <RegisterForm />

          <p className='text-secondary-500 text-xs 2xl:text-base'>
            Already have an account?{' '}
            <Link href={routes.login} className='text-primary-500'>
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
