import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, MOTION } from '../../lib/motion'

interface TextRevealParagraphProps {
  children: React.ReactNode
  className?: string
  immediate?: boolean
  id?: string
}

export const TextRevealParagraph: React.FC<TextRevealParagraphProps> = ({
  children,
  className = '',
  immediate = false,
  id,
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      const el = paragraphRef.current
      if (!el) return

      const mm = gsap.matchMedia()

      // Desktop: Reveal paragraph as a whole with subtle fade + minimal movement (12-16px)
      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: MOTION.distance.desktopParagraph,
            },
            {
              opacity: 1,
              y: 0,
              duration: MOTION.duration.paragraphEntrance,
              ease: MOTION.ease.smooth,
              scrollTrigger: immediate
                ? undefined
                : {
                    trigger: el,
                    start: 'top 90%',
                    once: true,
                  },
              clearProps: 'transform',
            }
          )
        }
      )

      // Mobile: Basic gentle opacity fade + 6-10px upward, 300-450ms, no stagger, play once
      mm.add(
        '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: MOTION.distance.mobileText,
            },
            {
              opacity: 1,
              y: 0,
              duration: MOTION.duration.mobileTextReveal,
              ease: MOTION.ease.smooth,
              scrollTrigger: immediate
                ? undefined
                : {
                    trigger: el,
                    start: 'top 92%',
                    once: true,
                  },
              clearProps: 'transform',
            }
          )
        }
      )

      // Reduced motion
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(el, { opacity: 1, y: 0 })
      })

      return () => {
        mm.revert()
      }
    },
    { scope: paragraphRef, dependencies: [children, immediate] }
  )

  return (
    <p
      ref={paragraphRef}
      id={id}
      className={`font-body font-light text-[#444444] text-[16.5px] md:text-[18px] leading-[1.68] md:leading-[1.72] text-left max-w-2xl ${className}`}
    >
      {children}
    </p>
  )
}
