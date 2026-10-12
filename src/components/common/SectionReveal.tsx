import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, MOTION } from '../../lib/motion'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  id?: string
  tag?: 'section' | 'div' | 'article'
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  id,
  tag: Component = 'section',
}) => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = sectionRef.current
      if (!el) return

      const mm = gsap.matchMedia()

      // Desktop: subtle movement (16-28px) and opacity, entrance plays once
      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: MOTION.distance.desktopSection,
            },
            {
              opacity: 1,
              y: 0,
              duration: MOTION.duration.sectionEntrance,
              ease: MOTION.ease.out,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true, // Do not repeatedly hide and reveal content
              },
              clearProps: 'transform',
            }
          )
        }
      )

      // Mobile: strictly NO section movement. Renders naturally without waiting for animation.
      mm.add(
        '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.set(el, { opacity: 1, y: 0 })
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
    { scope: sectionRef, dependencies: [children] }
  )

  return (
    <Component ref={sectionRef as any} id={id} className={className}>
      {children}
    </Component>
  )
}
