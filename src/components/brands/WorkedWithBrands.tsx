import React from 'react'
import homemadeLogo from '../../assets/brands/homemadefoods-logo.png'
import framesOfShaLogo from '../../assets/brands/frames-of-sha-logo.png'
import eyeNetLogo from '../../assets/brands/eye-net-logo.png'

interface Brand {
  name: string
  logo: string
  maxHeightClass: string
}

const BRANDS: Brand[] = [
  {
    name: 'Homemade Foods',
    logo: homemadeLogo,
    maxHeightClass: 'max-h-[50px] sm:max-h-[58px] md:max-h-[64px]',
  },
  {
    name: 'Frames of SHA',
    logo: framesOfShaLogo,
    maxHeightClass: 'max-h-[74px] sm:max-h-[86px] md:max-h-[96px]',
  },
  {
    name: 'eYe-Net Educational Academy',
    logo: eyeNetLogo,
    maxHeightClass: 'max-h-[50px] sm:max-h-[58px] md:max-h-[64px]',
  },
]

export const WorkedWithBrands: React.FC = () => {
  return (
    <section
      id="worked-with-brands"
      aria-label="Worked With Brands"
      className="w-full bg-[#FFFFFF] py-16 sm:py-20 md:py-24 border-t border-[#F0F1F3]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-ui font-normal text-[13px] md:text-[14px] tracking-[0.04em] uppercase text-[#767676] mb-3 select-none">
            Collaborations
          </p>
          <h2 className="font-heading font-light text-[32px] sm:text-[38px] md:text-[44px] tracking-[-0.03em] text-[#111111] leading-[1.1]">
            Worked with brands
          </h2>
        </div>

        {/* Desktop/Tablet: 3-Column Logo Grid (sm:grid) */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[1100px] mx-auto items-stretch">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-[#FFFFFF] border border-[#EBECEF] hover:border-[#0A6E35]/40 h-[140px] sm:h-[160px] md:h-[180px] px-8 py-6 flex items-center justify-center transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] group rounded-none select-none"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className={`w-auto max-w-[85%] ${brand.maxHeightClass} object-contain transition-transform duration-300 group-hover:scale-105`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Infinite Animated Logo Ticker (sm:hidden) */}
        <div className="block sm:hidden w-full relative overflow-hidden -mx-5 px-5">
          {/* Edge Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="ticker-track flex w-max gap-3.5">
            <div className="flex items-center gap-3.5 animate-ticker-brands">
              {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
                <div
                  key={`${brand.name}-mobile-${idx}`}
                  className="bg-[#FFFFFF] border border-[#EBECEF] h-[104px] w-[200px] px-6 py-4 flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-none select-none"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-auto max-w-[85%] max-h-[46px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
