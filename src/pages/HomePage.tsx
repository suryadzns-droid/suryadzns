import React from 'react'
import { HeroSection } from '../components/hero/HeroSection'
import { SkillsTicker } from '../components/skills/SkillsTicker'
import { FeaturedProjects } from '../components/projects/FeaturedProjects'
import { WorkedWithBrands } from '../components/brands/WorkedWithBrands'

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <SkillsTicker />
      <FeaturedProjects />
      <WorkedWithBrands />
    </main>
  )
}
