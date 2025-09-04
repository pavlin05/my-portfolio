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
    className={twMerge(
      'flex flex-col px-16 py-16 md:min-h-[100dvh] max-w-screen-lg ',
      className,
    )}
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
