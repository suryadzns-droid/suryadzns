import React, { useState, useEffect } from 'react'
import {
  Heart,
  MessageCircle,
  Layers,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'

// Clean vector Instagram icon
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export interface InstagramChild {
  id: string
  mediaType: 'IMAGE' | 'VIDEO'
  mediaUrl: string
  thumbnailUrl?: string
  sizes?: {
    small?: { mediaUrl: string }
    medium?: { mediaUrl: string }
    large?: { mediaUrl: string }
    full?: { mediaUrl: string }
  }
}

export interface InstagramPost {
  id: string
  timestamp: string
  permalink: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  mediaUrl: string
  thumbnailUrl?: string
  caption: string
  prunedCaption?: string
  likeCount: number
  commentsCount: number
  hashtags?: string[]
  children?: InstagramChild[]
  sizes?: {
    small?: { mediaUrl: string }
    medium?: { mediaUrl: string }
    large?: { mediaUrl: string }
    full?: { mediaUrl: string }
  }
}

export interface BeholdFeedData {
  biography?: string
  profilePictureUrl?: string
  website?: string
  followersCount?: number
  followsCount?: number
  posts: InstagramPost[]
}

// Initial bundle from Behold for @grafino_studio (Instant 0ms first render)
const INITIAL_DATA: BeholdFeedData = {
  biography: "Branding, Websites & Videography.\nBuilt to be Remembered \ncheck out ↓",
  profilePictureUrl:
    'https://cdn2.behold.pictures/QMKWUtBwn6Y0EpnaukSv0R9GK8f1/17841476829446438/profile.webp',
  website: 'https://linktr.ee/grafino.studio',
  followersCount: 27,
  followsCount: 2,
  posts: [
    {
      id: '17909328885481598',
      timestamp: '2026-10-12T04:30:03+0000',
      permalink: 'https://www.instagram.com/p/DeYYO07gR4o/',
      mediaType: 'CAROUSEL_ALBUM',
      mediaUrl:
        'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxd3cybGJ1In0.jpg?class=squareLarge',
      caption:
        'Homegrown flavours. A fresh digital home. 🌿\n\nAn e-commerce website for Homemade Foods Madurai, making every step from browsing to ordering feel simple.\n\nDesigned & developed by Grafino Studio.\n\nA taste of home, just a click away.\nhomemadefoodmadurai.com\n\n#ecommerce #localbusiness #homefood #grafino #grafinostudio',
      prunedCaption:
        'Homegrown flavours. A fresh digital home. 🌿\n\nAn e-commerce website for Homemade Foods Madurai, making every step from browsing to ordering feel simple.\n\nDesigned & developed by Grafino Studio.\n\nA taste of home, just a click away.\nhomemadefoodmadurai.com',
      likeCount: 10,
      commentsCount: 0,
      hashtags: ['ecommerce', 'localbusiness', 'homefood', 'grafino', 'grafinostudio'],
      children: [
        {
          mediaType: 'IMAGE',
          id: '18105625349623656',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJkeWE5NmwiLCJjIjoiMTgxMDU2MjUzNDk2MjM2NTYifQ.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18225532243333624',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIyd2xvOTMiLCJjIjoiMTgyMjU1MzIyNDMzMzM2MjQifQ.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '17998046013001874',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxbzBzcWM3IiwiYyI6IjE3OTk4MDQ2MDEzMDAxODc0In0.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18126506026660851',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJ6cTU4YzEiLCJjIjoiMTgxMjY1MDYwMjY2NjA4NTEifQ.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18034693964666893',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxdG9kdXZ2IiwiYyI6IjE4MDM0NjkzOTY0NjY2ODkzIn0.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18135139369649036',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxYzc1Z2Y3IiwiYyI6IjE4MTM1MTM5MzY5NjQ5MDM2In0.jpg?class=squareLarge',
        },
      ],
    },
    {
      id: '17967434031191435',
      timestamp: '2026-10-09T05:09:47+0000',
      permalink: 'https://www.instagram.com/p/DeQuZYygYgb/',
      mediaType: 'CAROUSEL_ALBUM',
      mediaUrl:
        'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxZ2ozeW43In0.jpg?class=squareLarge',
      caption:
        'We’ve been quiet. Now we’re here.\n\nIntroducing Grafino Studio.\nBuilt to be Remembered.\n\nWe create brand identities, websites, and videos that give your business a voice and a presence.\n\nHave an idea? Let’s bring it to life.\nExplore grafino.studio or DM us.\n\n#Grafino #Grafinostudio #branding #graphicdesign #designstudio',
      prunedCaption:
        'We’ve been quiet. Now we’re here.\n\nIntroducing Grafino Studio.\nBuilt to be Remembered.\n\nWe create brand identities, websites, and videos that give your business a voice and a presence.\n\nHave an idea? Let’s bring it to life.\nExplore grafino.studio or DM us.',
      likeCount: 11,
      commentsCount: 0,
      hashtags: ['Grafino', 'Grafinostudio', 'branding', 'graphicdesign', 'designstudio'],
      children: [
        {
          mediaType: 'IMAGE',
          id: '18354631024172277',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJiOWRoNW0iLCJjIjoiMTgzNTQ2MzEwMjQxNzIyNzcifQ.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '17922076512225896',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI1MW5kOXAiLCJjIjoiMTc5MjIwNzY1MTIyMjU4OTYifQ.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18111446513165653',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI4eWF0djMiLCJjIjoiMTgxMTE0NDY1MTMxNjU2NTMifQ.jpg?class=squareLarge',
        },
        {
          mediaType: 'VIDEO',
          id: '17911519413471674',
          mediaUrl:
            'https://scontent-ord5-1.cdninstagram.com/o1/v/t16/f2/m84/AQOOeUkV_zw-YaxY9Kb4lnRyPgGGTUOEtUN2za286pVlMiWFrlJj3jsmGjXKaGpI2H2X8btJ3iFeAZ4mIT0H9oATuBXOtmWL27ba2ME.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-ord5-1.cdninstagram.com&_nc_ohc=8Y--UGsjFIAQ7kNvwHNfybj&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0FST1VTRUxfSVRFTS5DMy43MjAuZGFzaF9iYXNlbGluZV8xX3YxIiwieHB2X2Fzc2V0X2lkIjoxNzkwODQ5Mjc5NDU2MDk4MiwiYXNzZXRfYWdlX2RheXMiOjUsInZpX3VzZWNhc2VfaWQiOjEwMTQ2LCJkdXJhdGlvbl9zIjo1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=edfd4397924b88b&_nc_vs=HBkcFQIYTGlnX2JhY2tmaWxsX3RpbWVsaW5lX3ZvZC8yOTdBOUI5ODk2QTA0ODVFQUQ2RjFEMkZCMTkyRUU2M192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmrIfc97zrzz8VAigCQzMsF0AX3S8an753GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXuB2XEngEA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQIt-JUFI_0najLC0UqbneAn0J1rJ9rQ29hlFjp4Q9wPccsh17U9Zi3bbhi1OEbgvZ8Ysd9ym0Tltg&oh=00_AQOU0VmarQdhO4N9P-DiVP7RDnxIKFjCHn_8cfvDog6Skw&oe=6AD0F0D6',
          thumbnailUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNzU3MHAwIiwiYyI6IjE3OTExNTE5NDEzNDcxNjc0In0.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18235204258320875',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxbHdkaGV4IiwiYyI6IjE4MjM1MjA0MjU4MzIwODc1In0.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18098706623395206',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxMjZpYmZnIiwiYyI6IjE4MDk4NzA2NjIzMzk1MjA2In0.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18122488069903450',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNDYzN3gxIiwiYyI6IjE4MTIyNDg4MDY5OTAzNDUwIn0.jpg?class=squareLarge',
        },
        {
          mediaType: 'IMAGE',
          id: '18057970508557694',
          mediaUrl:
            'https://hop.behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJka3EwaG4iLCJjIjoiMTgwNTc5NzA1MDg1NTc2OTQifQ.jpg?class=squareLarge',
        },
      ],
    },
  ],
}

export const CreativesFeed: React.FC = () => {
  const [feedData, setFeedData] = useState<BeholdFeedData>(INITIAL_DATA)
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

  // Auto-fetch fresh posts in background from Behold
  useEffect(() => {
    let isMounted = true
    const fetchLatest = async () => {
      try {
        const res = await fetch('https://feeds.behold.so/8DMfgshrUWRt6carAKIw')
        if (!res.ok) return
        const data = await res.json()
        if (isMounted && data && Array.isArray(data.posts)) {
          setFeedData(data)
        }
      } catch {
        // Fallback to initial bundle gracefully
      }
    }
    fetchLatest()
    return () => {
      isMounted = false
    }
  }, [])

  // Handle modal keyboard Esc & arrow keys
  useEffect(() => {
    if (!selectedPost) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPost(null)
      } else if (e.key === 'ArrowRight') {
        const slidesCount = selectedPost.children?.length || 1
        setActiveSlideIndex((prev) => (prev + 1) % slidesCount)
      } else if (e.key === 'ArrowLeft') {
        const slidesCount = selectedPost.children?.length || 1
        setActiveSlideIndex((prev) => (prev - 1 + slidesCount) % slidesCount)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedPost])

  const openModal = (post: InstagramPost) => {
    setSelectedPost(post)
    setActiveSlideIndex(0)
  }

  const closeModal = () => {
    setSelectedPost(null)
    setActiveSlideIndex(0)
  }

  // Active slide details for modal
  const slides: InstagramChild[] =
    selectedPost?.children && selectedPost.children.length > 0
      ? selectedPost.children
      : selectedPost
      ? [
          {
            id: selectedPost.id,
            mediaType: (selectedPost.mediaType === 'VIDEO' ? 'VIDEO' : 'IMAGE') as 'IMAGE' | 'VIDEO',
            mediaUrl: selectedPost.mediaUrl,
            sizes: selectedPost.sizes,
          },
        ]
      : []

  const currentSlide: InstagramChild | undefined = slides[activeSlideIndex]

  return (
    <div className="w-full">
      {/* ========================================== */}
      {/* INSTAGRAM PROFILE HEADER BANNER */}
      {/* ========================================== */}
      <div className="bg-[#FFFFFF] border border-[#E0EBE5] rounded-2xl p-6 sm:p-8 mb-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-[#0A6E35] to-[#EAF6EE]">
            <img
              src={feedData.profilePictureUrl || INITIAL_DATA.profilePictureUrl}
              alt="Grafino Studio Instagram Avatar"
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading font-medium text-lg sm:text-xl text-[#111111]">
                @grafino_studio
              </h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EAF6EE] text-[#0A6E35] text-[11px] font-ui font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6E35]" />
                Creative Studio
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#666666] whitespace-pre-line leading-relaxed max-w-md">
              {feedData.biography || INITIAL_DATA.biography}
            </p>

            <div className="flex items-center gap-4 mt-2 text-xs font-ui text-[#888888]">
              <span>
                <strong className="text-[#111111] font-semibold">{feedData.posts.length}</strong> posts
              </span>
              <span>
                <strong className="text-[#111111] font-semibold">{feedData.followersCount || 27}</strong> followers
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <a
          href="https://www.instagram.com/grafino_studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EAF6EE] hover:bg-[#0A6E35] text-[#0A6E35] hover:text-white font-ui text-sm font-medium transition-all duration-200 border border-[#0A6E35]/20 hover:border-transparent shrink-0"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>Follow on Instagram</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      </div>

      {/* ========================================== */}
      {/* INSTAGRAM POSTS GRID */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {feedData.posts.map((post) => {
          const displayUrl =
            post.sizes?.large?.mediaUrl ||
            post.children?.[0]?.sizes?.large?.mediaUrl ||
            post.children?.[0]?.mediaUrl ||
            post.mediaUrl

          const isCarousel = post.mediaType === 'CAROUSEL_ALBUM' || (post.children && post.children.length > 1)
          const isVideo = post.mediaType === 'VIDEO'

          return (
            <article
              key={post.id}
              onClick={() => openModal(post)}
              className="group cursor-pointer bg-[#FFFFFF] border border-[#E0EBE5] rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#0A6E35]/40 hover:shadow-[0_8px_24px_rgba(10,110,53,0.06)] transition-all duration-300 flex flex-col"
            >
              {/* Media Container with 1:1 Aspect Ratio */}
              <div className="relative aspect-square w-full bg-[#F4F6F5] overflow-hidden select-none">
                <img
                  src={displayUrl}
                  alt={post.caption.slice(0, 80)}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Badge: Carousel / Video */}
                {isCarousel && (
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white shadow-xs">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                )}
                {isVideo && (
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white shadow-xs">
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </div>
                )}

                {/* Hover Glass Overlay */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center gap-6 text-white font-ui text-sm font-medium backdrop-blur-[2px]">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white stroke-white" />
                    <span>{post.likeCount}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white stroke-white" />
                    <span>{post.commentsCount}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Post Details */}
              <div className="p-4 sm:p-5 flex flex-col justify-between grow">
                <p className="font-body text-[13.5px] text-[#444444] line-clamp-3 leading-relaxed mb-3">
                  {post.prunedCaption || post.caption}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#F0F2F1] text-xs font-ui text-[#888888]">
                  <span>
                    {new Date(post.timestamp).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="text-[#0A6E35] font-medium group-hover:underline inline-flex items-center gap-1">
                    Preview post →
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* ========================================== */}
      {/* INTERACTIVE LIGHTBOX MODAL */}
      {/* ========================================== */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[1050px] max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/20 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#222222] shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT / TOP: Media Presentation Stage */}
            <div className="relative w-full lg:w-[60%] aspect-square lg:aspect-auto lg:min-h-[560px] bg-[#111111] flex items-center justify-center select-none overflow-hidden">
              {currentSlide?.mediaType === 'VIDEO' ? (
                <video
                  key={currentSlide.id}
                  src={currentSlide.mediaUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  key={currentSlide?.id}
                  src={
                    currentSlide?.sizes?.full?.mediaUrl ||
                    currentSlide?.sizes?.large?.mediaUrl ||
                    currentSlide?.mediaUrl
                  }
                  alt={selectedPost.caption.slice(0, 60)}
                  className="w-full h-full object-contain"
                />
              )}

              {/* Navigation Arrows for Carousel */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveSlideIndex(
                        (prev) => (prev - 1 + slides.length) % slides.length
                      )
                    }
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-150 cursor-pointer z-20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveSlideIndex((prev) => (prev + 1) % slides.length)
                    }
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-150 cursor-pointer z-20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Dots Indicator */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlideIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                          i === activeSlideIndex
                            ? 'w-6 bg-white'
                            : 'w-1.5 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* RIGHT / BOTTOM: Post Details & Caption */}
            <div className="w-full lg:w-[40%] p-6 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-none">
              <div>
                {/* Header Profile Info */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0F2F1] mb-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={feedData.profilePictureUrl || INITIAL_DATA.profilePictureUrl}
                      alt="Grafino Studio"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-heading font-medium text-[15px] text-[#111111] leading-none mb-1">
                        grafino_studio
                      </h4>
                      <p className="text-[12px] font-ui text-[#888888]">
                        Grafino - Design Studio
                      </p>
                    </div>
                  </div>

                  {slides.length > 1 && (
                    <span className="text-xs font-ui font-medium text-[#777777] bg-[#F4F6F5] px-2.5 py-1 rounded-full">
                      {activeSlideIndex + 1} / {slides.length}
                    </span>
                  )}
                </div>

                {/* Caption Content */}
                <div className="font-body text-[14px] text-[#333333] leading-relaxed whitespace-pre-line mb-6">
                  {selectedPost.caption}
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="pt-4 border-t border-[#F0F2F1] mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm font-ui text-[#444444]">
                    <span className="flex items-center gap-1.5 font-medium text-[#0A6E35]">
                      <Heart className="w-4 h-4 fill-[#0A6E35]" />
                      {selectedPost.likeCount} likes
                    </span>
                    <span className="text-[#888888] text-xs">
                      {new Date(selectedPost.timestamp).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                {/* Direct Link to View On Instagram */}
                <a
                  href={selectedPost.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A6E35] hover:bg-[#085529] text-white font-ui text-sm font-medium transition-colors duration-150 shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>View Post on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
