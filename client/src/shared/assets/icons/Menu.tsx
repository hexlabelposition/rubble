import React from 'react'

type MenuProps = React.SVGProps<SVGSVGElement>

export default function Menu({
  xmlns = 'http://www.w3.org/2000/svg',
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  version = '1.0',
  className,
  ...props
}: MenuProps): React.JSX.Element {
  return (
    <svg
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      version={version}
      className={className}
      {...props}
    >
      <path
        d="M3 7H21"
        stroke="#292929"
        style={{ stroke: '#292929', strokeOpacity: 1 }}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        stroke="#292929"
        style={{ stroke: '#292929', strokeOpacity: 1 }}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke="#292929"
        style={{ stroke: '#292929', strokeOpacity: 1 }}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
