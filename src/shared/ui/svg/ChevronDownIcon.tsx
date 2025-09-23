import type { SVGProps } from 'react'
const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d='m16.6 7.459-5.433 5.433a1.655 1.655 0 0 1-2.334 0L3.4 7.459'
    />
  </svg>
)
export { ChevronDownIcon }
