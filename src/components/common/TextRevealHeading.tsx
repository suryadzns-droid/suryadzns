import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText, whenFontsReady, MOTION } from '../../lib/motion'

interface TextRevealHeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  immediate?: boolean // if true, runs immediately without ScrollTrigger (for above-the-fold heroes)
  id?: string
}

export const TextRevealHeading: React.FC<TextRevealHeadingProps> = ({
  children,
  as: Component = 'h1',
  className = '',
  immediate = false,
  id,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const textContent = typeof children === 'string' ? children : undefined

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const mm = gsap.matchMedia()

      // Desktop animation: Line-by-line reveal using SplitText
      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          let split: SplitText | null = null

          whenFontsReady().then(() => {
            if (!el) return

            try {
              split = new SplitText(el, {
                type: 'lines',
                linesClass: 'split-line-child',
              })

              // Wrap each line in an overflow-hidden mask
              split.lines.forEach((line) => {
                const wrapper = document.createElement('span')
                wrapper.className = 'split-line-wrapper'
                line.parentNode?.insertBefore(wrapper, line)
                wrapper.appendChild(line)
              })

              const tl = gsap.timeline({
                scrollTrigger: immediate
                  ? undefined
                  : {
                      trigger: el,
                      start: 'top 88%',
                      once: true,
                    },
              })

              tl.fromTo(
                split.lines,
                {
                  y: MOTION.distance.desktopHeadingLine,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: MOTION.duration.headingLine,
                  stagger: MOTION.stagger.headingLines,
                  ease: MOTION.ease.out,
                  clearProps: 'transform',
                }
              )
            } catch (err) {
              // Graceful fallback: reveal element directly if SplitText encounters an error
              gsap.fromTo(
                el,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: MOTION.ease.out }
              )
            }
          })

          return () => {
            if (split) {
              split.revert()
            }
          }
        }
      )

      // Mobile animation: Basic gentle opacity fade + 6-10px upward, no stagger, play once
      mm.add(
        '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.fromTo(
            el,
            {
              y: MOTION.distance.mobileText,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
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

      // Reduced motion: instantaneous appearance
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(el, { opacity: 1, y: 0 })
      })

      return () => {
        mm.revert()
      }
    },
    { scope: containerRef, dependencies: [children, immediate] }
  )

  return (
    <Component
      ref={containerRef}
      id={id}
      aria-label={textContent}
      className={`font-heading font-light tracking-[-0.028em] text-[#111111] ${className}`}
    >
      {children}
    </Component>
  )
}
