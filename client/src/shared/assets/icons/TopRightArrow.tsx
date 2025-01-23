import React from 'react'

type TopRightArrowProps = React.SVGProps<SVGSVGElement>

export default function TopRightArrow({
  xmlns = 'http://www.w3.org/2000/svg',
  width = 16,
  height = 16,
  viewBox = '0 0 16 16',
  fill = 'none',
  version = '1.0',
  className,
  ...props
}: TopRightArrowProps): React.JSX.Element {
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
        d="M4.66675 11.3333L11.3334 4.66663"
        stroke="#292929"
        style={{ stroke: '#292929', strokeOpacity: 1 }}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66675 4.66663H11.3334V11.3333"
        stroke="#292929"
        style={{
          stroke: '#292929',
          strokeOpacity: 1,
        }}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
