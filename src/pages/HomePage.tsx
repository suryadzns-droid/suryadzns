import React from 'react'
import { HeroSection } from '../components/hero/HeroSection'
import { SkillsTicker } from '../components/skills/SkillsTicker'
import { FeaturedProjects } from '../components/projects/FeaturedProjects'
import { WorkedWithBrands } from '../components/brands/WorkedWithBrands'
import { DesignProcessSection } from '../components/process/DesignProcessSection'
import { PreFooterCta } from '../components/home/PreFooterCta'

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <SkillsTicker />
      <FeaturedProjects />
      <WorkedWithBrands />
      <DesignProcessSection />
      <PreFooterCta />
    </main>
  )
}
