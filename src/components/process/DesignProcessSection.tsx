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
      // DESKTOP: Pinned Staggered Scroll Choreography (>= 1024px)
      // Visibly pins in viewport so entrance & exit happen directly in front of the visitor
      // ==========================================
      mm.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          const cards = gsap.utils.toArray<HTMLElement>('.process-card-item')
          if (cards.length !== 4) return

          // Prominent entrance offsets: descending staircase from left to right
          const enterY = [220, 380, 540, 700]
          // Prominent exit offsets: ascending exit (card 0 leaves first/highest)
          const exitY = [-550, -400, -250, -100]

          // Master Scroll Scrub Timeline pinned directly to the section
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70px',
              end: '+=1500',
              pin: true,
              scrub: 0.7,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
            defaults: { ease: 'none' },
          })

          // Phase 1: Prominent Staggered Entrance (progress 0.0 -> 0.32)
          // Cards rise from staircase offsets up to level baseline y = 0
          cards.forEach((card, i) => {
            tl.fromTo(
              card,
              { y: enterY[i], opacity: 0.4 },
              { y: 0, opacity: 1, duration: 0.32 },
              0
            )
          })

          // Phase 2: Aligned Reading Moment (progress 0.32 -> 0.68)
          // All 4 cards hold at level baseline y = 0 with full opacity for easy reading
          cards.forEach((card) => {
            tl.to(card, { y: 0, opacity: 1, duration: 0.36 }, 0.32)
          })

          // Phase 3: Prominent Staggered Exit (progress 0.68 -> 1.0)
          // Card 0 shoots upward first, followed sequentially by cards 1, 2, and 3
          cards.forEach((card, i) => {
            tl.to(
              card,
              { y: exitY[i], opacity: i < 2 ? 0.2 : 0.6, duration: 0.32 },
              0.68
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
      className="w-full bg-[#FFFFFF] border-t border-[#F0F1F3] relative pt-12 sm:pt-16 lg:pt-14 pb-14 sm:pb-20 lg:pb-16"
    >
      {/* ========================================== */}
      {/* SECTION HEADING */}
      {/* ========================================== */}
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 pb-8 sm:pb-10 lg:pb-10 text-left">
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
        className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 xl:gap-6 items-stretch">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="process-card-item w-full will-change-transform"
            >
              <article className="bg-[#FFFFFF] border border-[#E0EBE5] rounded-none p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col justify-start lg:justify-between h-full min-h-0 lg:min-h-[350px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#0A6E35]/40 hover:shadow-[0_8px_24px_rgba(10,110,53,0.06)] transition-all duration-300">
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

