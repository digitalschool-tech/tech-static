"use client"

import React from 'react'
import clsx from 'clsx'

type DSButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'subtle'
  as?: 'button' | 'a'
  href?: string
}

export function DSButton({ variant = 'primary', as = 'button', href, className, children, ...props }: DSButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-blueLight disabled:opacity-50 disabled:pointer-events-none'
  const variants: Record<string, string> = {
    primary: 'bg-ds-blue text-white hover:bg-[#040B40]',
    outline: 'border border-gray-200 bg-white text-ds-blue hover:border-gray-300',
    subtle: 'bg-white/70 text-ds-blue border border-gray-200 hover:bg-white'
  }

  const classes = clsx(base, variants[variant], className)

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default DSButton


