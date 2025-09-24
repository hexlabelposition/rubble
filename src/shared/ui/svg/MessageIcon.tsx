import type { SVGProps } from 'react'
const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d='M7.084 15.833h-.417c-3.333 0-5-.833-5-5V6.667q0-5 5-5h6.667q5 0 5 5v4.166q0 5-5 5h-.417a.85.85 0 0 0-.667.334L11 17.833c-.55.734-1.45.734-2 0l-1.25-1.666c-.133-.184-.441-.334-.666-.334'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M13.33 9.167h.008M9.996 9.167h.008M6.662 9.167h.008'
    />
  </svg>
)
export { MessageIcon }
