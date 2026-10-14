import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { TextRevealHeading } from '../components/common/TextRevealHeading'
import { TextRevealParagraph } from '../components/common/TextRevealParagraph'
import { SectionReveal } from '../components/common/SectionReveal'
import { CreativesFeed } from '../components/projects/CreativesFeed'
import project1Img from '../assets/Project_01.png'
import project2Img from '../assets/Project Cover Image 02.png'

type TabType = 'ui-identity' | 'creatives'

const PROJECTS = [
  {
    id: 'homemadefoods',
    title: 'Homemadefoods Website',
    pill: 'Ecommerce',
    image: project1Img,
    alt: 'Homemadefoods Website e-commerce mockup on laptop and mobile',
    description: 'Designed and developed a seamless e-commerce experience.',
  },
  {
    id: 'grafino',
    title: 'Grafino - Design Studio',
    pill: 'Brand Identity',
    image: project2Img,
    alt: 'Grafino - Design Studio brand identity showcase',
    description: 'Crafted a comprehensive brand identity and visual system for a modern design studio.',
  },
]

export const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('ui-identity')

  return (
    <main className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 pt-28 sm:pt-32 pb-20 min-h-[75vh]">
      <div className="max-w-3xl mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6EE] text-[#0A6E35] text-xs font-ui font-medium tracking-wide uppercase rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]"></span>
          {activeTab === 'ui-identity' ? 'Selected Works' : 'Instagram Feed'}
        </div>

        <TextRevealHeading
          key={activeTab}
          as="h1"
          immediate
          className="text-4xl sm:text-5xl lg:text-6xl mb-5 leading-[1.12] tracking-[-0.03em]"
        >
          {activeTab === 'ui-identity' ? (
            <>
              Selected works in <span className="text-[#0A6E35]">systems &amp; identities</span>.
            </>
          ) : (
            <>
              Studio experiments &amp; <span className="text-[#0A6E35]">visual creatives</span>.
            </>
          )}
        </TextRevealHeading>

        <TextRevealParagraph
          key={`sub-${activeTab}`}
          immediate
          className="text-base sm:text-lg text-[#555555] leading-relaxed"
        >
          {activeTab === 'ui-identity'
            ? 'Digital product interfaces, comprehensive brand architectures, and design engineering crafted with intention and discipline.'
            : 'Visual identities, studio updates, motion design, and creative explorations from our Instagram feed.'}
        </TextRevealParagraph>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-[#F2F4F3] border border-[#E0EBE5] rounded-full w-fit mb-12 sm:mb-14">
        <button
          type="button"
          onClick={() => setActiveTab('ui-identity')}
          className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-ui font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'ui-identity'
              ? 'bg-white text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/5'
              : 'text-[#666666] hover:text-[#111111]'
          }`}
        >
          <span>UI &amp; Identity</span>
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full font-medium transition-colors ${
              activeTab === 'ui-identity'
                ? 'bg-[#EAF6EE] text-[#0A6E35]'
                : 'bg-[#E5E8E6] text-[#777777]'
            }`}
          >
            {PROJECTS.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('creatives')}
          className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-ui font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'creatives'
              ? 'bg-white text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/5'
              : 'text-[#666666] hover:text-[#111111]'
          }`}
        >
          <span>Creatives</span>
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full font-medium transition-colors ${
              activeTab === 'creatives'
                ? 'bg-[#EAF6EE] text-[#0A6E35]'
                : 'bg-[#E5E8E6] text-[#777777]'
            }`}
          >
            Instagram
          </span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'ui-identity' ? (
        <SectionReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-14 xl:gap-16 items-start">
          {PROJECTS.map((project) => (
            <article key={project.id} className="w-full group">
              <Link
                to={`/projects/${project.id}`}
                className="block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A6E35]"
                aria-label={`View ${project.title} Project`}
              >
                <div className="relative w-full aspect-[16/10] bg-[#F2F3F5] overflow-hidden rounded-none border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={1586}
                    height={992}
                    className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mt-5 sm:mt-6">
                  <div className="mb-2.5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] sm:text-[12.5px] font-ui font-medium tracking-tight bg-[#EAF6EE] text-[#0A6E35] border border-[#0A6E35]/20 select-none">
                      {project.pill}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-heading font-normal text-[22px] sm:text-[26px] md:text-[28px] tracking-[-0.025em] text-[#111111] transition-colors duration-200 group-hover:text-[#0A6E35]">
                      {project.title}
                    </h2>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#767676] group-hover:text-[#0A6E35] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                  </div>

                  <p className="font-body font-light text-[15px] sm:text-[16px] text-[#555555] leading-[1.6] mt-1.5 max-w-[560px]">
                    {project.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </SectionReveal>
      ) : (
        <SectionReveal>
          <CreativesFeed />
        </SectionReveal>
      )}
    </main>
  )
}
