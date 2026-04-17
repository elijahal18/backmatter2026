"use client"

import CollageImage from "../../../components/CollageImage"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import matter from "gray-matter"
import SideQuote from "./Quote"
import React from "react"
import Link from "next/link"

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
)
const collageMap: Record<string, any> = {
  ioa: dynamic(() => import("./collages/ioa"), { ssr: false }),
  tck: dynamic(() => import("./collages/tck"), { ssr: false }),
  pap: dynamic(() => import("./collages/pap"), { ssr: false }),
  sfsu: dynamic(() => import("./collages/sfsu"), { ssr: false }),
  ph: dynamic(() => import("./collages/ph"), { ssr: false }),
  wjp: dynamic(() => import("./collages/wjp"), { ssr: false }),
  bm: dynamic(() => import("./collages/bm"), { ssr: false }),
  cct: dynamic(() => import("./collages/cct"), { ssr: false }),
}

const images = [
  "1.png",
  "2.png",
  "3.png",
]


export default function Page() {
  const params = useParams()
  const rawSlug = params.slug
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

  const cleanSlug = typeof slug === "string" ? slug.toLowerCase() : ""
  const Collage = cleanSlug ? collageMap[cleanSlug] : null

  const [content, setContent] = useState("")
  const [meta, setMeta] = useState<{ title?: string; author?: string }>({})

  useEffect(() => {
    if (!slug) return

    fetch(`/articles/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text)
        setMeta(data)
        setContent(content)
      })
  }, [slug])
  const coffeeImages = [
    "/stains/coffee1.png",
    "/stains/coffee2.png",
    "/stains/coffee3.png",
    "/stains/coffee4.png",
  ]

  const inkImages = [
    "/stains/ink.png",
  ]

  // helper: pick random item
  const randomFrom = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)]

  const [stains, setStains] = useState<any[]>([])

  useEffect(() => {
    const selected = [
      randomFrom(coffeeImages),
      randomFrom(coffeeImages), // 2 coffee
      randomFrom(inkImages),
      randomFrom(inkImages),    // 2 ink
    ]

    const generated = selected.map((src) => ({
      src,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      rotate: Math.random() * 360,
      size: 200 + Math.random() * 120,
      opacity: 0.50 + Math.random() * 0.25,
      shadow: false
    }))

    setStains(generated)
  }, [])
  
  if (!meta.title) return null
  return (
    <div className="relative w-full min-h-screen bg-[#e9dcbc] text-[var(--black)]">
      <Link
        href="/"
        className="
          fixed top-6 left-6 z-50
          text-sm font-serif
          text-[var(--green-dark)]/60
          hover:text-[var(--green-dark)]
          transition
        "
      >
        ← Back Matter
      </Link>
      {/* HERO */}
      <MotionDiv
        layoutId={`image-${slug}`}
        className="
          w-full
          max-w-4xl
          mx-auto
          h-[300px] md:h-[400px]
          overflow-hidden
        "
      >
        <img
          src={`/article_images/${slug}/hero.jpg`}
          className="w-full h-full object-cover"
        />
      </MotionDiv>

      {/* COLLAGE */}
      {Collage && <Collage />}

      {/* ARTICLE */}
      <div className="relative max-w-5xl mx-auto mt-16 px-6">

        {/* PAPER */}
        <div
          className="
            relative
            bg-white
            shadow-[0_10px_30px_rgba(0,0,0,0.15)]
            border border-black/5
            px-8 py-12
          "
        >
          <article className="relative z-10 max-w-2xl mx-auto">

            <h1 className="text-4xl md:text-5xl mb-10 tracking-tight text-[var(--green)] font-serif">
              {meta.title || "Untitled"}
            </h1>

            {meta.author && (
              <p className="text-sm md:text-base italic text-[var(--pink)] mb-8">
                by {meta.author}
              </p>
            )}

            <div className="text-[17px] leading-8 font-serif text-[color:rgba(34,34,34,0.9)]">

              <ReactMarkdown
                components={{
                  p: ({ children }) => {
                    const processed = React.Children.map(children, (child) => {
                      if (typeof child === "string") {
                        const parts = child.split(/\[\[(.*?)\]\]/g)

                        return parts.map((part, i) => {
                          if (i % 2 === 1) {
                            return <SideQuote key={i}>{part}</SideQuote>
                          }
                          return part
                        })
                      }
                      return child
                    })

                    return <p className="mb-6 leading-7">{processed}</p>
                  },

                  h1: ({ children }) => (
                    <h1 className="text-3xl mt-12 mb-6 font-semibold">
                      {children}
                    </h1>
                  ),

                  h2: ({ children }) => (
                    <h2 className="text-2xl mt-12 mb-4 font-semibold text-[var(--green-dark)]">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="text-xl mt-10 mb-3 font-semibold">
                      {children}
                    </h3>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>

            </div>
          </article>
        </div>
      </div>
      {Collage && <Collage />}
      {/* STAINS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stains.map((stain, i) => (
          <CollageImage key={i} {...stain} />
        ))}
      </div>
    </div>
  )
}