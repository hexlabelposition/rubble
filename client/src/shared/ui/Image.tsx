import React from 'react'

// Utils
import { mergeClasses } from '@shared/utils'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  width: number
  height: number
}

const BASE_CLASSES = 'block rounded'
const RESPONSIVE_CLASSES = 'desktop:rounded-xl'

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
      className={mergeClasses(BASE_CLASSES, RESPONSIVE_CLASSES, className)}
    />
  )
}
