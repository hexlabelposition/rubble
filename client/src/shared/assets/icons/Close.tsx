import React from 'react'

type CloseProps = React.SVGProps<SVGSVGElement>

export default function Close({
  xmlns = 'http://www.w3.org/2000/svg',
  width = 24,
  height = 24,
  viewBox = '3 3 18 18',
  fill = 'none',
  version = '1.0',
  stroke = 'currentColor',
  strokeWidth = 1,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  className,
  ...props
}: CloseProps): React.JSX.Element {
  return (
    <svg
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      version={version}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      className={className}
      {...props}
    >
      <path stroke="#292929" d="M18 6 6 18" />
      <path stroke="#292929" d="m6 6 12 12" />
    </svg>
  )
}
