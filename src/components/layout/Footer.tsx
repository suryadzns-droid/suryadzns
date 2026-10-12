import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#030804] text-white pt-14 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden selection:bg-[#168541] selection:text-white border-t border-[#0A6E35]/15">
      
      {/* -------------------------------------------------------------
          SUBTLE NATURAL EMERALD GRADIENT LIGHTING:
          Emanating exclusively from the bottom edge of the footer upwards
          ------------------------------------------------------------- */}
      <div 
        className="pointer-events-none absolute -bottom-28 sm:-bottom-36 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1200px] md:w-[1450px] h-[300px] sm:h-[400px] rounded-[100%] blur-[100px] sm:blur-[140px] opacity-45 bg-[radial-gradient(ellipse_at_center,_#22C55E_0%,_#16A34A_35%,_#0A6E35_62%,_transparent_80%)] animate-natural-light-primary" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -bottom-20 sm:-bottom-28 left-[35%] -translate-x-1/2 w-[550px] sm:w-[750px] h-[220px] sm:h-[300px] rounded-[100%] blur-[90px] sm:blur-[120px] opacity-30 bg-[radial-gradient(ellipse_at_center,_#168541_0%,_#05411E_50%,_transparent_75%)] animate-natural-light-secondary" 
        aria-hidden="true" 
      />

      {/* Grounding bottom gradient baseline */}
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-[#023D1A]/10 to-transparent" 
        aria-hidden="true" 
      />

      {/* Main Single Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 relative z-10 flex flex-col gap-10 sm:gap-14">
        
        {/* Quote: Center-aligned on mobile, Left-aligned on desktop */}
        <div className="pt-2">
          <blockquote className="font-heading font-light text-[26px] min-[420px]:text-[30px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.18] tracking-[-0.03em] text-white text-center md:text-left mx-auto md:mx-0 max-w-4xl">
            <span className="block">Design isn’t just decoration.</span>
            <span className="block text-white/90">It’s communication that works.</span>
          </blockquote>
        </div>

        {/* Horizontal Navigation & Social Links: Center-aligned on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
          
          {/* Social Links (arranged horizontally, centered on mobile) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4 font-ui text-xs sm:text-sm text-white/80">
            {/* 1. Instagram */}
            <a
              href="https://www.instagram.com/imsuryahhh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-[#168541]/30 border border-white/10 hover:border-[#22C55E]/40 text-white/90 hover:text-[#4ADE80] transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-white/90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
              </svg>
              <span>Instagram</span>
            </a>

            {/* 2. LinkedIn */}
            <a
              href="https://www.linkedin.com/in/surya0607"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-[#168541]/30 border border-white/10 hover:border-[#22C55E]/40 text-white/90 hover:text-[#4ADE80] transition-all duration-200"
            >
              <svg
                className="w-4 h-4 fill-current text-white/90"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* 3. Mail */}
            <a
              href="mailto:suryadzns@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-[#168541]/30 border border-white/10 hover:border-[#22C55E]/40 text-white/90 hover:text-[#4ADE80] transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-white/90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Mail</span>
            </a>

            {/* 4. WhatsApp: Styled like others with white icon and name */}
            <a
              href="https://wa.me/918754255020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-[#168541]/30 border border-white/10 hover:border-[#22C55E]/40 text-white/90 hover:text-[#4ADE80] transition-all duration-200"
            >
              <svg
                className="w-4 h-4 fill-current text-white/90"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Webpage Links (arranged horizontally, centered on mobile) */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8 font-ui text-xs sm:text-sm text-white/80">
            <Link to="/" className="hover:text-[#4ADE80] transition-colors py-1">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#4ADE80] transition-colors py-1">
              About
            </Link>
            <Link to="/projects" className="hover:text-[#4ADE80] transition-colors py-1">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-[#4ADE80] transition-colors py-1">
              Contact
            </Link>
          </div>

        </div>

        {/* Bottom Base Bar: Centered on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-xs text-white/40 pt-4 border-t border-white/5 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="font-ui font-medium text-white/90">@surya</span>
            <span>•</span>
            <span>UI/UX &amp; Brand Identity Design</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-white/30">Clear thinking. Distinctive design.</span>
          </div>

          <div className="flex items-center justify-center gap-6">
            <span>© {new Date().getFullYear()} Surya</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#4ADE80] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
