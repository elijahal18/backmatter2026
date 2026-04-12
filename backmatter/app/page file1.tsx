"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import CollageImage from "../components/CollageImage"

const articles = [
  { title: "Star-Spangled Banner Ads", slug: "starspa", description: "atmosphere as inevitability" },
  {
    title: "Crime & Setting",
    slug: "crime",
    description: "atmosphere as inevitability"
  },
  {
    title: "Disillusionment Through Proximity",
    slug: "disillusionment",
    description: "distance collapsing into clarity"
  }
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[var(--white)] flex flex-col items-center justify-center">

      {/* CABINET FRAME */}
      <div className="relative w-[800px] h-[400px] bg-neutral-300 rounded-sm shadow-inner">

        {/* BACK INTERIOR (this is what gets revealed) */}
        <div className="absolute inset-0 bg-neutral-200" />

        {/* FOLDER STACK (NOW OUTSIDE DRAWER) */}
        <div className="absolute inset-0 flex items-start justify-center pt-32 pointer-events-none">

          <div className="relative w-[500px] h-[300px]">

            {articles.map((a, i) => (
              <motion.div
                key={a.slug}
                layoutId={`folder-${a.slug}`}
                onClick={() => router.push(`/articles/${a.slug}`)}
                className="
                  absolute
                  w-[360px]
                  h-[140px]
                  bg-[#f3e7c7]
                  shadow-md
                  cursor-pointer
                  pointer-events-auto
                "
                style={{
                  top: `${i * 24}px`,
                  left: `${i * 20}px`,
                  rotate: `${i % 2 === 0 ? -1.5 : 1.5}deg`,
                  zIndex: 10 + i
                }}
              >
                <div className="absolute -top-6 left-6 bg-[#d8c79a] px-3 py-1 text-xs">
                  {a.title}
                </div>

                <div className="absolute bottom-4 left-5 text-xs opacity-70">
                  {a.description}
                </div>
              </motion.div>
            ))}

            {/* PEAKING BACK IMAGES */}
            <div className="pointer-events-none">
              <CollageImage
                src="/newspaper.png"
                x="60%"
                y="0%"
                rotate={8}
                size={200}
                opacity={0.25}
              />
            </div>

          </div>
        </div>

        {/* DRAWER (NOW JUST A COVER) */}
        <motion.div
          onClick={() => setOpen(true)}
          animate={{ y: open ? 160 : 0 }}
          transition={{ type: "spring", stiffness: 110, damping: 18 }}
          className="
            absolute
            w-full
            h-full
            bg-[#e6d3a3]
            shadow-xl
            cursor-pointer
            z-20
          "
        >
          {/* LABEL */}
          <div className="absolute top-6 left-6 text-sm font-medium">
            BACK MATTER — ISSUE 08
          </div>

          {/* HANDLE */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-3 bg-neutral-500 rounded-full" />
        </motion.div>

      </div>
    </main>
  )
}