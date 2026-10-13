import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../lib/motion'
import { EmeraldButton } from '../components/common/EmeraldButton'
import portraitImg from '../assets/portrait.png'

// ==========================================
// DATA STRUCTURE FOR TIMELINE MILESTONES
// ==========================================
interface ToolItem {
  name: string
  iconKey: 'HTML' | 'CSS' | 'Javascript' | 'Figma' | 'Photoshop' | 'Illustrator' | 'Davinci Resolve'
}

interface TimelineItemData {
  id: string
  type: 'milestone' | 'annotation'
  date?: string
  title: string
  label?: string
  description?: string
  detail?: string
  details?: string[]
  organisation?: string
  tools?: ToolItem[]
  side: 'left' | 'right'
  isTurningPoint?: boolean
}

const TIMELINE_DATA: TimelineItemData[] = [
  {
    id: 'milestone-1',
    type: 'milestone',
    date: '6 July 2004',
    title: 'The beginning',
    description: 'Born on 6 July 2004.',
    side: 'right',
  },
  {
    id: 'milestone-2',
    type: 'milestone',
    date: '2019',
    title: 'Completed 10th grade',
    detail: 'Marks obtained: 386 / 500',
    side: 'left',
  },
  {
    id: 'milestone-3',
    type: 'milestone',
    date: '2021',
    title: 'Completed 12th grade',
    details: ['Computer Science', 'Marks obtained: 386 / 500'],
    side: 'right',
  },
  {
    id: 'milestone-4',
    type: 'milestone',
    date: 'May 2021',
    title: 'Started graduation',
    description: 'Began my undergraduate studies in Computer Science.',
    side: 'left',
  },
  {
    id: 'annotation-1',
    type: 'annotation',
    title: 'Learning the foundations of the web',
    tools: [
      { name: 'HTML', iconKey: 'HTML' },
      { name: 'CSS', iconKey: 'CSS' },
      { name: 'JavaScript', iconKey: 'Javascript' },
    ],
    side: 'right',
  },
  {
    id: 'milestone-5',
    type: 'milestone',
    date: '2024',
    title: 'Completed graduation',
    detail: 'CGPA: 6.4',
    side: 'left',
  },
  {
    id: 'milestone-6',
    type: 'milestone',
    date: 'July 2024',
    label: 'A turning point',
    title: 'Started postgraduate studies',
    description:
      'This was when my interest in design became a serious pursuit. I began learning independently and practising with purpose.',
    isTurningPoint: true,
    side: 'right',
  },
  {
    id: 'annotation-2',
    type: 'annotation',
    title: 'Exploring my creative toolkit',
    tools: [
      { name: 'Figma', iconKey: 'Figma' },
      { name: 'Photoshop', iconKey: 'Photoshop' },
      { name: 'Illustrator', iconKey: 'Illustrator' },
      { name: 'DaVinci Resolve', iconKey: 'Davinci Resolve' },
    ],
    side: 'left',
  },
  {
    id: 'milestone-7',
    type: 'milestone',
    date: '2026',
    title: 'Completed postgraduate studies',
    detail: 'CGPA: 8',
    side: 'right',
  },
  {
    id: 'milestone-8',
    type: 'milestone',
    date: '22 June – 21 September 2026',
    title: 'UI/UX Designer Intern',
    organisation: 'Duhzine IT Solutions Pvt. Ltd.',
    description: 'Completed a three-month internship as a UI/UX Designer Intern.',
    side: 'left',
  },
]

// ==========================================
// VECTOR ICONS FOR ANNOTATION TOOLS
// ==========================================
const TOOL_ICONS: Record<string, React.ReactNode> = {
  HTML: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  ),
  CSS: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
  ),
  Javascript: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  Figma: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
    </svg>
  ),
  Photoshop: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z" />
    </svg>
  ),
  Illustrator: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" />
    </svg>
  ),
  'Davinci Resolve': (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565.977.523 1.544 1.166 1.889 1.96.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86-.396 1.202-1.146 1.946-2.063 2.462-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864zm4.172 7.922a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001zm-8.432.038a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z" />
    </svg>
  ),
}

