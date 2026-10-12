import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, MOTION } from '../../lib/motion'

interface PageTransitionProps {
  children: React.ReactNode
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()
  const pageContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to top on route change with standard browser behavior
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  useGSAP(
    () => {
      const el = pageContainerRef.current
      if (!el) return

      const mm = gsap.matchMedia()

      // Desktop: short fade (250-350ms) + small vertical movement (12-16px) for inner pages.
      // Homepage hero manages its own master entrance sequence directly to avoid double-fading.
      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          if (location.pathname === '/') {
            gsap.set(el, { opacity: 1, y: 0 })
            return
          }

          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 14,
            },
            {
              opacity: 1,
              y: 0,
              duration: MOTION.duration.pageEnter,
              ease: MOTION.ease.smooth,
              clearProps: 'transform',
            }
          )
        }
      )

      // Mobile & Reduced Motion: instantaneous transition (per mobile animation rules)
      mm.add(
        '(max-width: 767px), (prefers-reduced-motion: reduce)',
        () => {
          gsap.set(el, { opacity: 1, y: 0 })
        }
      )

      return () => {
        mm.revert()
      }
    },
    { scope: pageContainerRef, dependencies: [location.pathname] }
  )

  return (
    <div ref={pageContainerRef} className="w-full min-h-[calc(100vh-80px)]">
      {children}
    </div>
  )
}
