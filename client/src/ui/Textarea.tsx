import React from 'react'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({
  placeholder,
}: TextareaProps): React.JSX.Element {
  return (
    <textarea
      placeholder={placeholder}
      className="dektop:border-[1.2px] min-h-[80px] w-full resize-none overflow-hidden rounded-lg border border-secondary-200 px-[14px] py-[10px] text-xs font-medium text-primary-500 placeholder:text-secondary-500 desktop:h-[98px] desktop:px-4 desktop:py-3 desktop:text-base"
    />
  )
}