// Numerical integration for exact cubic bezier arc length
function computeBezierSegmentLength(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
): number {
  const dy = (p2.y - p1.y) * 0.5
  const cp1 = { x: p1.x, y: p1.y + dy }
  const cp2 = { x: p2.x, y: p2.y - dy }
  let length = 0
  let prev = p1
  const steps = 14
  for (let s = 1; s <= steps; s++) {
    const t = s / steps
    const mt = 1 - t
    const x =
      mt * mt * mt * p1.x +
      3 * mt * mt * t * cp1.x +
      3 * mt * t * t * cp2.x +
      t * t * t * p2.x
    const y =
      mt * mt * mt * p1.y +
      3 * mt * mt * t * cp1.y +
      3 * mt * t * t * cp2.y +
      t * t * t * p2.y
    length += Math.hypot(x - prev.x, y - prev.y)
    prev = { x, y }
  }
  return length
}

export const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressPathRef = useRef<SVGPathElement>(null)
  const basePathRef = useRef<SVGPathElement>(null)

  const [svgPathD, setSvgPathD] = useState<string>('')
  const [svgHeight, setSvgHeight] = useState<number>(2400)
  const [svgWidth, setSvgWidth] = useState<number>(680)
  const [milestoneFractions, setMilestoneFractions] = useState<number[]>([])
  const [milestoneTargetScrolls, setMilestoneTargetScrolls] = useState<number[]>([])

  // Recompute pathway geometry and exact scroll targets for center alignment
  const updatePathwayGeometry = () => {
    const timelineEl = timelineRef.current
    if (!timelineEl) return

    const containerRect = timelineEl.getBoundingClientRect()
    const w = containerRect.width || 680
    const h = containerRect.height || 2400
    setSvgWidth(w)
    setSvgHeight(h)

    const isDesktop = window.innerWidth >= 1024
    const nodeSelector = isDesktop ? '[data-desktop-node]' : '[data-mobile-node]'
    const nodeEls = timelineEl.querySelectorAll<HTMLElement>(nodeSelector)
    if (!nodeEls.length) return

    const points: { x: number; y: number }[] = []
    const targetScrolls: number[] = []

    const currentScroll = window.scrollY
    const timelineDocTop = containerRect.top + currentScroll
    const focalCenter = window.innerHeight * 0.50 // Exact 50% viewport center focal zone

    nodeEls.forEach((el, index) => {
      const rect = el.getBoundingClientRect()
      const x = rect.left - containerRect.left + rect.width / 2
      const y = rect.top - containerRect.top + rect.height / 2
      points.push({ x, y })

      const nodeDocY = timelineDocTop + y
      // Exact window.scrollY where this node sits in the center of the screen
      const centerScroll =
        isDesktop && index === 0 ? 0 : Math.max(0, nodeDocY - focalCenter)
      targetScrolls.push(centerScroll)
    })

    if (points.length < 2) return

    setMilestoneTargetScrolls(targetScrolls)

    // Path starts DIRECTLY from Milestone 1 (not above)
    const firstPoint = points[0]
    let d = `M ${firstPoint.x} ${firstPoint.y}`

    const cumulativeLengths = [0]
    let totalCurveLength = 0

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i]
      const p2 = points[i + 1]
      const dy = (p2.y - p1.y) * 0.5
      d += ` C ${p1.x} ${p1.y + dy}, ${p2.x} ${p2.y - dy}, ${p2.x} ${p2.y}`

      const segLen = computeBezierSegmentLength(p1, p2)
      totalCurveLength += segLen
      cumulativeLengths.push(totalCurveLength)
    }

    // Continue pathway slightly downward past Milestone 8 into ending mist
    const lastPoint = points[points.length - 1]
    const endX = isDesktop ? w * 0.5 : lastPoint.x
    const endY = lastPoint.y + 140
    const exitDy = (endY - lastPoint.y) * 0.5
    d += ` C ${lastPoint.x} ${lastPoint.y + exitDy}, ${endX} ${endY - exitDy}, ${endX} ${endY}`

    const tailLen = Math.hypot(endX - lastPoint.x, endY - lastPoint.y) * 1.1
    const grandTotalLength = totalCurveLength + tailLen

    // Normalized fraction along the path for each milestone node
    const fractions = cumulativeLengths.map((len) => len / grandTotalLength)
    setMilestoneFractions(fractions)
    setSvgPathD(d)
  }

  // Effect to calculate geometry after mount and on resize
  useEffect(() => {
    const timer = setTimeout(() => {
      updatePathwayGeometry()
    }, 120)

    const handleResize = () => {
      updatePathwayGeometry()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ==========================================
  // VIEWPORT-CENTER SYNCHRONIZED PROGRESS & MAGNETIC DETENT
  // ==========================================
  useGSAP(
    () => {
      const container = containerRef.current
      const timelineEl = timelineRef.current
      const progressPath = progressPathRef.current
      if (
        !container ||
        !timelineEl ||
        !progressPath ||
        !svgPathD ||
        !milestoneFractions.length ||
        !milestoneTargetScrolls.length
      )
        return

      const totalLength = progressPath.getTotalLength()
      // Enormous gap (4x totalLength) guarantees SVG dash never wraps or repeats on mobile
      progressPath.style.strokeDasharray = `${totalLength} ${totalLength * 4}`
      progressPath.style.strokeDashoffset = `${totalLength}`

      const rows = timelineEl.querySelectorAll<HTMLElement>('.timeline-row')

      // Set initial states: Milestone 1 visible at start; Milestones 2-8 completely HIDDEN!
      rows.forEach((row, i) => {
        const cards = row.querySelectorAll<HTMLElement>('.timeline-card')
        const connectors = row.querySelectorAll<HTMLElement>('.timeline-connector')
        const nodeDots = row.querySelectorAll<HTMLElement>('.timeline-node-dot')

        if (!cards.length) return

        if (i === 0) {
          cards.forEach((card) => {
            gsap.set(card, { opacity: 1, scale: 1, y: 0 })
            card.classList.add('milestone-card-active-gradient')
          })
          connectors.forEach((c) => c.classList.add('connector-magnetized'))
          nodeDots.forEach((n) => n.classList.add('node-magnetized'))
        } else {
          // Completely hidden at the starting point!
          cards.forEach((card) => {
            gsap.set(card, { opacity: 0, scale: 0.82, y: 28, pointerEvents: 'none' })
            card.classList.remove('milestone-card-active-gradient', 'milestone-card-revealed')
          })
          connectors.forEach((c) => c.classList.remove('connector-magnetized'))
          nodeDots.forEach((n) => n.classList.remove('node-magnetized'))
        }
      })

      // Track revealed states for bouncy entrance triggering
      const revealedStates = new Array(rows.length).fill(false)
      revealedStates[0] = true

      // Viewport Center Driven Progress with Milestone Snapping & Continuous Card Emphasis:
      // Snaps to milestone when close to it on the path.
      // The current milestone holds its glowing emphasis until the next milestone is reached.
      const updateCenterProgress = () => {
        const curScroll = window.scrollY
        const N = milestoneTargetScrolls.length
        if (N === 0) return

        const S0 = milestoneTargetScrolls[0] || 0
        const SLast = milestoneTargetScrolls[N - 1] || 1

        let effectiveProgress = 0
        let activeMilestoneIndex = 0

        if (curScroll <= S0) {
          effectiveProgress = milestoneFractions[0] || 0
          activeMilestoneIndex = 0
        } else if (curScroll >= SLast) {
          effectiveProgress = milestoneFractions[N - 1] || 1
          activeMilestoneIndex = N - 1
        } else {
          for (let i = 0; i < N - 1; i++) {
            const sA = milestoneTargetScrolls[i]
            const sB = milestoneTargetScrolls[i + 1]
            if (curScroll >= sA && curScroll <= sB) {
              const segDelta = Math.max(1, sB - sA)
              const p = (curScroll - sA) / segDelta // 0.0 to 1.0 progress through this segment

              const fA = milestoneFractions[i] || 0
              const fB = milestoneFractions[i + 1] || 1

              // Milestone snapping:
              // When near milestone i (p <= 0.20): snap progress firmly to milestone i
              // When near milestone i+1 (p >= 0.80): snap progress firmly to next milestone i+1
              // In between: smooth travel along the curved SVG path
              if (p <= 0.20) {
                effectiveProgress = fA
                // Keep glowing emphasis on milestone i
                activeMilestoneIndex = i
              } else if (p >= 0.80) {
                effectiveProgress = fB
                // Reached next milestone! Turn off previous and turn on milestone i+1
                activeMilestoneIndex = i + 1
              } else {
                // Smooth transition between milestones
                const t = (p - 0.20) / (0.80 - 0.20) // Normalized 0 to 1
                const easedT = t * t * (3 - 2 * t) // Smoothstep acceleration/deceleration
                effectiveProgress = fA + easedT * (fB - fA)
                // "until then the old one should have glowing card emphasis"
                activeMilestoneIndex = i
              }
              break
            }
          }
        }

        const clampedProgress = Math.max(0, Math.min(1, effectiveProgress))

        // Update SVG stroke-dashoffset: snaps to node, travels smoothly between segments
        progressPath.style.strokeDashoffset = `${(1 - clampedProgress) * totalLength}`

        // Synchronize reveal and active gradient states with robust hysteresis
        rows.forEach((row, i) => {
          const cards = row.querySelectorAll<HTMLElement>('.timeline-card')
          const connectors = row.querySelectorAll<HTMLElement>('.timeline-connector')
          const nodeDots = row.querySelectorAll<HTMLElement>('.timeline-node-dot')

          if (!cards.length) return

          const sTarget = milestoneTargetScrolls[i] || 0
          const nodeFrac = milestoneFractions[i] || 0

          // Hysteretic reveal state:
          // Reveal when reaching near target (scroll >= sTarget - 30px or progress >= nodeFrac - 0.005)
          // ONLY hide if scrolling significantly above (scroll < sTarget - 90px and progress < nodeFrac - 0.02)
          if (i === 0) {
            revealedStates[0] = true
          } else {
            if (!revealedStates[i]) {
              if (curScroll >= sTarget - 30 || clampedProgress >= nodeFrac - 0.005) {
                revealedStates[i] = true
                cards.forEach((card) => {
                  gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    pointerEvents: 'auto',
                    duration: 0.65,
                    ease: 'back.out(1.75)',
                    overwrite: 'auto',
                  })
                })
              }
            } else {
              if (curScroll < sTarget - 90 && clampedProgress < nodeFrac - 0.02) {
                revealedStates[i] = false
                cards.forEach((card) => {
                  gsap.to(card, {
                    opacity: 0,
                    scale: 0.82,
                    y: 28,
                    pointerEvents: 'none',
                    duration: 0.28,
                    ease: 'power2.in',
                    overwrite: 'auto',
                  })
                })
              }
            }
          }

          // Active milestone highlighting (emerald gradient glow)
          const isCurrentlyActive = activeMilestoneIndex === i

          if (isCurrentlyActive) {
            cards.forEach((card) => {
              if (!card.classList.contains('milestone-card-active-gradient')) {
                card.classList.add('milestone-card-active-gradient')
                card.classList.remove('milestone-card-revealed')
              }
            })
            connectors.forEach((c) => {
              if (!c.classList.contains('connector-magnetized')) {
                c.classList.add('connector-magnetized')
              }
            })
            nodeDots.forEach((n) => {
              if (!n.classList.contains('node-magnetized')) {
                n.classList.add('node-magnetized')
              }
            })
          } else {
            cards.forEach((card) => {
              if (card.classList.contains('milestone-card-active-gradient')) {
                card.classList.remove('milestone-card-active-gradient')
              }
              if (revealedStates[i]) {
                if (!card.classList.contains('milestone-card-revealed')) {
                  card.classList.add('milestone-card-revealed')
                }
              } else {
                card.classList.remove('milestone-card-revealed')
              }
            })
            connectors.forEach((c) => {
              if (c.classList.contains('connector-magnetized')) {
                c.classList.remove('connector-magnetized')
              }
            })
            nodeDots.forEach((n) => {
              if (n.classList.contains('node-magnetized')) {
                n.classList.remove('node-magnetized')
              }
            })
          }
        })
      }

      // Drive progress smoothly with native window scroll and ScrollTrigger
      ScrollTrigger.create({
        trigger: timelineEl,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: updateCenterProgress,
      })

      // Run initial check
      updateCenterProgress()
    },
    { dependencies: [svgPathD, milestoneFractions, milestoneTargetScrolls], scope: containerRef }
  )

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF] min-h-screen text-[#111111] overflow-x-clip"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 lg:pt-32 pb-16">
        
        {/* ========================================== */}
        {/* MAIN ABOUT GRID: 35% Left Profile / 65% Right Timeline */}
        {/* ========================================== */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* ------------------------------------------ */}
          {/* 1. LEFT PROFILE PANEL (~35% desktop) */}
          {/* Uncropped background shape, perfectly responsive */}
          {/* ------------------------------------------ */}
          <aside
            aria-label="Personal Introduction"
            className="w-full lg:w-[35%] lg:max-w-[400px] shrink-0 lg:sticky lg:top-24 lg:self-start flex flex-col items-start text-left z-20 overflow-visible"
          >
            {/* Studio Portrait with Bioluminescent Jellyfish Treatment (Unclipped glow) */}
            <div className="relative w-full max-w-[270px] sm:max-w-[290px] h-[300px] sm:h-[330px] flex items-center justify-center mx-auto lg:mx-0 mb-6 sm:mb-8 overflow-visible">
              
              {/* Realistic Jellyfish Jelly Background Visual Effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible">
                {/* Layer 0: Ambient Sub-surface Glow Bloom (Generous radius, unclipped) */}
                <div
                  className="absolute w-[92%] h-[92%] rounded-full blur-[32px] opacity-45 bg-[radial-gradient(circle,_#22C55E_0%,_#16A34A_38%,_#0A6E35_68%,_transparent_76%)]"
                  aria-hidden="true"
                />

                {/* Layer 1: Secondary Outer Viscous Mantle */}
                <div
                  className="jelly-mantle-secondary absolute w-[86%] h-[86%] z-0 max-lg:animate-none"
                  aria-hidden="true"
                />

                {/* Layer 2: Primary Translucent Jelly Body */}
                <div
                  className="jelly-body-outer relative w-[80%] h-[80%] z-0 overflow-hidden flex items-center justify-center max-lg:animate-none"
                  aria-hidden="true"
                >
                  {/* Layer 3: Glowing Emerald Core */}
                  <div
                    className="jelly-emerald-core absolute w-[65%] h-[65%] rounded-full z-0 max-lg:animate-none"
                    aria-hidden="true"
                  />

                  {/* Layer 4: Upper-Left Wet Specular Highlight Glint */}
                  <div
                    className="jelly-specular-glint absolute top-[8%] left-[10%] w-[40%] h-[22%] z-10 max-lg:animate-none"
                    aria-hidden="true"
                  />

                  {/* Layer 5: Lower-Right Sub-surface Caustic Refraction */}
                  <div
                    className="jelly-rim-caustic absolute bottom-[10%] right-[12%] w-[34%] h-[20%] z-10"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Studio Portrait Image */}
              <img
                src={portraitImg}
                alt="Portrait of Surya"
                width={1070}
                height={1470}
                className="relative z-10 w-full h-auto object-contain max-h-[300px] sm:max-h-[330px] select-none pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Profile Heading */}
            <h1 className="font-heading font-light text-3xl sm:text-4xl text-[#111111] tracking-[-0.025em] mb-3">
              Surya
            </h1>

            {/* Sub-label */}
            <p className="font-ui font-normal text-xs sm:text-sm text-[#006B50] tracking-wide uppercase mb-4">
              Graphic | Product | Brand Designer
            </p>

            {/* Short Personal Description */}
            <p className="font-body font-light text-[#444444] text-[15px] sm:text-[16px] leading-[1.68] text-left mb-6 sm:mb-8">
              I’m a designer with a background in computer science, creating digital experiences and
              brand identities. My journey is shaped by curiosity, independent learning, and a love
              for thoughtful design.
            </p>

            {/* Action Buttons: Get in Touch & Download Résumé */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full mb-6">
              <EmeraldButton
                to="/contact"
                variant="primary"
                showArrow
                className="h-[44px] sm:h-[46px] px-2 sm:px-5 text-[13px] sm:text-sm w-full whitespace-nowrap justify-center"
              >
                Get in touch
              </EmeraldButton>
              <EmeraldButton
                href="/resume.pdf"
                variant="secondary"
                className="h-[44px] sm:h-[46px] px-2 sm:px-5 text-[13px] sm:text-sm w-full whitespace-nowrap justify-center"
              >
                Download résumé
              </EmeraldButton>
            </div>

            {/* Personal Social Links */}
            <div className="w-full pt-4 border-t border-[#E0EBE5]">
              <p className="font-ui text-xs text-[#777777] mb-3 font-normal">Connect</p>
              <div className="flex flex-wrap items-center gap-2">
                {/* 1. Instagram */}
                <a
                  href="https://www.instagram.com/imsuryahhh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8F6] hover:bg-[#EAF6EE] border border-[#E0EBE5] text-[#333333] hover:text-[#006B50] transition-colors duration-200 text-xs font-ui focus-visible:outline-2 focus-visible:outline-[#006B50]"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* 2. LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/surya0607"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8F6] hover:bg-[#EAF6EE] border border-[#E0EBE5] text-[#333333] hover:text-[#006B50] transition-colors duration-200 text-xs font-ui focus-visible:outline-2 focus-visible:outline-[#006B50]"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* 3. Mail */}
                <a
                  href="mailto:suryadzns@gmail.com"
                  aria-label="Email Contact"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8F6] hover:bg-[#EAF6EE] border border-[#E0EBE5] text-[#333333] hover:text-[#006B50] transition-colors duration-200 text-xs font-ui focus-visible:outline-2 focus-visible:outline-[#006B50]"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Mail</span>
                </a>

                {/* 4. WhatsApp */}
                <a
                  href="https://wa.me/918754255020"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8F6] hover:bg-[#EAF6EE] border border-[#E0EBE5] text-[#333333] hover:text-[#006B50] transition-colors duration-200 text-xs font-ui focus-visible:outline-2 focus-visible:outline-[#006B50]"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </aside>

          {/* ------------------------------------------ */}
          {/* 2. RIGHT TIMELINE COLUMN (~65% desktop) */}
          {/* Curvy Winding Pathway on Desktop & Mobile */}
          {/* ------------------------------------------ */}
          <section
            aria-label="Scrollable Life Journey"
            className="w-full lg:w-[65%] flex-1 min-w-0 relative pt-0 lg:pt-2 pb-12"
          >
            {/* Title above milestone 1: "Explore my journey" */}
            <header className="flex flex-col justify-end lg:min-h-[calc(50vh-188px)] pt-2 lg:pt-0 pb-6 sm:pb-8 lg:pb-12 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#006B50] text-xs font-ui font-medium tracking-wide uppercase mb-3 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006B50]" />
                Life Journey
              </span>
              <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-[-0.03em]">
                Explore my journey
              </h2>
            </header>

            {/* TIMELINE WRAPPER (Starts at Milestone 1) */}
            <div ref={timelineRef} className="relative w-full">
              {/* CONTINUOUS CURVY SVG WINDING PATHWAY */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                aria-hidden="true"
              >
                {svgPathD && (
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    preserveAspectRatio="none"
                  >
                    {/* Pale Green Base Track */}
                    <path
                      ref={basePathRef}
                      d={svgPathD}
                      fill="none"
                      stroke="#E0EBE5"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Emerald Scroll Progress Track */}
                    <path
                      ref={progressPathRef}
                      d={svgPathD}
                      fill="none"
                      stroke="#006B50"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

            {/* SEMANTIC ORDERED LIST OF MILESTONES */}
            <ol className="relative z-10 flex flex-col space-y-24 sm:space-y-32 lg:space-y-40">
              {TIMELINE_DATA.map((item, idx) => {
                const isEven = item.side === 'right'
                const isTurningPoint = item.isTurningPoint
                const mobileNodeX = idx % 2 === 0 ? 'left-[26px]' : 'left-[42px]'

                return (
                  <li
                    key={item.id}
                    data-turning-point={isTurningPoint ? 'true' : 'false'}
                    className="timeline-row relative w-full flex flex-col lg:flex-row items-start lg:items-center min-h-[130px] sm:min-h-[160px] lg:min-h-[190px]"
                  >
                    {/* ========================================== */}
                    {/* DESKTOP VIEW (>= 1024px): Alternating S-Curves */}
                    {/* ========================================== */}
                    <div className="hidden lg:flex items-center w-full relative">
                      {isEven ? (
                        <>
                          <div className="w-[36%] shrink-0" />

                          {/* Desktop Node */}
                          <div
                            data-desktop-node
                            className="absolute left-[36%] -translate-x-1/2 flex items-center justify-center z-20"
                          >
                            <div
                              className={`rounded-full bg-white flex items-center justify-center shadow-xs transition-transform duration-300 ${
                                isTurningPoint
                                  ? 'w-6 h-6 border-2 border-[#006B50]'
                                  : 'w-4.5 h-4.5 border-[1.5px] border-[#006B50]'
                              }`}
                            >
                              <div
                                className={`timeline-node-dot rounded-full bg-[#006B50] transition-all duration-300 ${
                                  isTurningPoint ? 'w-2.5 h-2.5' : 'w-2 h-2'
                                }`}
                              />
                            </div>
                          </div>

                          {/* Desktop Connector */}
                          <div
                            aria-hidden="true"
                            className="timeline-connector absolute left-[36%] w-[7%] h-[1.5px] bg-[#E0EBE5] transition-all duration-300 z-10"
                          />

                          {/* Right Card */}
                          <div className="w-[57%] ml-auto pl-4">
                            <MilestoneCard item={item} isTurningPoint={isTurningPoint} />
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Left Card */}
                          <div className="w-[57%] mr-auto pr-4">
                            <MilestoneCard item={item} isTurningPoint={isTurningPoint} isLeft />
                          </div>

                          {/* Desktop Connector */}
                          <div
                            aria-hidden="true"
                            className="timeline-connector absolute right-[36%] w-[7%] h-[1.5px] bg-[#E0EBE5] transition-all duration-300 z-10"
                          />

                          {/* Desktop Node */}
                          <div
                            data-desktop-node
                            className="absolute left-[64%] -translate-x-1/2 flex items-center justify-center z-20"
                          >
                            <div
                              className={`rounded-full bg-white flex items-center justify-center shadow-xs transition-transform duration-300 ${
                                isTurningPoint
                                  ? 'w-6 h-6 border-2 border-[#006B50]'
                                  : 'w-4.5 h-4.5 border-[1.5px] border-[#006B50]'
                              }`}
                            >
                              <div
                                className={`timeline-node-dot rounded-full bg-[#006B50] transition-all duration-300 ${
                                  isTurningPoint ? 'w-2.5 h-2.5' : 'w-2 h-2'
                                }`}
                              />
                            </div>
                          </div>

                          <div className="w-[36%] shrink-0" />
                        </>
                      )}
                    </div>

                    {/* ========================================== */}
                    {/* MOBILE VIEW (< 1024px): Curvy Winding Route */}
                    {/* ========================================== */}
                    <div className="lg:hidden flex items-start w-full relative pl-16">
                      {/* Curvy Node along Winding Route */}
                      <div
                        data-mobile-node
                        className={`absolute ${mobileNodeX} -translate-x-1/2 top-4 flex items-center justify-center z-20`}
                      >
                        <div
                          className={`rounded-full bg-white flex items-center justify-center shadow-xs ${
                            isTurningPoint
                              ? 'w-5 h-5 border-2 border-[#006B50]'
                              : 'w-4 h-4 border-[1.5px] border-[#006B50]'
                          }`}
                        >
                          <div
                            className={`timeline-node-dot rounded-full bg-[#006B50] ${
                              isTurningPoint ? 'w-2 h-2' : 'w-1.5 h-1.5'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Mobile Connector */}
                      <div
                        aria-hidden="true"
                        className={`timeline-connector absolute ${mobileNodeX} top-6 w-[24px] h-[1.5px] bg-[#E0EBE5] transition-all duration-300 z-10`}
                      />

                      {/* Mobile Card */}
                      <div className="w-full">
                        <MilestoneCard item={item} isTurningPoint={isTurningPoint} />
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
            </div>

            {/* ========================================== */}
            {/* 10. JOURNEY ENDING */}
            {/* Soft Clouded Fade into White Mist & Closing Message */}
            {/* ========================================== */}
            <div className="relative w-full pt-20 lg:pt-28 pb-8 text-center">
              {/* Soft mist fade into the white background */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-28 pointer-events-none select-none bg-gradient-to-b from-transparent via-white/80 to-white"
              />

              <div className="relative z-10 max-w-md mx-auto px-4">
                <h2 className="font-heading font-light text-2xl sm:text-3xl text-[#111111] tracking-[-0.02em] mb-2">
                  More to come.
                </h2>
                <p className="font-body font-light text-[#555555] text-sm sm:text-base">
                  Still learning. Still creating.
                </p>
              </div>
            </div>

          </section>

        </div>
      </div>
    </main>
  )
}

// ==========================================
// COMPONENT: MILESTONE & ANNOTATION CARD
// Clean white initial state, transforms into glowing emerald gradient when active
// ==========================================
interface MilestoneCardProps {
  item: TimelineItemData
  isTurningPoint?: boolean
  isLeft?: boolean
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({
  item,
  isTurningPoint,
  isLeft,
}) => {
  if (item.type === 'annotation') {
    return (
      <div
        className={`timeline-card relative bg-[#FFFFFF] border border-[#E0EBE5] rounded-xl p-4 sm:p-5 shadow-[0_2px_14px_rgba(0,0,0,0.03)] transition-all duration-350 ${
          isLeft ? 'text-left' : 'text-left'
        }`}
      >
        <p className="milestone-title font-ui font-normal text-xs text-[#006B50] uppercase tracking-wider mb-3">
          {item.title}
        </p>

        {item.tools && item.tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {item.tools.map((tool) => (
              <div
                key={tool.name}
                className="tool-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F9FBFA] border border-[#E0EBE5] text-[#222222] text-xs font-ui shadow-2xs transition-colors duration-250"
              >
                <span className="text-[#006B50]">{TOOL_ICONS[tool.iconKey]}</span>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <article
      className={`timeline-card relative bg-[#FFFFFF] rounded-xl transition-all duration-350 ${
        isTurningPoint
          ? 'p-5 sm:p-6 border-2 border-[#006B50]/40 shadow-[0_4px_22px_rgba(0,0,0,0.04)] ring-1 ring-[#006B50]/20'
          : 'p-4 sm:p-5 border border-[#E0EBE5] shadow-[0_2px_14px_rgba(0,0,0,0.03)]'
      }`}
    >
      {/* Turning Point Badge (Milestone 6) */}
      {item.label && (
        <div className="mb-2.5">
          <span className="milestone-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF6EE] text-[#006B50] text-[11px] font-ui font-medium tracking-wide uppercase transition-colors duration-250">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006B50]" />
            {item.label}
          </span>
        </div>
      )}

      {/* Date */}
      {item.date && (
        <time className="milestone-date block font-ui text-[12px] sm:text-[13px] font-medium text-[#006B50] tracking-wide mb-1 select-none transition-colors duration-250">
          {item.date}
        </time>
      )}

      {/* Title */}
      <h3
        className={`milestone-heading font-heading font-light text-[#111111] leading-snug mb-1.5 transition-colors duration-250 ${
          isTurningPoint ? 'text-lg sm:text-xl font-normal' : 'text-base sm:text-[17px]'
        }`}
      >
        {item.title}
      </h3>

      {/* Organisation */}
      {item.organisation && (
        <p className="milestone-org font-ui text-xs text-[#555555] font-medium mb-1.5 transition-colors duration-250">
          {item.organisation}
        </p>
      )}

      {/* Description */}
      {item.description && (
        <p className="milestone-desc font-body font-light text-[13.5px] sm:text-[14.5px] text-[#333333] leading-relaxed transition-colors duration-250">
          {item.description}
        </p>
      )}

      {/* Single Detail */}
      {item.detail && (
        <p className="milestone-detail font-body font-light text-[13.5px] sm:text-[14px] text-[#444444] mt-1 font-medium transition-colors duration-250">
          {item.detail}
        </p>
      )}

      {/* Multiple Details */}
      {item.details && item.details.length > 0 && (
        <div className="mt-1 space-y-0.5">
          {item.details.map((detail, dIdx) => (
            <p
              key={dIdx}
              className="milestone-detail font-body font-light text-[13.5px] sm:text-[14px] text-[#444444] transition-colors duration-250"
            >
              {detail}
            </p>
          ))}
        </div>
      )}
    </article>
  )
}
