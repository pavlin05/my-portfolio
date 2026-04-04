import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const typography = tv({
  base: '',
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-medium',
      p: 'text-base',
      span: 'text-sm',
    },
    bold: {
      true: 'font-bold',
      false: 'font-normal',
    },
    textColor: {
      default: 'text-gray-800 dark:text-gray-400',
      primary: 'text-blue-600',
      secondary: 'text-purple-600',
      success: 'text-green-600',
      error: 'text-red-600',
      white: 'text-white',
      black: 'text-black',
    },
  },
  defaultVariants: {
    variant: 'p',
    bold: false,
    textColor: 'default',
  },
})

type TypographyVariants = VariantProps<typeof typography>

interface TypographyProps
  extends Omit<TypographyVariants, 'color'>, React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  children: React.ReactNode
  textColor?: TypographyVariants['textColor']
}

const Typography: React.FC<TypographyProps> = ({
  as,
  variant,
  bold,
  textColor,
  className,
  children,
  ...props
}) => {
  const Component = as || (variant as React.ElementType) || 'p'

  return (
    <Component
      className={twMerge(typography({ variant, bold, textColor }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
