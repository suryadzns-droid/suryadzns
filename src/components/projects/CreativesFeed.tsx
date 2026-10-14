import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'



export interface InstagramSize {
  width?: number
  height?: number
  mediaUrl: string
}

export interface InstagramChild {
  id: string
  mediaType: 'IMAGE' | 'VIDEO'
  mediaUrl: string
  thumbnailUrl?: string
  colorPalette?: Record<string, string>
  sizes?: {
    small?: InstagramSize
    medium?: InstagramSize
    large?: InstagramSize
    full?: InstagramSize
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
  mentions?: string[]
  visibility?: string
  colorPalette?: Record<string, string>
  children?: InstagramChild[]
  sizes?: {
    small?: InstagramSize
    medium?: InstagramSize
    large?: InstagramSize
    full?: InstagramSize
  }
}

export interface BeholdFeedData {
  username?: string
  biography?: string
  profilePictureUrl?: string
  website?: string
  followersCount?: number
  followsCount?: number
  hashtags?: string[]
  posts: InstagramPost[]
}

// Initial bundle from Behold for @grafino_studio (Instant 0ms first render)
const INITIAL_DATA: BeholdFeedData = {
  "username": "grafino_studio",
  "biography": "Branding, Websites & Videography.\nBuilt to be Remembered \ncheck out ↓",
  "profilePictureUrl": "https://cdn2.behold.pictures/QMKWUtBwn6Y0EpnaukSv0R9GK8f1/17841476829446438/profile.webp",
  "website": "https://linktr.ee/grafino.studio",
  "followersCount": 27,
  "followsCount": 2,
  "hashtags": [],
  "posts": [
    {
      "id": "17909328885481598",
      "caption": "Homegrown flavours. A fresh digital home. 🌿\n\nAn e-commerce website for Homemade Foods Madurai, making every step from browsing to ordering feel simple.\n\nDesigned & developed by Grafino Studio.\n\nA taste of home, just a click away.\nhomemadefoodmadurai.com\n\n#ecommerce #localbusiness #homefood #grafino #grafinostudio",
      "permalink": "https://www.instagram.com/p/DeYYO07gR4o/",
      "timestamp": "2026-10-12T04:30:03+0000",
      "likeCount": 10,
      "commentsCount": 0,
      "mediaType": "CAROUSEL_ALBUM",
      "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/842308472_17908738161560982_7755980073319596541_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=FnJQ0F7yYlgQ7kNvwHDR9FX&_nc_oc=Adr8qBaP9nab8J9_y6LCVua_Ntyg3HNP-nMRiOO7jObSWSCkjHrSCfUnjLnNAKWra2o&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQK49-VMSixi6ix1AQBE4XdJ547lTxBZIyY3h2G4sI6Z0YgDXphzUGOcxw4iFxD54D2-CB2jCLMx5A&oh=00_AQOpnMNFvJoowV3nOLaLoyVdWm7_BxKPELNKgcLjoInRxg&oe=6AD50781",
      "children": [
        {
          "id": "18105625349623656",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/842308472_17908738161560982_7755980073319596541_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=FnJQ0F7yYlgQ7kNvwHDR9FX&_nc_oc=Adr8qBaP9nab8J9_y6LCVua_Ntyg3HNP-nMRiOO7jObSWSCkjHrSCfUnjLnNAKWra2o&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQJ0lnGoTrqcNShuVbrm-uuS8vHUppy9RWGPH6Bax3OkAraX8zAzVabOvUrUqTV7T5ylDSpWZjKKjg&oh=00_AQOhAgdbFmel15ZruXa5xFa-zt5McPMNVO32_1LjHdlbXQ&oe=6AD50781",
          "colorPalette": {
            "dominant": "134,138,129",
            "vibrant": "85,175,251",
            "vibrantDark": "106,59,20",
            "vibrantLight": "128,193,251",
            "muted": "120,135,91",
            "mutedLight": "150,192,198",
            "mutedDark": "41,70,66"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJkeWE5NmwiLCJjIjoiMTgxMDU2MjUzNDk2MjM2NTYifQ.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJkeWE5NmwiLCJjIjoiMTgxMDU2MjUzNDk2MjM2NTYifQ.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJkeWE5NmwiLCJjIjoiMTgxMDU2MjUzNDk2MjM2NTYifQ.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJkeWE5NmwiLCJjIjoiMTgxMDU2MjUzNDk2MjM2NTYifQ.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18225532243333624",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/844860404_17908738176560982_2282081884933761514_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=EZcp5dW-TmoQ7kNvwEDF6b3&_nc_oc=AdrsKrJONk1NgOKPeWY1fEv1oL9CtlriQ1k9spLULwDGw_9VjyNkJfzgwrTF0rIqbzQ&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQJ4U0UwBCdsTctKZb1sndXDbQLna0Zsth0ydwh3q7r4egEotkiszOcwZ5Gf0yMREDHogJu-YUw25A&oh=00_AQO7hIzILKUTdnfTxeVX0zYA0GNHPdqvp7-I2haQ_mvVQA&oe=6AD516A8",
          "colorPalette": {
            "dominant": "172,172,172",
            "vibrant": "152,220,39",
            "vibrantDark": "84,90,18",
            "vibrantLight": "201,237,141",
            "muted": "141,151,104",
            "mutedLight": "217,213,208",
            "mutedDark": "90,72,56"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIyd2xvOTMiLCJjIjoiMTgyMjU1MzIyNDMzMzM2MjQifQ.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIyd2xvOTMiLCJjIjoiMTgyMjU1MzIyNDMzMzM2MjQifQ.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIyd2xvOTMiLCJjIjoiMTgyMjU1MzIyNDMzMzM2MjQifQ.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIyd2xvOTMiLCJjIjoiMTgyMjU1MzIyNDMzMzM2MjQifQ.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "17998046013001874",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/842492084_17908738197560982_6508189403225812917_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=C8r_G_AEPzkQ7kNvwHIery5&_nc_oc=AdqyAi6CIwZe6ki0ynJTCiiC-UwpPqIYjGDiT04dbLHdAyzAKsgneXHIQB2myF0EeUY&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQL97b3bsyG-EISg84mGMjAQlCyKbgYTtJ6HBo2udpuSk6LBdknEBwTBCo857RhaGo4U-wtx0-VYjg&oh=00_AQNPTrUgHlKuDIl92u3QuYT_4DM78NjjXewtE8HJtEOWLg&oe=6AD50E9E",
          "colorPalette": {
            "dominant": "18,18,9",
            "vibrant": "147,214,28",
            "vibrantDark": "94,109,21",
            "vibrantLight": "203,240,138",
            "muted": "140,116,90",
            "mutedLight": "211,206,197",
            "mutedDark": "72,54,38"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxbzBzcWM3IiwiYyI6IjE3OTk4MDQ2MDEzMDAxODc0In0.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxbzBzcWM3IiwiYyI6IjE3OTk4MDQ2MDEzMDAxODc0In0.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxbzBzcWM3IiwiYyI6IjE3OTk4MDQ2MDEzMDAxODc0In0.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxbzBzcWM3IiwiYyI6IjE3OTk4MDQ2MDEzMDAxODc0In0.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18126506026660851",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/840519806_17908738221560982_1709013103436648316_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=BbwdecKywgMQ7kNvwEb9pxK&_nc_oc=Ado11yYdBx68TWLMNbVv__5-VSOQX6Ga9yN2x_V8XGMqIUue1tUujE8raye44lHtU8k&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQLNwexPA5kEwS6__DAYbdRf3Dr_2NY20G6NifKmdI2GG2-my8KRuyHw0aazeqF8EuyWAJEDtImTdA&oh=00_AQOnX0djfzDNjsI-jbI9522SO-4_OJy04fd3cfe18oG0DA&oe=6AD4EAED",
          "colorPalette": {
            "dominant": "60,98,4",
            "vibrant": "103,177,6",
            "vibrantDark": "83,145,10",
            "vibrantLight": "239,236,220",
            "muted": "167,195,116",
            "mutedLight": "173,176,168",
            "mutedDark": "82,143,10"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJ6cTU4YzEiLCJjIjoiMTgxMjY1MDYwMjY2NjA4NTEifQ.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJ6cTU4YzEiLCJjIjoiMTgxMjY1MDYwMjY2NjA4NTEifQ.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJ6cTU4YzEiLCJjIjoiMTgxMjY1MDYwMjY2NjA4NTEifQ.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiJ6cTU4YzEiLCJjIjoiMTgxMjY1MDYwMjY2NjA4NTEifQ.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18034693964666893",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/845865306_17908738242560982_7037486760771363930_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=J9I3XRJAYa8Q7kNvwF8QPsk&_nc_oc=AdpaS47d_9h93NMlsFDuXGsJO40jmGlcJvre2kHU14NjIHSUkqZNR49-Rq-9tru32JU&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQIxPs8pE2T1J26c7kvhaN2UHBDnIW1EDZzJ8XvdBkN-sshvsn426wEVwKPBcs9wxfr9-r8ucwCTbg&oh=00_AQOnC8K60Ua1GyBf_DB1sAUGHTlB5sHh9cVnc_4x2D63Gw&oe=6AD4EFA6",
          "colorPalette": {
            "dominant": "156,212,44",
            "vibrant": "122,187,36",
            "vibrantDark": "83,147,7",
            "vibrantLight": "164,197,118",
            "muted": "120,113,98",
            "mutedLight": "228,228,216",
            "mutedDark": "42,31,29"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxdG9kdXZ2IiwiYyI6IjE4MDM0NjkzOTY0NjY2ODkzIn0.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxdG9kdXZ2IiwiYyI6IjE4MDM0NjkzOTY0NjY2ODkzIn0.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxdG9kdXZ2IiwiYyI6IjE4MDM0NjkzOTY0NjY2ODkzIn0.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxdG9kdXZ2IiwiYyI6IjE4MDM0NjkzOTY0NjY2ODkzIn0.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18135139369649036",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/841436850_17908738263560982_4191543369481638704_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Q218JX0xRKMQ7kNvwGZcfgI&_nc_oc=AdqOdRMUYxRWK3LMrEttqgyI7wH98zW_8gj_9GSl9giZC3EmV1Y7v5Ckr-BBMH9cHmo&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQIijVafSgCEtyis362oQztelxHFSsxxOYAxqSWm23b4BYanyUf0ZPU29n1Yzk0T3qtPaEkr12yyCg&oh=00_AQN6uX6mYOQk86FhEB_H5tJzCvAMFbq1QORgp1ByuIoNig&oe=6AD4F80D",
          "colorPalette": {
            "dominant": "68,76,68",
            "vibrant": "145,236,4",
            "vibrantDark": "90,144,27",
            "vibrantLight": "204,242,140",
            "muted": "127,127,127",
            "mutedLight": "202,215,176",
            "mutedDark": "94,94,94"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxYzc1Z2Y3IiwiYyI6IjE4MTM1MTM5MzY5NjQ5MDM2In0.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxYzc1Z2Y3IiwiYyI6IjE4MTM1MTM5MzY5NjQ5MDM2In0.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxYzc1Z2Y3IiwiYyI6IjE4MTM1MTM5MzY5NjQ5MDM2In0.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxYzc1Z2Y3IiwiYyI6IjE4MTM1MTM5MzY5NjQ5MDM2In0.jpg?class=originalFull"
            }
          }
        }
      ],
      "prunedCaption": "Homegrown flavours. A fresh digital home. 🌿\n\nAn e-commerce website for Homemade Foods Madurai, making every step from browsing to ordering feel simple.\n\nDesigned & developed by Grafino Studio.\n\nA taste of home, just a click away.\nhomemadefoodmadurai.com",
      "hashtags": [
        "ecommerce",
        "localbusiness",
        "homefood",
        "grafino",
        "grafinostudio"
      ],
      "mentions": [],
      "colorPalette": {
        "dominant": "134,138,129",
        "vibrant": "85,175,251",
        "vibrantDark": "106,59,20",
        "vibrantLight": "128,193,251",
        "muted": "120,135,91",
        "mutedLight": "150,192,198",
        "mutedDark": "41,70,66"
      },
      "visibility": "visible",
      "sizes": {
        "small": {
          "width": 320,
          "height": 400,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxd3cybGJ1In0.jpg?class=originalSmall"
        },
        "medium": {
          "width": 560,
          "height": 700,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxd3cybGJ1In0.jpg?class=originalMedium"
        },
        "large": {
          "width": 800,
          "height": 1000,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxd3cybGJ1In0.jpg?class=originalLarge"
        },
        "full": {
          "width": 1600,
          "height": 2000,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzkwOTMyODg4NTQ4MTU5OCIsImgiOiIxd3cybGJ1In0.jpg?class=originalFull"
        }
      }
    },
    {
      "id": "17967434031191435",
      "caption": "We’ve been quiet. Now we’re here.\n\nIntroducing Grafino Studio.\nBuilt to be Remembered.\n\nWe create brand identities, websites, and videos that give your business a voice and a presence.\n\nHave an idea? Let’s bring it to life.\nExplore grafino.studio or DM us.\n\n#Grafino #Grafinostudio #branding #graphicdesign #designstudio",
      "permalink": "https://www.instagram.com/p/DeQuZYygYgb/",
      "timestamp": "2026-10-09T05:09:47+0000",
      "likeCount": 11,
      "commentsCount": 0,
      "mediaType": "CAROUSEL_ALBUM",
      "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/841166561_17908492200560982_2997846061808607090_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=nrvIvwDQcfcQ7kNvwGXX4yL&_nc_oc=AdqIlIXJkgRH8S1EDL_Rohy8U-Ah_NkV5qArrOaWctjiIwV638BmFeykvUaCO3EyHuo&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQLTcSYX5V8wadDtwXn8yUu9noLSjeembsJTk3R8Lu6q11kJXoXWRQaPlmp9NBWhq7baKpHpIaGaoA&oh=00_AQMLGxoc9E6XVt61UbE175_s8ZvYnCFaASYI38WOixebGQ&oe=6AD51864",
      "children": [
        {
          "id": "18354631024172277",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/841166561_17908492200560982_2997846061808607090_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=nrvIvwDQcfcQ7kNvwGXX4yL&_nc_oc=AdqIlIXJkgRH8S1EDL_Rohy8U-Ah_NkV5qArrOaWctjiIwV638BmFeykvUaCO3EyHuo&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQIh5uuxlShDY8Li_hRGV7rsaaQ5Ho336JypUFmxMh4ZVo60sA-WjmMcmgnJT4oFij6ZqEHMpVmwDg&oh=00_AQPB4CAaoIuFQeiFDNH2oxVe09fHKsl01GXqPGiCnaFUEQ&oe=6AD51864",
          "colorPalette": {
            "dominant": "60,4,153",
            "vibrant": "92,4,175",
            "vibrantDark": "84,4,164",
            "vibrantLight": "212,190,230",
            "muted": "123,75,172",
            "mutedLight": "156,137,186",
            "mutedDark": "8,6,10"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJiOWRoNW0iLCJjIjoiMTgzNTQ2MzEwMjQxNzIyNzcifQ.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJiOWRoNW0iLCJjIjoiMTgzNTQ2MzEwMjQxNzIyNzcifQ.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJiOWRoNW0iLCJjIjoiMTgzNTQ2MzEwMjQxNzIyNzcifQ.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJiOWRoNW0iLCJjIjoiMTgzNTQ2MzEwMjQxNzIyNzcifQ.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "17922076512225896",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/841120806_17908492218560982_3437367250854904624_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=jsCKyH_ehvcQ7kNvwHHY9j2&_nc_oc=AdqIdS088Lks4CavOuAl8k1Ppe8z9PKBNgiCO1F9lp2bmt_Gs39KxWtoAcBBIYs19ic&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQLfJNo8bWKaMfbTpzLuBvEfKeM_6khOx0C1rmFFE_BTWMkVnuKZ0AMtmFscXcAjey2JmBiWPAVPnA&oh=00_AQOTD_BNy3CfkeMi705jD3if2bRuRBIUqNxrFvym63L-BA&oe=6AD4FD23",
          "colorPalette": {
            "dominant": "91,92,94",
            "vibrant": "138,98,199",
            "vibrantDark": "77,52,20",
            "vibrantLight": "182,157,220",
            "muted": "113,101,100",
            "mutedLight": "195,193,191",
            "mutedDark": "82,59,43"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI1MW5kOXAiLCJjIjoiMTc5MjIwNzY1MTIyMjU4OTYifQ.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI1MW5kOXAiLCJjIjoiMTc5MjIwNzY1MTIyMjU4OTYifQ.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI1MW5kOXAiLCJjIjoiMTc5MjIwNzY1MTIyMjU4OTYifQ.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI1MW5kOXAiLCJjIjoiMTc5MjIwNzY1MTIyMjU4OTYifQ.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18111446513165653",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/841083744_17908492248560982_3867067876183111625_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=m6GbxxzH5JMQ7kNvwH0vzNb&_nc_oc=Adrb8cs7oNFIwoAfomNW-fjzaWdWpI406qvX6nk1wt7uSTpYvuzarktcxVBm612L4Ho&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQLWWWal0v4pCXsYbdsQJmHLSgBnbdSLNCPtdYmpIbqGPg7hvupouOuFf-vhu6n4EOsFg8g2BWEy_g&oh=00_AQMYc_tDnMZ2YGWoY3_JqXiUnOWHtM0IgfDkukB1N4L2GQ&oe=6AD4E684",
          "colorPalette": {
            "dominant": "88,81,72",
            "vibrant": "138,103,191",
            "vibrantDark": "53,28,4",
            "vibrantLight": "183,162,216",
            "muted": "129,121,116",
            "mutedLight": "205,203,201",
            "mutedDark": "92,64,44"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI4eWF0djMiLCJjIjoiMTgxMTE0NDY1MTMxNjU2NTMifQ.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI4eWF0djMiLCJjIjoiMTgxMTE0NDY1MTMxNjU2NTMifQ.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI4eWF0djMiLCJjIjoiMTgxMTE0NDY1MTMxNjU2NTMifQ.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiI4eWF0djMiLCJjIjoiMTgxMTE0NDY1MTMxNjU2NTMifQ.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "17911519413471674",
          "mediaType": "VIDEO",
          "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/o1/v/t16/f2/m84/AQOOeUkV_zw-YaxY9Kb4lnRyPgGGTUOEtUN2za286pVlMiWFrlJj3jsmGjXKaGpI2H2X8btJ3iFeAZ4mIT0H9oATuBXOtmWL27ba2ME.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-ord5-1.cdninstagram.com&_nc_ohc=8Y--UGsjFIAQ7kNvwHNfybj&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0FST1VTRUxfSVRFTS5DMy43MjAuZGFzaF9iYXNlbGluZV8xX3YxIiwieHB2X2Fzc2V0X2lkIjoxNzkwODQ5Mjc5NDU2MDk4MiwiYXNzZXRfYWdlX2RheXMiOjUsInZpX3VzZWNhc2VfaWQiOjEwMTQ2LCJkdXJhdGlvbl9zIjo1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=edfd4397924b88b&_nc_vs=HBkcFQIYTGlnX2JhY2tmaWxsX3RpbWVsaW5lX3ZvZC8yOTdBOUI5ODk2QTA0ODVFQUQ2RjFEMkZCMTkyRUU2M192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmrIfc97zrzz8VAigCQzMsF0AX3S8an753GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXuB2XEngEA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQIt-JUFI_0najLC0UqbneAn0J1rJ9rQ29hlFjp4Q9wPccsh17U9Zi3bbhi1OEbgvZ8Ysd9ym0Tltg&oh=00_AQOU0VmarQdhO4N9P-DiVP7RDnxIKFjCHn_8cfvDog6Skw&oe=6AD0F0D6",
          "thumbnailUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/840309182_17908492815560982_6369139516988081659_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=lpIWeVtLnYUQ7kNvwGMIKSK&_nc_oc=Adq6Y0VBulJ635lOFxU8uelRff1WFFTAso5lmpGNAnYgydJR43oH4hQRytLhsYqXhpc&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQLW2X_HeomS4eYfWZxMm4C8_LXJo5sTJ9l0ErKomx3qQIBn_lLg3RigKjoYGeln5xTdxR9fJ_g1OQ&oh=00_AQOVMUIaEHHy7NHyKkC-0rJ5adpYXkIpw1LkGL4Yn0cnXQ&oe=6AD4FCE9",
          "colorPalette": {
            "dominant": "120,64,192",
            "vibrant": "100,52,195",
            "vibrantDark": "92,28,190",
            "vibrantLight": "180,147,218",
            "muted": "122,90,179",
            "mutedLight": "151,126,190",
            "mutedDark": "93,67,141"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNzU3MHAwIiwiYyI6IjE3OTExNTE5NDEzNDcxNjc0In0.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNzU3MHAwIiwiYyI6IjE3OTExNTE5NDEzNDcxNjc0In0.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNzU3MHAwIiwiYyI6IjE3OTExNTE5NDEzNDcxNjc0In0.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNzU3MHAwIiwiYyI6IjE3OTExNTE5NDEzNDcxNjc0In0.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18235204258320875",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/841340096_17908492269560982_4742719564020676415_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=y0BZiaxZ3oUQ7kNvwH0pN2C&_nc_oc=AdpWwtfTbrWwohwlWWac25ci3sNhraqm2a9AkKDK7bxnOUPN4bQwWz9UKanVtUsrr80&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQJSeRdTKPyb_o-uNkbdIdQh1a9acOzFOb3whjw2EpZ4J2BdkisB6tulzAvxr_fupCUj2ywyJYfaVg&oh=00_AQNuR-I8PftcnhpfbT2-UfvCeMubr3Akhy4cN9CGDTVJJQ&oe=6AD4ED8E",
          "colorPalette": {
            "dominant": "121,81,158",
            "vibrant": "114,65,190",
            "vibrantDark": "60,34,100",
            "vibrantLight": "182,156,221",
            "muted": "124,89,159",
            "mutedLight": "189,185,193",
            "mutedDark": "77,64,52"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxbHdkaGV4IiwiYyI6IjE4MjM1MjA0MjU4MzIwODc1In0.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxbHdkaGV4IiwiYyI6IjE4MjM1MjA0MjU4MzIwODc1In0.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxbHdkaGV4IiwiYyI6IjE4MjM1MjA0MjU4MzIwODc1In0.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxbHdkaGV4IiwiYyI6IjE4MjM1MjA0MjU4MzIwODc1In0.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18098706623395206",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/841436839_17908492278560982_4180732123052168898_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=M-Midy44c_YQ7kNvwHbJCE8&_nc_oc=Ado11GwNdi5UgV4CTG5M4qtum6NqCLfeUwWC49zCy7eTb3PxIZi0Oz1YD1tzm6G6xJA&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQJKmEEstat_8QVzZc33lkJ7q4bLFT6dujNOpXGZaXtS9OKkLCLAZzylJDQRu17KPApM7PFCjIWSGw&oh=00_AQNEzHKPH55dPyLw0O3u8zvkkOCKgOzOWCqsjlsyY1_dWg&oe=6AD4F3D3",
          "colorPalette": {
            "dominant": "132,108,153",
            "vibrant": "116,52,148",
            "vibrantDark": "58,26,79",
            "vibrantLight": "199,157,221",
            "muted": "131,131,131",
            "mutedLight": "195,188,192",
            "mutedDark": "67,55,43"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxMjZpYmZnIiwiYyI6IjE4MDk4NzA2NjIzMzk1MjA2In0.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxMjZpYmZnIiwiYyI6IjE4MDk4NzA2NjIzMzk1MjA2In0.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxMjZpYmZnIiwiYyI6IjE4MDk4NzA2NjIzMzk1MjA2In0.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxMjZpYmZnIiwiYyI6IjE4MDk4NzA2NjIzMzk1MjA2In0.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18122488069903450",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/840116930_17908492311560982_1727911162760529474_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=uSPgvEco3isQ7kNvwEaHQn8&_nc_oc=AdrDx_wcnxt3LLjASOX4j9A6XUSw-hGJ9cSvLTiv_choRkRkdOcNnJ_-nDJ3qmB8P6s&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQLKbUCEw40ZUlRxlpIRkAj5CtW-4jfi9SPfBG1WneEOLqlKU4bxDYTx4YDGyYAByQKm_b6WMNxaLQ&oh=00_AQNUpp-5rFmtOeyZ0JXBEaYu5ckGXLst0cV-_bbmPwRpHA&oe=6AD4F30D",
          "colorPalette": {
            "dominant": "106,94,82",
            "vibrant": "196,137,59",
            "vibrantDark": "40,28,12",
            "vibrantLight": "224,194,153",
            "muted": "154,128,104",
            "mutedLight": "196,188,179",
            "mutedDark": "98,74,53"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNDYzN3gxIiwiYyI6IjE4MTIyNDg4MDY5OTAzNDUwIn0.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNDYzN3gxIiwiYyI6IjE4MTIyNDg4MDY5OTAzNDUwIn0.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNDYzN3gxIiwiYyI6IjE4MTIyNDg4MDY5OTAzNDUwIn0.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxNDYzN3gxIiwiYyI6IjE4MTIyNDg4MDY5OTAzNDUwIn0.jpg?class=originalFull"
            }
          }
        },
        {
          "id": "18057970508557694",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/841030570_17908492320560982_8657676733471229596_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=m7UtSk1HeQQQ7kNvwGUliwY&_nc_oc=Adr1YJqMxZ-lhn-uOVzN_ltequvph9QQx9OskX0eUEpCojuK4sEmQx_PzyPCZ7fasyw&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=woPP7YGdzvvs3ts0_Tl0cA&_nc_tpa=Q5bMBQJvv_5CFMH36wKNnSrK-l-SW6UmBlz16QW97GrnqDmq8Lm6KTo0dysoyK90i9JQYxYt7-vryWv6AA&oh=00_AQN9TXm2r8iDVrhiccR89qQoIMNCRb1FKsVxfQTks6j1mw&oe=6AD4FC68",
          "colorPalette": {
            "dominant": "44,4,110",
            "vibrant": "90,4,159",
            "vibrantDark": "68,4,131",
            "vibrantLight": "141,99,205",
            "muted": "139,93,175",
            "mutedLight": "213,204,215",
            "mutedDark": "29,21,34"
          },
          "sizes": {
            "small": {
              "width": 320,
              "height": 400,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJka3EwaG4iLCJjIjoiMTgwNTc5NzA1MDg1NTc2OTQifQ.jpg?class=originalSmall"
            },
            "medium": {
              "width": 560,
              "height": 700,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJka3EwaG4iLCJjIjoiMTgwNTc5NzA1MDg1NTc2OTQifQ.jpg?class=originalMedium"
            },
            "large": {
              "width": 800,
              "height": 1000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJka3EwaG4iLCJjIjoiMTgwNTc5NzA1MDg1NTc2OTQifQ.jpg?class=originalLarge"
            },
            "full": {
              "width": 1600,
              "height": 2000,
              "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiJka3EwaG4iLCJjIjoiMTgwNTc5NzA1MDg1NTc2OTQifQ.jpg?class=originalFull"
            }
          }
        }
      ],
      "prunedCaption": "We’ve been quiet. Now we’re here.\n\nIntroducing Grafino Studio.\nBuilt to be Remembered.\n\nWe create brand identities, websites, and videos that give your business a voice and a presence.\n\nHave an idea? Let’s bring it to life.\nExplore grafino.studio or DM us.",
      "hashtags": [
        "Grafino",
        "Grafinostudio",
        "branding",
        "graphicdesign",
        "designstudio"
      ],
      "mentions": [],
      "colorPalette": {
        "dominant": "60,4,153",
        "vibrant": "92,4,175",
        "vibrantDark": "84,4,164",
        "vibrantLight": "212,190,230",
        "muted": "123,75,172",
        "mutedLight": "156,137,186",
        "mutedDark": "8,6,10"
      },
      "visibility": "visible",
      "sizes": {
        "small": {
          "width": 320,
          "height": 400,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxZ2ozeW43In0.jpg?class=originalSmall"
        },
        "medium": {
          "width": 560,
          "height": 700,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxZ2ozeW43In0.jpg?class=originalMedium"
        },
        "large": {
          "width": 800,
          "height": 1000,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxZ2ozeW43In0.jpg?class=originalLarge"
        },
        "full": {
          "width": 1600,
          "height": 2000,
          "mediaUrl": "https://behold.pictures/eyJ1IjoiUU1LV1V0QnduNlkwRXBuYXVrU3YwUjlHSzhmMSIsImYiOiI4RE1mZ3NoclVXUnQ2Y2FyQUtJdyIsInAiOiIxNzk2NzQzNDAzMTE5MTQzNSIsImgiOiIxZ2ozeW43In0.jpg?class=originalFull"
        }
      }
    }
  ]
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
              <div className="relative aspect-[4/5] w-full bg-[#F4F6F5] overflow-hidden select-none">
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
