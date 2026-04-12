"use client"

import { useRouter } from "next/navigation"
import CollageImage from "../components/CollageImage"
import { motion } from "framer-motion"

const articles = [
  { title: "Star-Spangled Banner Ads", slug: "starspa", image: "/paperperson.jpg" },
  { title: "Example Article 2", slug: "exe1", image: "/snake.jpg" },
  { title: "Example Article 3", slug: "exe2", image: "/paper.png" },
]

export default function Home() {
  const router = useRouter()

  const colors = [
    "bg-[var(--green-main)]/15",
    "bg-[var(--blue-light)]/20",
    "bg-[var(--pink-main)]/20",
  ]

  return (
    <main className="min-h-screen relative bg-[var(--white)]">

      {/* COLLAGE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <CollageImage src="/pink.png" x="2%" y="10%" rotate={-8} size={200} opacity={0.7} />
        <CollageImage src="/purple.png" x="85%" y="15%" rotate={10} size={250} opacity={0.7} />
      </div>

      {/* ISSUE HEADER */}
      <div className="relative z-10 text-center mb-20 flex flex-col items-center gap-4">

        <div className="flex items-center gap-4">

          {/* MAIN TITLE */}
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-[var(--green-dark)]">
            Issue 
          </h1>

          {/* SWIRL (accent, not competing) */}
          <motion.svg
  viewBox="0 0 200 120"
  className="w-16 h-10 text-[var(--green-dark)]"
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
    strokeWidth="4.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</motion.svg>

        </div>

        {/* SUBTITLE */}
        <h2 className="text-3xl md:text-4xl italic font-serif tracking-tight text-[var(--green-dark)]">
          Rebirth
        </h2>

        <div className="w-12 h-[1px] bg-[var(--green-dark)]/30 mt-2" />

      </div>

      {/* ARTICLES GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">

        {articles.map((article, i) => (
          <div
            key={article.slug}
            onClick={() => router.push(`/articles/${article.slug}`)}
            className="group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
          >
            {/* IMAGE BLOCK */}
            <div
              className={`aspect-[3/4] overflow-hidden mb-4 ${colors[i % colors.length]} transition-colors duration-300 group-hover:bg-[var(--orange-main)]/20`}
            >
              <img
                src={article.image}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-110"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-lg tracking-tight text-[var(--green-dark)] transition-colors duration-200 group-hover:text-[#F95738]">
              {article.title}
            </h3>
          </div>
        ))}

      </div>

    </main>
  )
}