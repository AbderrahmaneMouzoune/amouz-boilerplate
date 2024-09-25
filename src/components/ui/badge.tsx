import { cn } from '@lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border bg-primary text-primary-foreground border border-primary-foreground/10',
        secondary: 'border bg-secondary text-secondary-foreground',
        destructive:
          'bg-destructive text-destructive-foreground border border-destructive-foreground/10',
        outline: 'text-foreground',
        success:
          'bg-success text-success-foreground border border-success-foreground/10',
        warning:
          'bg-warning text-warning-foreground border border-warning-foreground/10',
        info: 'bg-info text-info-foreground border border-info-foreground/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
