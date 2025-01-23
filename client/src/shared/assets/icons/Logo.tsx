import React from 'react'

type LogoProps = React.SVGProps<SVGSVGElement>

export default function Logo({
  xmlns = 'http://www.w3.org/2000/svg',
  width = 36,
  height = 36,
  viewBox = '0 0 36 36',
  fill = 'none',
  version = '1.0',
  className,
  ...props
}: LogoProps): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      version={version}
      className={className}
      {...props}
    >
      <rect
        x="0.486"
        y="0.486"
        width="35.027"
        height="35.027"
        rx="7.784"
        fill="#292929"
        stroke="#A4A4A4"
        strokeWidth="0.973"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.732 10.232a0.8 0.8 0 0 0-1.131 0l-3.601 3.601v-3.367a0.8 0.8 0 0 0-0.8-0.8h-3.035a0.8 0.8 0 0 0-0.566 0.234l-3.367 3.367a0.8 0.8 0 0 0 0 1.131l3.601 3.601h-3.367a0.8 0.8 0 0 0-0.8 0.8v3.035a0.8 0.8 0 0 0 0.234 0.566l3.367 3.367a0.8 0.8 0 0 0 1.131 0l3.601-3.601v3.367a0.8 0.8 0 0 0 0.8 0.8h3.035a0.8 0.8 0 0 0 0.566-0.234l3.367-3.367a0.8 0.8 0 0 0 0-1.131l-3.601-3.601h3.367a0.8 0.8 0 0 0 0.8-0.8v-3.035a0.8 0.8 0 0 0-0.234-0.566zm-0.566 7.768l-4.167 4.167-4.167-4.167 4.167-4.167z"
        fill="#FFFFFF"
      />
    </svg>
  )
}
