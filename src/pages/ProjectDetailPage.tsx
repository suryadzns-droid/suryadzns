import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { TextRevealHeading } from '../components/common/TextRevealHeading'
import { TextRevealParagraph } from '../components/common/TextRevealParagraph'
import { EmeraldButton } from '../components/common/EmeraldButton'
import { ArrowLeft } from 'lucide-react'

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 min-h-[75vh]">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-[#767676] hover:text-[#0A6E35] font-normal mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Link>

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6EE] text-[#023D1A] text-xs font-medium tracking-wide uppercase rounded-[3px] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]"></span>
          Project Route Shell: {id}
        </div>

        <TextRevealHeading as="h1" immediate className="text-4xl sm:text-5xl lg:text-6xl mb-6">
          Individual Case Study <span className="text-[#0A6E35]">Layout Foundation</span>
        </TextRevealHeading>

        <TextRevealParagraph immediate className="text-lg md:text-xl text-[#444444] mb-8">
          Detailed case study modules, hero visual grids, typographic specs, and design rationales 
          will be structured when individual project sections are composed.
        </TextRevealParagraph>

        <EmeraldButton to="/contact" showArrow>
          Inquire About Similar Work
        </EmeraldButton>
      </div>
    </main>
  )
}
