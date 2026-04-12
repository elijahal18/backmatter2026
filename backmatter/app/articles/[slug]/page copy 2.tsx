"use client"

import CollageImage from "../../../components/CollageImage"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
)

export default function Page() {
  const params = useParams()
  const rawSlug = params.slug
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

  const [content, setContent] = useState("")

  useEffect(() => {
    if (!slug) return

    fetch(`/articles/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [slug])

  return (
    <div className="relative w-full min-h-screen bg-[var(--white)] text-[var(--black)]">

      {/* HERO */}
      <MotionDiv
        layoutId={`image-${slug}`}
        className="
          w-full
          max-w-4xl
          mx-auto
          mt-20
          h-[300px] md:h-[400px]
          overflow-hidden
        "
      >
        <img
          src="/paperperson.jpg"
          className="w-full h-full object-cover"
        />
      </MotionDiv>
      

      {/* COLLAGE */}
      <div className="absolute inset-0 pointer-events-none">
          <CollageImage
            src="/newyorker.png" 
            x="15%"
            y="15%"
            rotate={0}
            size={200}
            opacity={0.6}
          />
        {/* <CollageImage src="/driedflower1.png" x="15%" y="20%" rotate={-10} size={180} opacity={0.6} /> */}
        <CollageImage src="/driedmoth1.png" x="70%" y="50%" rotate={8} size={160} opacity={0.6} />
      </div>

      {/* ARTICLE */}
      <article className="relative z-10 max-w-2xl mx-auto mt-16 px-6">

        <h1 className="text-4xl md:text-5xl mb-10 tracking-tight text-[var(--green)] font-serif">
          Star-Spangled Banner Ads
        </h1>
        <p className="text-sm md:text-base italic text-[var(--pink)] mb-8">
          by Christina Cala
        </p>

        <div className="text-[17px] leading-8 font-serif text-[color:rgba(34,34,34,0.9)]">

          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-6 leading-7">{children}</p>
              ),
              h1: ({ children }) => (
                <h1 className="text-3xl mt-12 mb-6 font-semibold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl mt-12 mb-4 font-semibold text-[var(--green-dark)]">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl mt-10 mb-3 font-semibold">{children}</h3>
              ),
            }}
          >
            {content}
          </ReactMarkdown>

        </div>
      </article>
    </div>
  )
}