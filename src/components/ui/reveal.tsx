'use client'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { useInView } from 'react-intersection-observer'
import { cn } from '@lib/utils'
import { useMemo } from 'react'

type AnimationPossible =
  | 'fade-in'
  | 'slide-in-right'
  | 'slide-in-left'
  | 'slide-in-top'
  | 'slide-in-bottom'
  | 'zoom-in'
  | 'scale-x'

interface RevealProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  animations?: AnimationPossible[] | AnimationPossible
  triggerOnce?: boolean
  threshold?: number
  timeout?: number
  duration?: number
  delay?: number
  asChild?: boolean
}

const Reveal = ({
  className,
  animations = ['fade-in', 'slide-in-top'],
  asChild = true,
  triggerOnce = true,
  threshold = 0.3,
  delay,
  timeout,
  duration,
  style,
  ...props
}: RevealProps) => {
  const Comp = asChild ? Slot : 'div'

  const fx = useMemo(() => {
    return {
      fadeIn: animations.includes('fade-in'),
      slideInRight: animations.includes('slide-in-right'),
      slideInLeft: animations.includes('slide-in-left'),
      slideInTop: animations.includes('slide-in-top'),
      slideInBottom: animations.includes('slide-in-bottom'),
      zoomIn: animations.includes('zoom-in'),
      scaleX: animations.includes('scale-x'),
    }
  }, [animations])

  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    delay: timeout,
  })

  const computedStyle = useMemo(
    () => ({
      transitionDelay: delay ? `${delay}ms` : undefined,
      transitionDuration: duration ? `${duration}ms` : undefined,
      ...style,
    }),
    [delay, duration, style],
  )

  return (
    <Comp
      ref={ref}
      className={cn(
        'transition-all',
        {
          'origin-left': fx.scaleX,
          'duration-1000': duration === undefined,
        },
        !inView && {
          'opacity-0': fx.fadeIn,
          '-translate-x-10': fx.slideInRight,
          'translate-x-10': fx.slideInLeft,
          'translate-y-5': fx.slideInTop,
          '-translate-y-5': fx.slideInBottom,
          'scale-50': fx.zoomIn,
          'scale-x-0': fx.scaleX,
        },
        className,
      )}
      style={computedStyle}
      {...props}
    />
  )
}

export { Reveal }
