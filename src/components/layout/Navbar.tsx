import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'

// Clean vector icons for Instagram & LinkedIn
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Floating Capsule / Snackbar Navbar with Apple Glassmorphism */}
      <div className="fixed top-6 sm:top-8 inset-x-0 z-50 pointer-events-none flex justify-center px-6 sm:px-10">
        <header className="pointer-events-auto w-full max-w-[94%] md:max-w-[80%] lg:w-[70%] lg:max-w-[980px] h-[58px] sm:h-[62px] px-6 sm:px-8 rounded-full bg-[#FFFFFF]/75 backdrop-blur-2xl border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-between transition-all">
          
          {/* Left Brand: @surya linking to Instagram */}
          <a
            href="https://www.instagram.com/imsuryahhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center select-none py-1"
            aria-label="Surya on Instagram"
          >
            <span className="font-ui font-medium text-[15.5px] sm:text-[16.5px] tracking-[-0.02em] text-[#111111] group-hover:text-[#0A6E35] transition-colors duration-200">
              @surya
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-body text-[14.5px] transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#0A6E35] font-normal'
                      : 'text-[#444444] hover:text-[#111111] font-light'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0A6E35] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#111111] hover:text-[#0A6E35] transition-colors focus-visible:outline-2 focus-visible:outline-[#0A6E35]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[1.7]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.7]" />
            )}
          </button>
        </header>
      </div>

      {/* Mobile Navigation Glassmorphism Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8 md:hidden animate-in fade-in duration-200">
          {/* Main Links - Center Aligned */}
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-heading text-3xl font-light tracking-tight transition-colors ${
                    isActive
                      ? 'text-[#0A6E35]'
                      : 'text-[#111111] hover:text-[#0A6E35]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons & Email at Bottom - Center Aligned */}
          <div className="pt-8 border-t border-[#0A6E35]/12 flex flex-col items-center space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-[#767676]">
              Connect Directly
            </span>
            <div className="flex items-center space-x-6 text-[#111111]">
              <a
                href="https://www.instagram.com/imsuryahhh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-full hover:bg-[#EAF6EE] hover:text-[#0A6E35] transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/surya0607"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full hover:bg-[#EAF6EE] hover:text-[#0A6E35] transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:suryadzns@gmail.com"
                aria-label="Email"
                className="p-3 rounded-full hover:bg-[#EAF6EE] hover:text-[#0A6E35] transition-colors"
              >
                <Mail className="w-5 h-5 stroke-[1.7]" />
              </a>
            </div>
            <a
              href="mailto:suryadzns@gmail.com"
              className="text-xs font-mono text-[#444444] hover:text-[#0A6E35] transition-colors"
            >
              suryadzns@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  )
}
