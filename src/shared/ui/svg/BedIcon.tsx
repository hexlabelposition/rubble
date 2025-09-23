import type { SVGProps } from 'react'
const BedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeWidth={1.2}
      d='M15.833 16.667v-1.25m-11.666 1.25v-1.25'
    />
    <path
      stroke='currentColor'
      strokeWidth={1.2}
      d='M17.5 10c0-3.142 0-4.714-.977-5.69-.976-.976-2.547-.977-5.69-.977H9.167c-3.143 0-4.714 0-5.69.977S2.5 6.858 2.5 10m-.833 2.5c0-.777 0-1.165.126-1.47a1.67 1.67 0 0 1 .903-.903C3.002 10 3.39 10 4.166 10h11.667c.777 0 1.165 0 1.471.127a1.67 1.67 0 0 1 .903.902c.126.306.126.694.126 1.471s0 1.165-.126 1.47a1.66 1.66 0 0 1-.903.903c-.306.127-.694.127-1.47.127H4.166c-.777 0-1.165 0-1.471-.127a1.67 1.67 0 0 1-.903-.902c-.126-.306-.126-.694-.126-1.471Z'
    />
    <path
      stroke='currentColor'
      strokeWidth={1.2}
      d='M15.417 10V8.75c0-1.572 0-2.357-.489-2.845-.488-.488-1.273-.488-2.844-.488H7.917c-1.572 0-2.357 0-2.845.488-.489.488-.489 1.273-.489 2.845V10M10 5.833V10'
    />
  </svg>
)
export { BedIcon }
