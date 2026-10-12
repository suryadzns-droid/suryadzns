import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText, whenFontsReady } from '../../lib/motion'
import portraitImg from '../../assets/portrait.png'

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaWrapperRef = useRef<HTMLDivElement>(null)
  const portraitWrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const container = containerRef.current
      const label = labelRef.current
      const headline = headlineRef.current
      const desc = descRef.current
      const ctaWrapper = ctaWrapperRef.current
      const portraitWrapper = portraitWrapperRef.current

      if (!container || !label || !headline || !desc || !ctaWrapper || !portraitWrapper) return

      const mm = gsap.matchMedia()

      // ==========================================
      // DESKTOP MOTION: Coordinated Master Timeline
      // ==========================================
      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          let split: SplitText | null = null
          let isSettled = false

          // Initialize default starting states before paint
          gsap.set([label, desc, ctaWrapper, portraitWrapper], { opacity: 0 })

          whenFontsReady().then(() => {
            if (!headline || !container) return

            try {
              // Split headline into rendered lines
              split = new SplitText(headline, {
                type: 'lines',
                linesClass: 'hero-split-line',
              })

              // Wrap each line in an overflow-hidden mask with extra bottom padding for descenders
              split.lines.forEach((line) => {
                const mask = document.createElement('span')
                mask.className = 'hero-line-mask'
                line.parentNode?.insertBefore(mask, line)
                mask.appendChild(line)
              })

              // Set initial transform & opacity on split lines
              gsap.set(split.lines, { y: 28, opacity: 0 })

              // Master timeline coordinating the entire hero entrance
              const masterTl = gsap.timeline({
                onComplete: () => {
                  isSettled = true
                  if (split) {
                    gsap.set(split.lines, { clearProps: 'transform,willChange' })
                  }
                  gsap.set([label, desc, ctaWrapper, portraitWrapper], {
                    clearProps: 'transform,willChange',
                  })
                },
              })

              // 0.00s: Introductory label begins (opacity 0 -> 1, y: 8px -> 0, 0.40s)
              masterTl.fromTo(
                label,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
                0.00
              )

              // 0.10s: Headline lines reveal begins (y: 28px -> 0, opacity 0 -> 1, 0.80s, stagger: 0.10s, power3.out)
              masterTl.fromTo(
                split.lines,
                { opacity: 0, y: 28 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: 'power3.out',
                },
                0.10
              )

              // 0.34s: Portrait & shapes enter smoothly (opacity 0 -> 1, y: 18px -> 0, 0.70s)
              masterTl.fromTo(
                portraitWrapper,
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
                0.34
              )

              // 0.42s: Supporting description begins (opacity 0 -> 1, y: 12px -> 0, 0.60s)
              masterTl.fromTo(
                desc,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                0.42
              )

              // 0.58s: CTA wrapper begins (opacity 0 -> 1, y: 8px -> 0, 0.45s)
              masterTl.fromTo(
                ctaWrapper,
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
                0.58
              )
            } catch {
              // Graceful fallback
              gsap.to([label, headline, desc, ctaWrapper, portraitWrapper], {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
              })
            }
          })

          // Handle responsive resize without replaying entrance or hiding settled text
          const handleResize = () => {
            if (isSettled && split) {
              split.revert()
              split = new SplitText(headline, {
                type: 'lines',
                linesClass: 'hero-split-line',
              })
              gsap.set(split.lines, { opacity: 1, y: 0 })
            }
          }

          window.addEventListener('resize', handleResize)

          return () => {
            window.removeEventListener('resize', handleResize)
            if (split) {
              split.revert()
            }
          }
        }
      )

      // ==========================================
      // MOBILE MOTION: Basic text reveal only
      // ==========================================
      mm.add(
        '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        () => {
          // CTA is immediately visible and unanimated on mobile
          gsap.set(ctaWrapper, { opacity: 1, y: 0 })

          // Reveal label, headline, description, and portrait together
          gsap.fromTo(
            [label, headline, desc, portraitWrapper],
            { opacity: 0, y: 6 },
            {
              opacity: 1,
              y: 0,
              duration: 0.36,
              ease: 'power2.out',
              clearProps: 'transform',
            }
          )
        }
      )

      // ==========================================
      // PREFERS REDUCED MOTION: Instant display
      // ==========================================
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([label, headline, desc, ctaWrapper, portraitWrapper], {
          opacity: 1,
          y: 0,
        })
      })

      return () => {
        mm.revert()
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Introduction"
      className="relative w-full bg-[#FFFFFF] min-h-[calc(100svh-5rem)] flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-24 pb-6 sm:pb-8 md:pb-10"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* 12-Column Grid: Left 7 cols for text, Right 5 cols for portrait composition */}
        {/* Reduced gap-y on mobile so image sits right below CTA button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 sm:gap-y-8 lg:gap-y-0 lg:gap-x-12 xl:gap-x-16 items-center">
          
          {/* LEFT COLUMN: Typography & Actions (Columns 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Small Introductory Label (Inter Regular, normal sentence case, original scale) */}
            <p
              ref={labelRef}
              className="font-ui font-normal text-[14px] md:text-[15px] tracking-[-0.01em] text-[#444444] mb-5 md:mb-7 select-none"
            >
              Graphic, Product &amp; Brand Designer
            </p>

            {/* Main Headline (DM Sans Light 300, strictly 2 lines on mobile) */}
            <div className="w-full max-w-[960px] mb-6 md:mb-8">
              <h1
                ref={headlineRef}
                aria-label="Clear thinking. Distinctive design."
                className="font-heading font-light tracking-[-0.035em] text-[34px] min-[360px]:text-[38px] min-[390px]:text-[42px] min-[440px]:text-[48px] sm:text-[60px] md:text-[76px] lg:text-[94px] xl:text-[106px] 2xl:text-[114px] leading-[0.98] md:leading-[0.94]"
              >
                <span className="text-[#111111] block max-md:whitespace-nowrap">
                  Clear thinking.
                </span>
                <span className="text-[#0A6E35] block max-md:whitespace-nowrap">
                  Distinctive design.
                </span>
              </h1>
            </div>

            {/* Supporting Description (Inter Light 300, max 520px) */}
            <div className="w-full max-w-[520px] mb-7 md:mb-9">
              <p
                ref={descRef}
                className="font-body font-light text-[#444444] text-[16.5px] md:text-[17.5px] lg:text-[18px] leading-[1.65] md:leading-[1.68] text-left"
              >
                I turn ideas into intuitive digital experiences and distinctive brand identities, with care for how they look, feel, and work.
              </p>
            </div>

            {/* Primary CTA Wrapper */}
            <div ref={ctaWrapperRef} className="pt-1">
              <Link
                to="/projects"
                id="hero-cta-button"
                className="hero-primary-cta group relative inline-flex items-center justify-center font-ui text-[15px] md:text-[16px] font-normal tracking-[-0.01em] text-white h-[50px] md:h-[52px] px-7 rounded-[4px] border border-white/10 shadow-[0_1px_2px_rgba(2,61,26,0.1)] outline-none select-none transition-all duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0A6E35]"
              >
                <span>Explore my work</span>
                <ArrowRight
                  className="w-4 h-4 ml-2.5 stroke-[1.7] transition-transform duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px]"
                  aria-hidden="true"
                />
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Full, Uncropped Portrait with 3 Rotating Emerald Shapes (Columns 8-12) */}
          <div
            ref={portraitWrapperRef}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full pt-1 lg:pt-0"
          >
            {/* Portrait Stage Container - Fully unclipped */}
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[370px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] flex items-center justify-center">
              
              {/* Realistic Bioluminescent Jellyfish Jelly Background Visual Effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                {/* Layer 0: Ambient Sub-surface Bioluminescent Glow Bloom */}
                <div
                  className="jelly-ambient-aura absolute w-[94%] h-[94%] rounded-full blur-[44px] opacity-45 bg-[radial-gradient(circle,_#22C55E_0%,_#16A34A_35%,_#0A6E35_65%,_transparent_78%)]"
                  aria-hidden="true"
                />

                {/* Layer 1: Secondary Outer Viscous Mantle (Translucent membrane) */}
                <div
                  className="jelly-mantle-secondary absolute w-[88%] h-[88%] z-0"
                  aria-hidden="true"
                />

                {/* Layer 2: Primary Translucent Jelly Body with Refractive Glass Inset Shadows */}
                <div
                  className="jelly-body-outer relative w-[82%] h-[82%] z-0 overflow-hidden flex items-center justify-center"
                  aria-hidden="true"
                >
                  {/* Layer 3: Glowing Emerald Core at the Nucleus */}
                  <div
                    className="jelly-emerald-core absolute w-[65%] h-[65%] rounded-full z-0"
                    aria-hidden="true"
                  />

                  {/* Layer 4: Upper-Left Wet Specular Highlight Glint */}
                  <div
                    className="jelly-specular-glint absolute top-[8%] left-[10%] w-[40%] h-[22%] z-10"
                    aria-hidden="true"
                  />

                  {/* Layer 5: Lower-Right Sub-surface Caustic Refraction */}
                  <div
                    className="jelly-rim-caustic absolute bottom-[10%] right-[12%] w-[34%] h-[20%] z-10"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Full, Uncropped Studio Portrait Photo */}
              <img
                src={portraitImg}
                alt="Portrait of Surya"
                width={1070}
                height={1470}
                className="relative z-10 w-full h-auto object-contain max-h-[440px] sm:max-h-[500px] lg:max-h-[560px] select-none pointer-events-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.14)]"
                loading="eager"
                decoding="async"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
