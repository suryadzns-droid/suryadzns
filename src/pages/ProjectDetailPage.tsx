import React from 'react'
import { EmeraldButton } from '../components/common/EmeraldButton'

export const ProjectDetailPage: React.FC = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 py-28 sm:py-36 min-h-[70vh] flex flex-col justify-center items-center text-center">
      <div className="max-w-xl flex flex-col items-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6EE] text-[#0A6E35] text-xs font-ui font-medium tracking-wide uppercase rounded-full mb-5 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
          Case Study
        </span>

        <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-[-0.03em] mb-4">
          Under Construction
        </h1>

        <p className="font-body font-light text-base sm:text-lg text-[#666666] leading-relaxed mb-8 max-w-md">
          Detailed case study modules and presentation visuals for this project are currently under construction.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <EmeraldButton to="/projects" variant="primary">
            View All Projects
          </EmeraldButton>
          <EmeraldButton to="/" variant="secondary">
            Back to Home
          </EmeraldButton>
        </div>
      </div>
    </main>
  )
}
