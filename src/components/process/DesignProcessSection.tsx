import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../../lib/motion'

interface ProcessStep {
  step: number
  num: string
  title: string
  description: string
  tags: string[]
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    num: '01',
    title: 'Understand',
    description:
      'I start by listening and observing to clearly understand the problem and what users truly need.',
    tags: ['User Research', 'Problem Definition', 'Active Listening'],
  },
  {
    step: 2,
    num: '02',
    title: 'Think',
    description:
      'I break the problem down, explore ideas, and choose the direction that feels the most honest and effective.',
    tags: ['Information Architecture', 'Ideation', 'Strategic Logic'],
  },
  {
    step: 3,
    num: '03',
    title: 'Create',
    description:
      'I design clean, purposeful solutions where every detail adds value and supports the user experience.',
    tags: ['UI/UX Design', 'Design Systems', 'Interactive Prototyping'],
  },
  {
    step: 4,
    num: '04',
    title: 'Refine',
    description:
      'I review, improve, and simplify until the final design feels clear, intuitive, and ready to use.',
    tags: ['Micro-interactions', 'Pixel Precision', 'Design QA'],
  },
]

export const DesignProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const cardsGridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // ==========================================
      // DESKTOP: Robust Staggered Parallax Choreography (>= 1024px)
      // Unpinned, 100% stable in Safari/WebKit and all production environments.
      // Triggered directly on the cards grid as it traverses the viewport.
      // ==========================================
      mm.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          const grid = cardsGridRef.current
          const cards = gsap.utils.toArray<HTMLElement>('.process-card-item')
          if (!grid || cards.length !== 4) return

          // Prominent entrance offsets: descending diagonal staircase
          const enterY = [40, 160, 280, 400]
          // Prominent exit offsets: ascending exit (card 0 leaves first/highest)
          const exitY = [-400, -280, -160, -40]

          // Master Scroll Scrub Timeline tied directly to the cards grid entering and traversing the viewport
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: grid,
              start: 'top 92%',
              end: 'bottom 8%',
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
            defaults: { ease: 'none' },
          })

          // Phase 1: Staggered Diagonal Entrance (progress 0.0 -> 0.35)
          // Cards rise from their staircase offsets to converge at level baseline y = 0
          cards.forEach((card, i) => {
            tl.fromTo(
              card,
              { y: enterY[i] },
              { y: 0, duration: 0.35 },
              0
            )
          })

          // Phase 2: Aligned Reading Interval (progress 0.35 -> 0.65)
          // All 4 cards hold at level baseline y = 0 as they pass through the reading zone
          cards.forEach((card) => {
            tl.to(card, { y: 0, duration: 0.3 }, 0.35)
          })

          // Phase 3: Staggered Upward Exit (progress 0.65 -> 1.0)
          // Card 0 lifts and exits first, followed in order by 1, 2, and 3
          cards.forEach((card, i) => {
            tl.to(
              card,
              { y: exitY[i], duration: 0.35 },
              0.65
            )
          })
        }
      )

      // ==========================================
      // MOBILE & REDUCED MOTION: Static Flow, No Displacements
      // ==========================================
      mm.add(
        '(max-width: 1023px), (prefers-reduced-motion: reduce)',
        () => {
          const cards = gsap.utils.toArray<HTMLElement>('.process-card-item')
          gsap.set(cards, { clearProps: 'all' })
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      id="design-process"
      aria-label="Design Process"
      className="w-full bg-[#FFFFFF] border-t border-[#F0F1F3] relative pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 lg:pb-36"
    >
      {/* ========================================== */}
      {/* SECTION HEADING */}
      {/* ========================================== */}
      <div className="w-full max-w-[1180px] mx-auto px-7 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-8 sm:pb-10 lg:pb-10 text-left">
        <div className="mb-2 sm:mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#0A6E35] text-xs font-ui font-medium tracking-wide uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
            Methodology
          </span>
        </div>
        <h2 className="font-heading font-light text-[28px] sm:text-[38px] lg:text-[44px] tracking-[-0.03em] text-[#111111] leading-[1.1] mb-2.5 sm:mb-3">
          Design Process
        </h2>
        <p className="font-body font-light text-[14px] sm:text-[15.5px] lg:text-[16px] text-[#555555] leading-relaxed max-w-xl">
          A four-step approach moving from active listening and strategic inquiry to purposeful, refined execution.
        </p>
      </div>

      {/* ========================================== */}
      {/* 4-CARD CHOREOGRAPHY GRID */}
      {/* ========================================== */}
      <div
        ref={cardsGridRef}
        className="w-full max-w-[1180px] mx-auto px-7 sm:px-10 md:px-12 lg:px-16 xl:px-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-5 xl:gap-5.5 items-stretch">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="process-card-item w-full will-change-transform"
            >
              <article className="bg-[#FFFFFF] border border-[#E0EBE5] rounded-xl sm:rounded-2xl p-4.5 sm:p-5 lg:p-6 xl:p-6.5 flex flex-col justify-start lg:justify-between h-full min-h-0 lg:min-h-[350px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#0A6E35]/40 hover:shadow-[0_8px_24px_rgba(10,110,53,0.06)] transition-all duration-300">
                <div>
                  {/* Header: Number Pill & Phase Indicator */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 select-none">
                    <span className="font-ui font-semibold text-[11px] sm:text-xs text-[#0A6E35] px-2.5 py-0.5 sm:py-1 rounded-full bg-[#EAF6EE] border border-[#0A6E35]/20">
                      {step.num}
                    </span>
                    <span className="font-ui text-[10.5px] sm:text-[11px] text-[#888888] tracking-widest uppercase">
                      Phase 0{step.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading font-light text-[19px] sm:text-[22px] lg:text-[23px] text-[#111111] tracking-[-0.025em] leading-[1.2] mb-2 sm:mb-2.5">
                    {step.step}. {step.title}
                  </h3>

                  {/* Description from Reference Image */}
                  <p className="font-body font-light text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#555555] leading-[1.6]">
                    {step.description}
                  </p>
                </div>

                {/* Discipline / Focus Tags (tighter top margin on mobile, natural flow) */}
                <div className="pt-3 sm:pt-3.5 lg:pt-4 border-t border-[#F0F2F1] mt-3.5 sm:mt-4 lg:mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] sm:text-[11px] font-ui font-medium text-[#0A6E35] bg-[#F5F8F6] px-2 py-0.5 rounded-[3px] select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

