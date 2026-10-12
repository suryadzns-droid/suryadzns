import React from 'react'
import { TextRevealHeading } from '../components/common/TextRevealHeading'
import { TextRevealParagraph } from '../components/common/TextRevealParagraph'
import { SectionReveal } from '../components/common/SectionReveal'
import { EmeraldButton } from '../components/common/EmeraldButton'

export const ProjectsPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 min-h-[75vh]">
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6EE] text-[#023D1A] text-xs font-medium tracking-wide uppercase rounded-[3px] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]"></span>
          Projects Route Shell
        </div>

        <TextRevealHeading as="h1" immediate className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.14]">
          Selected works in <span className="text-[#0A6E35]">systems &amp; identities</span>.
        </TextRevealHeading>

        <TextRevealParagraph immediate className="text-lg md:text-xl text-[#444444]">
          Individual project compositions, case study grids, and curated imagery are preserved for subsequent section planning.
          The visual system below establishes typographic discipline and surface balance.
        </TextRevealParagraph>
      </div>

      {/* Representative project route entry placeholder */}
      <SectionReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { id: 'elysium-brand-system', title: 'Elysium Brand Architecture', type: 'Visual Identity & Design System' },
          { id: 'strata-interface-lab', title: 'Strata Interaction Framework', type: 'Design Engineering & UI Architecture' },
        ].map((item) => (
          <div
            key={item.id}
            className="border border-[#BBDBC5]/70 rounded-[4px] p-8 bg-[#FAFCFB] flex flex-col justify-between hover:border-[#0A6E35]/40 transition-colors"
          >
            <div>
              <span className="text-xs uppercase tracking-wider font-mono text-[#0A6E35] block mb-2">
                {item.type}
              </span>
              <h2 className="font-heading text-2xl font-light text-[#111111] mb-4">
                {item.title}
              </h2>
            </div>
            <div className="pt-6">
              <EmeraldButton to={`/projects/${item.id}`} variant="secondary" showArrow>
                Inspect Project Shell
              </EmeraldButton>
            </div>
          </div>
        ))}
      </SectionReveal>
    </main>
  )
}
