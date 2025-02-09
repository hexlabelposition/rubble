import React from 'react'
import { mergeClasses } from '@shared/lib/mergeClasses/mergeClasses'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  width: number | string
  height: number | string
}

const BASE_CLASSES = 'rounded'
const RESPONSIVE_CLASSES = 'laptop:rounded-lg'

export function Image({
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
      className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)}
    />
  )
}
