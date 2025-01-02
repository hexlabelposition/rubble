import React from 'react'
import { mergeClasses } from '../utils'

import bathIcon from '../assets/icons/bath.svg'
import bedIcon from '../assets/icons/bed.svg'
import buildingsIcon from '../assets/icons/buildings.svg'
import calendarIcon from '../assets/icons/calendar.svg'
import dollarSquareIcon from '../assets/icons/dollar-square.svg'
import locationTickIcon from '../assets/icons/location-tick.svg'
import locationIcon from '../assets/icons/location.svg'
import logoIcon from '../assets/icons/logo.svg'
import maximizeIcon from '../assets/icons/maximize.svg'
import menuIcon from '../assets/icons/menu.svg'
import topRightArrowIcon from '../assets/icons/top-right-arrow.svg'

const icons = {
  bath: bathIcon,
  bed: bedIcon,
  buildings: buildingsIcon,
  calendar: calendarIcon,
  dollarSquare: dollarSquareIcon,
  locationTick: locationTickIcon,
  location: locationIcon,
  logo: logoIcon,
  maximize: maximizeIcon,
  menu: menuIcon,
  'top-right-arrow': topRightArrowIcon,
}

export type IconNames = keyof typeof icons

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: IconNames
  width: number
  height: number
  alt: string
}

export default function Icon({
  name,
  width,
  height,
  src = icons[name],
  alt,
  className,
  ...props
}: IconProps): React.JSX.Element {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={mergeClasses(className)}
      {...props}
    />
  )
}
