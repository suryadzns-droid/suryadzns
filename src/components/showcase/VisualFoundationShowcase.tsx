import React, { useState } from 'react'
import { TextRevealHeading } from '../common/TextRevealHeading'
import { TextRevealParagraph } from '../common/TextRevealParagraph'
import { SectionReveal } from '../common/SectionReveal'
import { EmeraldButton } from '../common/EmeraldButton'
import { Check, Copy, RefreshCw, Smartphone, Monitor } from 'lucide-react'

export const VisualFoundationShowcase: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [retriggerKey, setRetriggerKey] = useState(0)

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 1800)
  }

  // Exact emerald palette sampled from the uploaded tree reference image
  const palette = [
    {
      name: 'Primary White',
      hex: '#FFFFFF',
      role: '60% Dominant Background',
      usage: 'Provides breath and calm whitespace across all layouts',
      textDark: true,
      border: true,
    },
    {
      name: 'Primary Emerald',
      hex: '#0A6E35',
      role: '30% Brand Identity',
      usage: 'Core vibrant botanical emerald from reference trunk; WCAG AA 6.37:1 on white',
      textDark: false,
    },
    {
      name: 'Lighter Emerald',
      hex: '#168541',
      role: 'Button Gradient Top / Accents',
      usage: 'Luminous canopy/branch highlight; starts primary button gradient',
      textDark: false,
    },
    {
      name: 'Deep Emerald',
      hex: '#023D1A',
      role: 'Contrast & Dark Surfaces',
      usage: 'Deep shadow roots; high-contrast text on pale green (10.5:1 ratio)',
      textDark: false,
    },
    {
      name: 'Pale Green (Mist)',
      hex: '#EAF6EE',
      role: '10% Supporting Tint',
      usage: 'Subtle section division & atmospheric mist from reference background',
      textDark: true,
    },
    {
      name: 'Muted Green (Canopy Veil)',
      hex: '#BBDBC5',
      role: '10% Supporting Border',
      usage: 'Soft botanical dividers, subtle outline borders, card edges',
      textDark: true,
    },
    {
      name: 'Deepest Forest',
      hex: '#002E14',
      role: 'Shadow Depth',
      usage: 'Darkest shadow tone in the tree canopy for deep contrast',
      textDark: false,
    },
    {
      name: 'Main Typography',
      hex: '#111111',
      role: 'Primary Reading Tone',
      usage: 'Near-black headings and high-priority interface labels',
      textDark: false,
    },
  ]

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Header Overview */}
      <header className="mb-20 pb-12 border-b border-[#0A6E35]/15">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6EE] text-[#023D1A] text-xs font-medium tracking-wide uppercase rounded-[3px] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]"></span>
          Design Foundation &amp; System Specimen
        </div>

        <TextRevealHeading
          as="h1"
          immediate
          className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl leading-[1.12]"
        >
          Visual Language, Typography &amp; <span className="text-[#0A6E35]">Botanical Emerald</span>
        </TextRevealHeading>

        <TextRevealParagraph immediate className="mt-6 text-lg max-w-3xl">
          Established foundation for the UI/UX &amp; Brand Identity portfolio. Featuring the 
          exact botanical emerald green palette extracted from the reference image (#0A6E35, #168541, #023D1A), 
          anchored by 60% whitespace, light black typography, restrained gradient buttons, 
          and a synchronized GSAP motion architecture.
        </TextRevealParagraph>

        {/* Global Proportions Bar */}
        <div className="mt-10 p-5 bg-[#FAFCFB] border border-[#BBDBC5]/60 rounded-[4px]">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-xs uppercase tracking-wider font-medium text-[#111111]">
              Target Colour Distribution
            </span>
            <span className="text-xs text-[#767676]">Overall Surface Balance</span>
          </div>
          <div className="h-4 w-full flex rounded-[2px] overflow-hidden border border-[#BBDBC5]">
            <div
              className="bg-[#FFFFFF] border-r border-[#BBDBC5] flex items-center justify-center text-[10px] font-medium text-[#111111]"
              style={{ width: '60%' }}
              title="60% White"
            >
              60% White
            </div>
            <div
              className="bg-[#0A6E35] flex items-center justify-center text-[10px] font-medium text-white"
              style={{ width: '30%' }}
              title="30% Botanical Emerald"
            >
              30% Emerald
            </div>
            <div
              className="bg-[#BBDBC5] flex items-center justify-center text-[10px] font-medium text-[#023D1A]"
              style={{ width: '10%' }}
              title="10% Supporting"
            >
              10%
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1: COLOUR PALETTE */}
      <SectionReveal className="mb-24">
        <div className="mb-8 flex items-baseline justify-between border-b border-[#0A6E35]/12 pb-4">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-[#111111]">
              01. Colour System &amp; Placement
            </h2>
            <p className="font-body text-sm text-[#444444] mt-1">
              Exact botanical emerald spectrum sampled directly from the reference tree image with calibrated contrast ratios.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {palette.map((item) => (
            <div
              key={item.hex}
              className="group border border-[#BBDBC5]/60 rounded-[4px] p-5 flex flex-col justify-between hover:border-[#0A6E35]/50 transition-colors bg-[#FFFFFF]"
            >
              <div>
                <div
                  className={`h-24 w-full rounded-[3px] mb-4 flex items-end p-3 ${
                    item.border ? 'border border-[#BBDBC5]' : ''
                  }`}
                  style={{ backgroundColor: item.hex }}
                >
                  <button
                    onClick={() => copyToClipboard(item.hex)}
                    className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-[3px] transition-opacity ${
                      item.textDark
                        ? 'bg-black/10 text-[#111111] hover:bg-black/15'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {copiedHex === item.hex ? (
                      <>
                        <Check className="w-3 h-3" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> {item.hex}
                      </>
                    )}
                  </button>
                </div>
                <h3 className="font-heading text-lg font-light text-[#111111]">{item.name}</h3>
                <span className="inline-block text-xs font-mono font-medium text-[#0A6E35] mt-0.5">
                  {item.role}
                </span>
                <p className="font-body text-xs text-[#444444] mt-2 leading-relaxed">
                  {item.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* SECTION 2: TYPOGRAPHY HIERARCHY */}
      <SectionReveal className="mb-24">
        <div className="mb-8 border-b border-[#0A6E35]/12 pb-4">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-[#111111]">
            02. Typographic Scale &amp; Proportion
          </h2>
          <p className="font-body text-sm text-[#444444] mt-1">
            DM Sans Light (300) for expressive, calm headings. Inter Light (300) for comfortable, natural reading lines.
          </p>
        </div>

        <div className="space-y-12 bg-[#FAFCFB] p-8 md:p-12 border border-[#BBDBC5]/60 rounded-[4px]">
          {/* Heading 1 Specimen */}
          <div className="border-b border-[#0A6E35]/12 pb-8">
            <span className="text-xs uppercase tracking-wider font-mono text-[#0A6E35] block mb-2">
              H1 Display — DM Sans Light 300 / Tracking -0.03em / Lead 1.12
            </span>
            <TextRevealHeading as="h1" className="text-4xl sm:text-5xl lg:text-6xl">
              Designing digital identities with <span className="text-[#0A6E35]">botanical precision</span>.
            </TextRevealHeading>
          </div>

          {/* Heading 2 Specimen */}
          <div className="border-b border-[#0A6E35]/12 pb-8">
            <span className="text-xs uppercase tracking-wider font-mono text-[#0A6E35] block mb-2">
              H2 Section — DM Sans Light 300 / Tracking -0.025em / Lead 1.2
            </span>
            <TextRevealHeading as="h2" className="text-2xl sm:text-3xl lg:text-4xl">
              Selected projects in brand architecture and interaction systems.
            </TextRevealHeading>
          </div>

          {/* Heading 3 Specimen */}
          <div className="border-b border-[#0A6E35]/12 pb-8">
            <span className="text-xs uppercase tracking-wider font-mono text-[#0A6E35] block mb-2">
              H3 Feature — DM Sans Light 300 / Tracking -0.02em / Lead 1.25
            </span>
            <TextRevealHeading as="h3" className="text-xl sm:text-2xl">
              Precision grid alignment with generous breathing room.
            </TextRevealHeading>
          </div>

          {/* Body Description Specimen */}
          <div>
            <span className="text-xs uppercase tracking-wider font-mono text-[#0A6E35] block mb-2">
              Body Description — Inter Light 300 / 18px Desktop, 16.5px Mobile / Lead 1.72 / Left Aligned
            </span>
            <TextRevealParagraph className="text-base sm:text-lg">
              The portfolio avoids the recognisable appearance of generic AI-generated templates.
              Rather than filling screens with excessive cards, thick shadows, and decorative clutter, 
              typography and genuine project imagery are given space to establish a calm, confident, 
              and contemporary authority.
            </TextRevealParagraph>
          </div>
        </div>
      </SectionReveal>

      {/* SECTION 3: EMERALD GRADIENT BUTTONS */}
      <SectionReveal className="mb-24">
        <div className="mb-8 border-b border-[#0A6E35]/12 pb-4">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-[#111111]">
            03. Emerald Gradient Button System
          </h2>
          <p className="font-body text-sm text-[#444444] mt-1">
            Subtle diagonal transition (#168541 → #0A6E35 → #023D1A). Mimics living light across emerald foliage, with smooth hover deepening and controlled arrow shift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Interactive Button Demo */}
          <div className="p-8 border border-[#BBDBC5]/60 rounded-[4px] bg-[#FFFFFF]">
            <h3 className="font-heading text-lg font-light mb-6 text-[#111111]">
              Interactive Button States
            </h3>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[#767676] block mb-2">Primary Emerald Gradient with Arrow:</span>
                <EmeraldButton showArrow>
                  Explore Selected Works
                </EmeraldButton>
              </div>

              <div>
                <span className="text-xs font-mono text-[#767676] block mb-2">Primary Emerald Gradient (Text Only):</span>
                <EmeraldButton>
                  Initiate Collaboration
                </EmeraldButton>
              </div>

              <div>
                <span className="text-xs font-mono text-[#767676] block mb-2">Secondary Restrained Border:</span>
                <EmeraldButton variant="secondary">
                  Download Portfolio Index
                </EmeraldButton>
              </div>

              <div>
                <span className="text-xs font-mono text-[#767676] block mb-2">Ghost Emerald Action:</span>
                <EmeraldButton variant="ghost" showArrow>
                  Read Case Study
                </EmeraldButton>
              </div>
            </div>
          </div>

          {/* Button Specifications & Rules */}
          <div className="p-8 border border-[#0A6E35]/15 bg-[#EAF6EE]/50 rounded-[4px]">
            <h3 className="font-heading text-lg font-light mb-4 text-[#023D1A]">
              Refined Gradient Specifications
            </h3>
            <ul className="space-y-3 font-body text-sm text-[#444444]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35] mt-1.5 shrink-0" />
                <span><strong>Gradient Stops:</strong> #168541 (start) → #0A6E35 (middle) → #023D1A (end) at 135°.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35] mt-1.5 shrink-0" />
                <span><strong>Desktop Hover:</strong> Smooth 250ms transition deepening to #075F2C / #013014 without neon hotspot.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35] mt-1.5 shrink-0" />
                <span><strong>Arrow Physics:</strong> Controlled 4px translation on hover; no continuous bobbing or magnetic pull.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35] mt-1.5 shrink-0" />
                <span><strong>Corner Radius:</strong> 4px restrained radius. Strictly no pill or round shapes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35] mt-1.5 shrink-0" />
                <span><strong>Constraint:</strong> Emerald gradient is reserved exclusively for buttons; never applied across page backgrounds or titles.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionReveal>

      {/* SECTION 4: ANIMATION & MOTION SYSTEM */}
      <SectionReveal className="mb-24">
        <div className="mb-8 flex items-baseline justify-between border-b border-[#0A6E35]/12 pb-4">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-[#111111]">
              04. Desktop vs Mobile Motion Engine
            </h2>
            <p className="font-body text-sm text-[#444444] mt-1">
              Synchronized GSAP timelines with ScrollTrigger &amp; SplitText, separated by <code className="text-xs bg-[#EAF6EE] px-1 py-0.5 rounded text-[#023D1A]">gsap.matchMedia()</code>.
            </p>
          </div>
          <button
            onClick={() => setRetriggerKey((k) => k + 1)}
            className="inline-flex items-center gap-1.5 text-xs text-[#0A6E35] hover:text-[#023D1A] font-medium py-1 px-2.5 rounded border border-[#0A6E35]/20 hover:bg-[#EAF6EE]/70 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Re-trigger Reveals
          </button>
        </div>

        {/* Live Motion Test Area */}
        <div
          key={retriggerKey}
          className="p-8 border border-[#BBDBC5]/70 rounded-[4px] bg-[#FAFCFB] mb-8"
        >
          <span className="text-xs font-mono text-[#0A6E35] block mb-2">Live Text Reveal Demo:</span>
          <TextRevealHeading
            immediate
            className="text-2xl sm:text-3xl text-[#111111] max-w-2xl mb-4"
          >
            Smooth line-by-line masked reveals calibrated to font loading and window bounds.
          </TextRevealHeading>
          <TextRevealParagraph immediate className="text-base text-[#444444] max-w-xl">
            Paragraphs enter as cohesive elements with a gentle fade and 14px upward travel.
            On mobile devices, line-splitting is automatically bypassed for a lightweight 380ms opacity entrance.
          </TextRevealParagraph>
        </div>

        {/* Motion Rule Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Desktop Motion Profile */}
          <div className="p-6 border border-[#0A6E35]/20 rounded-[4px] bg-[#FFFFFF]">
            <div className="flex items-center gap-2 mb-4 text-[#0A6E35]">
              <Monitor className="w-5 h-5 stroke-[1.7]" />
              <h3 className="font-heading text-lg font-light text-[#111111]">
                Desktop Motion Profile (&gt; 768px)
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs font-body text-[#444444]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                <span><strong>Headings:</strong> SplitText line mask, 28px travel, 750ms duration, 80ms stagger.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                <span><strong>Paragraphs:</strong> Cohesive fade + 14px upward travel, 550ms, power2.out.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                <span><strong>Sections:</strong> 24px entrance travel via ScrollTrigger, plays once on enter.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                <span><strong>Page Changes:</strong> Coordinated 360ms fade + 14px rise with scroll restoration.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                <span><strong>Scrolling:</strong> Pure native browser scrolling. Zero hijacking or virtual lag.</span>
              </li>
            </ul>
          </div>

          {/* Mobile Motion Profile */}
          <div className="p-6 border border-[#BBDBC5]/60 rounded-[4px] bg-[#FFFFFF]">
            <div className="flex items-center gap-2 mb-4 text-[#023D1A]">
              <Smartphone className="w-5 h-5 stroke-[1.7]" />
              <h3 className="font-heading text-lg font-light text-[#111111]">
                Mobile Motion Profile (&le; 767px)
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs font-body text-[#444444]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                <span><strong>Text Only:</strong> Basic opacity fade + 8px rise, 380ms, no stagger, plays once.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#767676]" />
                <span><strong>Disabled:</strong> Page transition delays, section movement, image zooms, parallax.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#767676]" />
                <span><strong>Disabled:</strong> Pinned scrub sequences, sticky card effects, hover animations.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                <span><strong>Experience:</strong> Immediate touch feedback, instant page switching, rock-solid stability.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionReveal>

      {/* SECTION 5: STRICT VISUAL EXCLUSIONS AUDIT */}
      <SectionReveal className="mb-12">
        <div className="p-6 border border-[#BBDBC5]/50 bg-[#FAFCFB] rounded-[4px]">
          <h3 className="font-heading text-base font-light text-[#111111] mb-3">
            Architectural Exclusions Enforced:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs text-[#767676]">
            <span>✕ No AI sparkle icons</span>
            <span>✕ No mesh gradients</span>
            <span>✕ No neon or lime green</span>
            <span>✕ No glassmorphism</span>
            <span>✕ No floating 3D blobs</span>
            <span>✕ No custom cursors</span>
            <span>✕ No heavy card shadows</span>
            <span>✕ No pill-shaped containers</span>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
