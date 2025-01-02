import React from 'react'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export default function Image({
  src,
  width,
  height,
  alt,
}: ImageProps): React.ReactNode {
  return <img src={src} width={width} height={height} alt={alt} />
}
