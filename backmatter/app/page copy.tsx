"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import CollageImage from "../components/CollageImage"

const articles = [
  { title: "Example Article 1", slug: "exe", image: "/poppy.jpg" },
  { title: "Example Article 2", slug: "exe1", image: "/snake.jpg" },
  { title: "Example Article 3", slug: "exe2", image: "/paper.png" },
]


function ArticleBubble({ title, slug, image, x, y, tint }: any) {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)

  const random = useRef({
    duration: 12 + Math.random() * 4,
    delay: Math.random() * 2,
    x: Math.random() * 80 - 40,
    y: Math.random() * 100 - 50 
  }).current

  return (
    <motion.div
      layoutId={`bubble-${slug}`}
      initial={{ x: 0, y: 0 }}
      animate={
        clicked
          ? {
              scale: 1.2,
              rotate: 360
            }
          : {
              x: [0, random.x, -random.x, 0],
              y: [0, -random.y, random.y, 0],
              rotate: [0, 2, -2, 0],
              scale: [1, 1.03, 1]
            }
      }
      transition={
        clicked
          ? {
              duration: 0.6,
              ease: "easeInOut"
            }
          : {
              duration: random.duration,
              delay: random.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }
      }
      whileHover={!clicked ? { scale: 1.08 } : {}}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: x, top: y }}
      onClick={() => {
        setClicked(true)

        setTimeout(() => {
          router.push(`/articles/${slug}`)
        }, 500)
      }}
    >
      <motion.div
        layoutId={`bubble-inner-${slug}`}
        className="w-[260px] h-[260px] rounded-full overflow-hidden shadow-xl border border-black/5 relative"
      >
        <img
          src={image}
          className="w-full h-full object-cover saturate-75 brightness-105"
        />

        <div
          className={`absolute inset-0 flex items-center justify-center ${tint} pointer-events-none`}
        >
          <span className="text-white text-lg tracking-[0.08em] font-[var(--font-inter)]">
            {title}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[var(--white)]">

      {/* COLLAGE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <CollageImage
          src="/pink.png"
          x="5%"
          y="10%"
          rotate={-8}
          size={300}
          opacity={0.7}
        />

        <CollageImage
          src="/purple.png"
          x="80%"
          y="15%"
          rotate={10}
          size={350}
          opacity={0.7}
        />

        <CollageImage
          src="/paper.png"
          x="10%"
          y="85%"
          rotate={6}
          size={280}
          opacity={0.6}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-20 flex flex-col items-center gap-3">

        <div className="flex items-center gap-4">
          <span className="text-5xl font-semibold tracking-tight text-[var(--green-dark)]">
            Issue
          </span>

          <motion.svg
            viewBox="0 0 200 120"
            className="w-16 h-10"
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity
            }}
          >
            <path
              d="
                M40,60
                C40,20 90,20 100,60
                C110,100 160,100 160,60
                C160,20 110,20 100,60
                C90,100 40,100 40,60
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--green-dark)]"
            />
          </motion.svg>
        </div>

        <h2 className="text-4xl md:text-5xl italic tracking-tight text-[var(--green-dark)]">
          Rebirth
        </h2>

        <span className="text-xs tracking-[0.25em] uppercase text-[var(--blue-light)] mt-2">
          2026
        </span>

        <div className="w-12 h-[1px] bg-[var(--green-dark)]/30 mt-4" />
      </div>

      {/* BUBBLES */}
      <div className="relative z-10 w-full h-[650px] max-w-7xl mx-auto">
        <ArticleBubble {...articles[0]} x="25%" y="35%" tint="bg-[#6f9f85]/20" />
        <ArticleBubble {...articles[1]} x="75%" y="35%" tint="bg-[#c7dcd0]/30" />
        <ArticleBubble {...articles[2]} x="50%" y="75%" tint="bg-[#e9e4d8]/40" />
      </div>

    </main>
  )
}