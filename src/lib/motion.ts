import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// Register GSAP plugins globally once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

/**
 * Core Motion Constants & Easing curves
 * Designed for a calm, confident, and contemporary aesthetic
 */
export const MOTION = {
  ease: {
    out: 'power3.out',
    smooth: 'power2.out',
    subtle: 'sine.out',
  },
  duration: {
    pageExit: 0.28,
    pageEnter: 0.36,
    sectionEntrance: 0.65,
    headingLine: 0.75,
    paragraphEntrance: 0.55,
    mobileTextReveal: 0.38,
  },
  stagger: {
    headingLines: 0.08,
    sectionElements: 0.1,
  },
  distance: {
    desktopSection: 24, // 16-32px travel distance
    desktopHeadingLine: 28,
    desktopParagraph: 14,
    mobileText: 8, // 6-10px travel distance
  },
} as const

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Helper to ensure web fonts are ready before running SplitText
 */
export const whenFontsReady = async (): Promise<void> => {
  if (typeof document !== 'undefined' && 'fonts' in document) {
    try {
      await document.fonts.ready
    } catch {
      // Fallback if document.fonts fails
    }
  }
}

/**
 * Creates responsive GSAP matchMedia instance respecting:
 * 1. Desktop (>768px, no reduced motion)
 * 2. Mobile (<=767px, no reduced motion)
 * 3. Reduced Motion (any screen size)
 */
export const createResponsiveContext = () => {
  return gsap.matchMedia()
}

export { gsap, ScrollTrigger, SplitText }
