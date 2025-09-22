import type { SVGProps } from 'react'
const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 36 36'
    {...props}
  >
    <rect width={36} height={36} fill='#292929' rx={8} />
    <rect width={35} height={35} x={0.5} y={0.5} stroke='#A4A4A4' rx={7} />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M22.604 10.442a.78.78 0 0 0-1.1 0L18 13.946V10.67a.78.78 0 0 0-.778-.778h-2.954a.78.78 0 0 0-.55.228l-3.276 3.276a.78.78 0 0 0 0 1.1L13.946 18H10.67a.78.78 0 0 0-.778.778v2.954c0 .206.082.404.228.55l3.276 3.276a.78.78 0 0 0 1.1 0L18 22.054v3.276c0 .43.349.778.778.778h2.954a.78.78 0 0 0 .55-.228l3.276-3.276a.78.78 0 0 0 0-1.1L22.054 18h3.276c.43 0 .778-.348.778-.778v-2.954a.78.78 0 0 0-.228-.55ZM22.054 18 18 22.054 13.946 18 18 13.946Z'
      clipRule='evenodd'
    />
  </svg>
)
export { LogoIcon }
