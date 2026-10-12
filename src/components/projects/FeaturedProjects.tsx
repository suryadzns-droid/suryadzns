import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import project1Img from '../../assets/Project_01.png'

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="featured-projects"
      aria-label="Featured Projects"
      className="w-full bg-[#FFFFFF] py-16 sm:py-20 md:py-28"
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <p className="font-ui font-normal text-[13px] md:text-[14px] tracking-[0.04em] uppercase text-[#767676] mb-3 select-none">
            Selected Works
          </p>
          <h2 className="font-heading font-light text-[36px] sm:text-[44px] md:text-[52px] tracking-[-0.03em] text-[#111111] leading-[1.08]">
            Featured Projects
          </h2>
        </div>

        {/* 2-Column Grid Layout: Left Column = Project 1, Right Column = Reserved for Project 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* COLUMN 1: Project 1 (Homemadefoods Website) */}
          <article className="w-full group">
            <Link
              to="/projects/homemadefoods"
              className="block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A6E35]"
              aria-label="View Homemadefoods Website Project"
            >
              {/* Sharp Thumbnail Image Container (No rounded corners) */}
              <div className="relative w-full aspect-[16/10] bg-[#F2F3F5] overflow-hidden rounded-none border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <img
                  src={project1Img}
                  alt="Homemadefoods Website e-commerce mockup on laptop and mobile"
                  width={1586}
                  height={992}
                  className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Project Meta Information Below Image */}
              <div className="mt-5 sm:mt-6">
                
                {/* Tagline Capsule Badge */}
                <div className="mb-2.5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] sm:text-[12.5px] font-ui font-medium tracking-tight bg-[#EAF6EE] text-[#0A6E35] border border-[#0A6E35]/20 select-none">
                    Ecommerce
                  </span>
                </div>

                {/* Project Heading with Arrow */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading font-normal text-[22px] sm:text-[26px] md:text-[28px] tracking-[-0.025em] text-[#111111] transition-colors duration-200 group-hover:text-[#0A6E35]">
                    Homemadefoods Website
                  </h3>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#767676] group-hover:text-[#0A6E35] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                  </div>
                </div>

                {/* Project Description */}
                <p className="font-body font-light text-[15px] sm:text-[16px] text-[#555555] leading-[1.6] mt-1.5 max-w-[560px]">
                  Designed and developed a seamless e-commerce experience.
                </p>

              </div>
            </Link>
          </article>

          {/* COLUMN 2: Empty Space for Second Project */}
          <div
            className="hidden md:block w-full"
            aria-hidden="true"
          >
            {/* Left intentionally blank to be populated once you share Project 2 */}
          </div>

        </div>

      </div>
    </section>
  )
}
