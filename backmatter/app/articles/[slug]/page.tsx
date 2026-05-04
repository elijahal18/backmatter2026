"use client"

import CollageImage from "../../../components/CollageImage"
import dynamic from "next/dynamic"
import { useParams, useSearchParams } from "next/navigation"
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
  wgtlo: dynamic(() => import("./collages/wgtlo"), { ssr: false }),
  da: dynamic(() => import("./collages/da"), { ssr: false }),
  nsot: dynamic(() => import("./collages/nsot"), { ssr: false }),
}

const colorMap: Record<string, string> = {
  green: "color-mix(in srgb, var(--green) 45%, #dfd3b4 55%)",
  orange: "color-mix(in srgb, var(--orange) 35%, #dfd3b4 65%)",
  blue: "color-mix(in srgb, var(--blue-light) 40%, #dfd3b4 60%)",
  pink: "color-mix(in srgb, var(--pink) 35%, #dfd3b4 65%)",
}

const DEFAULT_FOLDER =
  "color-mix(in srgb, var(--green) 45%, #dfd3b4 55%)"

export default function Page() {
  const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768)
  check()
  window.addEventListener("resize", check)
  return () => window.removeEventListener("resize", check)
}, [])
  const params = useParams()
  const rawSlug = params.slug
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

  const cleanSlug = typeof slug === "string" ? slug.toLowerCase() : ""
  const Collage = cleanSlug ? collageMap[cleanSlug] : null

  const [content, setContent] = useState("")
  const [meta, setMeta] = useState<{
  title?: string
  author?: string
  editor?: string
  images?: string
  web?: string
}>({})

  const searchParams = useSearchParams()
  const theme = searchParams.get("theme") || "green"
  const folderColor = colorMap[theme] || DEFAULT_FOLDER

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

  const [coffeeStains, setCoffeeStains] = useState<any[]>([])
  const [inkStains, setInkStains] = useState<any[]>([])

  useEffect(() => {
    const coffeeImages = [
      "/stains/coffee1.png",
      "/stains/coffee2.png",
      "/stains/coffee3.png",
      "/stains/coffee4.png",
    ]

    const inkImages = ["/stains/ink.png"]
    const getCenterPosition = () => ({
      x: `${35 + Math.random() * 30}%`,
      y: `${25 + Math.random() * 50}%`,
    })

    // (avoid paper center)
    const getEdgePosition = () => {
      const isLeft = Math.random() < 0.5

      return {
        x: isLeft
          ? `${Math.random() * 15}%`        // 0 → 15%
          : `${75 + Math.random() * 10}%`,  // 85 → 95%
        y: `${Math.random() * 100}%`
      }
    }
    const coffee = Array.from({ length: 2 }).map(() => {
      const pos = getCenterPosition()
      return {
        src: coffeeImages[Math.floor(Math.random() * coffeeImages.length)],
        x: pos.x,
        y: pos.y,
        rotate: Math.random() * 360,
        size: 260 + Math.random() * 120,
        opacity: 0.25 + Math.random() * 0.2,
      }
    })

    // INK
    const ink = Array.from({ length: 3 }).map(() => {
      const pos = getEdgePosition()
      return {
        src: inkImages[0],
        x: pos.x,
        y: pos.y,
        rotate: Math.random() * 360,
        size: 180 + Math.random() * 100,
        opacity: .8,
      }
    })

    setCoffeeStains(coffee)
    setInkStains(ink)
  }, [])

  if (!meta.title) return null

  return (
    <div className="relative w-full min-h-[100dvh] pt-20 pb-30 bg-[#f4efe6] text-[var(--black)] overflow-x-visible">
      {/* trying to force desktop porportions */}
<div className="w-full flex justify-center overflow-visible">
  <div
    style={{
      transform: `scale(${isMobile ? 0.50 : 1})`,
      transformOrigin: "top center",
      width: isMobile ? "145%" : "100%"
    }}
  >
      {/* BACK LINK */}
      <Link
        href="/"
        className={`
          fixed z-50
          ${isMobile
            ? "top-2 left-2 -translate-x-[120%] -translate-y-[140%] px-3 py-2 bg-[#d8d2c7] shadow"
            : "top-6 left-7 text-[var(--green-dark)]/60"}
        `}
      >
        ← Home
      </Link>

      {/* FOLDER WRAPPER */}
      <div
  className={`relative mx-auto ${
    isMobile ? "w-[140vw] -ml-[7.5vw]" : "w-[92vw]"
  } max-w-[1400px]`}
>

        <div className="relative">

          {/* TAB */}
          <div
            className="absolute -top-6 left-8 px-5 py-2 text-sm z-20"
            style={{
              backgroundColor: folderColor
            }}
          >
            {meta.title}
          </div>

          {/* FOLDER BODY */}
          <div
            className="p-5 shadow-[0_20px_40px_rgba(0,0,0,0.25)] overflow-visible"
            style={{
              backgroundColor: folderColor
            }}
          >

            {/* HERO */}
            <MotionDiv
              layoutId={`image-${slug}`}
              className="w-full max-w-[1000px] mx-auto h-[500px] overflow-visible mb-10"
            >
              <img
                src={`/article_images/${slug}/hero.jpg`}
                className="w-full h-full object-cover"
              />
            </MotionDiv>

            
            {/* Paper */}
            <div className="mt-10 flex justify-center">
            <div
              className="
                relative
                w-full
                max-w-[850px]  
                mx-auto 
                bg-[#f6f3ee]
                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                border border-black/5
                px-10 md:px-14 py-14 md:py-16
              "
            >
              <div className="absolute inset-0 pointer-events-none z-0">
                  {coffeeStains.map((stain, i) => (
                    <CollageImage
                      key={i}
                      {...stain}
                      shadow={false} 
                      blend="multiply"
                    />
                  ))}
                </div>

              <article className="relative z-10">

                <h1 className="text-4xl md:text-5xl mb-10 tracking-tight text-[var(--green)] font-serif">
                  {meta.title || "Untitled"}
                </h1>

                {meta.author && (
                  <p className="text-sm md:text-base italic text-[var(--pink)] mb-8">
                    by {meta.author}
                  </p>
                )}
                

                <div className="text-[17px] leading-8 font-sans text-[color:rgba(34,34,34,0.9)]">

                  <ReactMarkdown
                components={{
                  p: ({ children }) => {
  let keyIndex = 0

  const processed = React.Children.toArray(children).flatMap((child) => {
    if (typeof child === "string") {
      const parts = child.split(/\[\[(.*?)\]\]/g)

      return parts.map((part, i) => {
        // this is a [[...]] section
        if (i % 2 === 1) {
          // parse side signal
          const match = part.match(/^(left|right|l|r):\s*(.*)$/i)

          let side: "left" | "right" | undefined
          let text = part

          if (match) {
            const dir = match[1].toLowerCase()
            side = dir === "l" ? "left" : dir === "r" ? "right" : (dir as "left" | "right")
            text = match[2]
          }

          return (
            <SideQuote key={`quote-${keyIndex++}`} side={side}>
              {text}
            </SideQuote>
          )
        }

        // normal text
        if (!part.trim()) return null

        return (
          <span key={`text-${keyIndex++}`}>
            {part}
          </span>
        )
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
              {/* FOOTER */}
<div className="mt-16 pt-10 border-t border-black/10 text-sm text-[var(--green-dark)]/80 font-sans">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">

    {/*{meta.author && (
      <div>
        <p className="italic text-xs mb-1 opacity-70">Written by</p>
        <p>{meta.author}</p>
      </div>
    )}*/}

    {meta.editor && (
      <div>
        <p className="italic text-xs mb-1 opacity-70">Edited by</p>
        <p>{meta.editor}</p>
      </div>
    )}

    {meta.images && (
      <div>
        <p className="italic text-xs mb-1 opacity-70">Images and Design by</p>
        <p>{meta.images}</p>
      </div>
    )}
    {/*
    {meta.web && (
      <div>
        <p className="italic text-xs mb-1 opacity-70">Web Article Designed by</p>
        <p>{meta.web}</p>
      </div>
    )}*/}

  </div>
</div>
            </div>
            </div>
            {/* COLLAGE */}
            {Collage && <Collage />}
          </div>
        </div>
      </div>

      {/* STAINS OUTSIDE FOLDER */}
      {!isMobile && (
      <div className="absolute inset-0 pointer-events-none z-0">
        {inkStains.map((stain, i) => (
          <CollageImage
            key={i}
            {...stain}
            shadow={false} 
            blend="multiply"
          />
        ))}
      </div>
      )}
      </div>
      </div>
    </div>
  )
}