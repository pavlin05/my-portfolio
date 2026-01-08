import React from 'react'
import { twMerge } from 'tailwind-merge'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  ...props
}) => (
  <section
    id={id}
    className={twMerge('flex flex-col p-8 md:p-16', className)}
    {...props}
  >
    {children}
  </section>
)

type SectionSeparatorProps = React.HTMLAttributes<HTMLSpanElement>

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(
      'block w-full h-0.5 bg-blue-600 dark:bg-blue-400 mx-auto mt-4',
      className,
    )}
    {...props}
  />
)
