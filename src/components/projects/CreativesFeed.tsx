import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'



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
    document.documentElement.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
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
      {/* PURE IMAGES GRID */}
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
              className="group cursor-pointer bg-[#F4F6F5] border border-[#E0EBE5] rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#0A6E35]/40 hover:shadow-[0_8px_24px_rgba(10,110,53,0.08)] transition-all duration-300"
            >
              <div className="relative aspect-square w-full bg-[#F4F6F5] overflow-hidden select-none">
                <img
                  src={displayUrl}
                  alt="Grafino Creative Work"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle Media Badges */}
                {isCarousel && (
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white shadow-xs pointer-events-none">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                )}
                {isVideo && (
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white shadow-xs pointer-events-none">
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {/* ========================================== */}
      {/* PURE IMAGE LIGHTBOX MODAL (PORTAL TO BODY) */}
      {/* ========================================== */}
      {selectedPost &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-fade-in touch-none select-none"
            onClick={closeModal}
          >
            {/* Top Right Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close image preview"
              className="fixed top-5 right-5 z-[10000] w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Exactly Centered Media Stage */}
            <div
              className="relative w-full h-full max-w-[92vw] max-h-[82vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {currentSlide?.mediaType === 'VIDEO' ? (
                <video
                  key={currentSlide.id}
                  src={currentSlide.mediaUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl mx-auto block"
                />
              ) : (
                <img
                  key={currentSlide?.id}
                  src={
                    currentSlide?.sizes?.full?.mediaUrl ||
                    currentSlide?.sizes?.large?.mediaUrl ||
                    currentSlide?.mediaUrl
                  }
                  alt="Grafino Creative Artwork"
                  className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl mx-auto block"
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
                    className="fixed left-3 sm:absolute sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 sm:bg-black/75 hover:bg-black/90 active:scale-90 text-white flex items-center justify-center transition-all cursor-pointer z-30 shadow-lg border border-white/10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveSlideIndex((prev) => (prev + 1) % slides.length)
                    }
                    aria-label="Next slide"
                    className="fixed right-3 sm:absolute sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 sm:bg-black/75 hover:bg-black/90 active:scale-90 text-white flex items-center justify-center transition-all cursor-pointer z-30 shadow-lg border border-white/10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Dots Indicator */}
                  <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-1.5 z-30 pointer-events-auto">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlideIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                          i === activeSlideIndex
                            ? 'w-6 bg-white'
                            : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
