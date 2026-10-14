import React from 'react'
import { EmeraldButton } from '../common/EmeraldButton'

export const PreFooterCta: React.FC = () => {
  return (
    <section
      id="pre-footer-cta"
      aria-label="Availability and Call to Action"
      className="w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-20 border-t border-[#F0F1F3]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
        
        {/* Inset Ambient Card */}
        <div className="relative overflow-hidden bg-[#FAFCFB] border border-[#E0EBE5] px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 text-center">
          
          {/* Subtle Ambient Emerald Center Bloom */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] h-[180px] sm:h-[240px] rounded-full blur-[80px] sm:blur-[110px] opacity-30 bg-[radial-gradient(circle,_#22C55E_0%,_#16A34A_45%,_transparent_75%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Headline Callout */}
            <h2 className="font-heading font-light text-[28px] min-[420px]:text-[32px] sm:text-[38px] md:text-[44px] text-[#111111] leading-[1.18] tracking-[-0.03em] mb-3">
              Have an idea or looking to elevate your product?
            </h2>

            {/* Supporting Description */}
            <p className="font-body font-light text-[15px] sm:text-[16px] text-[#555555] leading-relaxed max-w-lg mx-auto mb-6 sm:mb-8">
              Always open to discussing new opportunities, product design challenges, and brand identity projects.
            </p>

            {/* Action Buttons: Primary "Get in touch" + Secondary "View works" */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
              <EmeraldButton
                href="mailto:suryadzns@gmail.com"
                variant="primary"
                showArrow
                className="h-[46px] px-6 sm:px-7 text-sm font-medium w-full sm:w-auto"
              >
                Get in touch
              </EmeraldButton>

              <EmeraldButton
                to="/projects"
                variant="secondary"
                className="h-[46px] px-6 sm:px-7 text-sm font-medium w-full sm:w-auto"
              >
                View works
              </EmeraldButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
