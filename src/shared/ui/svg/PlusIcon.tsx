import type { SVGProps } from 'react'
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.2}
      d='M10 4.167v11.666M4.167 10h11.667'
    />
  </svg>
)
export { PlusIcon }
