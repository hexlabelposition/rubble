import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  width: number | string
  height: number | string
}

export default function Image({
  src,
  alt = '',
  width,
  height,
  className,
}: ImageProps): React.JSX.Element {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      aria-hidden={!alt}
      className={className}
    />
  )
}
