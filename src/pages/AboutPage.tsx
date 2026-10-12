import React from 'react'
import { TextRevealHeading } from '../components/common/TextRevealHeading'
import { TextRevealParagraph } from '../components/common/TextRevealParagraph'
import { SectionReveal } from '../components/common/SectionReveal'
import { EmeraldButton } from '../components/common/EmeraldButton'

export const AboutPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 min-h-[75vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6EE] text-[#023D1A] text-xs font-medium tracking-wide uppercase rounded-[3px] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]"></span>
          About Route Shell
        </div>

        <TextRevealHeading as="h1" immediate className="text-4xl sm:text-5xl lg:text-6xl mb-8 leading-[1.14]">
          Independent design partner for <span className="text-[#0A6E35]">forward-thinking brands</span>.
        </TextRevealHeading>

        <TextRevealParagraph immediate className="text-lg md:text-xl text-[#444444] mb-10">
          Focusing on digital product craft, visual identity architecture, and restrained user experiences. 
          Detailed biographical narratives, process essays, and accolades will be structured in the next phase.
        </TextRevealParagraph>

        <SectionReveal className="flex flex-wrap items-center gap-4 pt-4">
          <EmeraldButton to="/projects" showArrow>
            View Projects
          </EmeraldButton>
          <EmeraldButton to="/contact" variant="secondary">
            Get in Touch
          </EmeraldButton>
        </SectionReveal>
      </div>
    </main>
  )
}
