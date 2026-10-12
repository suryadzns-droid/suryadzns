import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export interface EmeraldButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
  href?: string
  onClick?: () => void
  showArrow?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  id?: string
}

export const EmeraldButton: React.FC<EmeraldButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  id,
}) => {
  const baseClasses =
    'group relative inline-flex items-center justify-center font-ui text-[15px] font-normal tracking-[-0.01em] transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0A6E35]'

  // Primary emerald gradient button tokens (derived from the reference image):
  // Refined gradient: Start #168541 -> Middle #0A6E35 -> End #023D1A
  // Hover deepens emerald tones smoothly without glossy plastic or neon hotspots
  const variantClasses = {
    primary:
      'btn-emerald-primary text-white',
    secondary:
      'btn-emerald-secondary text-[#111111]',
    ghost:
      'bg-transparent text-[#0A6E35] hover:text-[#023D1A] px-4 py-2 rounded-[4px] hover:bg-[#EAF6EE]/70 transition-colors duration-200',
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className="btn-arrow-icon ml-2 inline-flex items-center transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
          aria-hidden="true"
        >
          <ArrowRight className="w-4 h-4 stroke-[1.6]" />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} id={id} className={combinedClasses}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        id={id}
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {content}
    </button>
  )
}
