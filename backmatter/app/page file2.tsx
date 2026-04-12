"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const articles = [
  {
    title: "Star-Spangled Banner Ads",
    slug: "starspa",
    description: "violence, spectacle, capitalism"
  },
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
    <main className="min-h-screen flex items-center justify-center bg-[#eef2ea]">

      {/* CABINET */}
      <div className="relative w-[90vw] max-w-[1100px] h-[60vh] rounded shadow-inner bg-[#d8c79a] overflow-visible">

        {/* ================= OPEN CONTENT AREA ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          {/* ONLY SHOW WHEN OPEN */}
          <motion.div
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >

            {/* STACKED FOLDERS */}
            <div className="relative w-full h-full px-10 pt-6">

              {articles.map((a, i) => {
                const offset = i * 14

                return (
                  <motion.div
                    key={a.slug}
                    onClick={() => router.push(`/articles/${a.slug}`)}
                    className="absolute w-[90%] h-[120px] bg-[#f3e7c7] shadow-md cursor-pointer"
                    style={{
                      top: `${offset}px`,
                      left: `${offset}px`,
                      zIndex: 10 + i
                    }}
                  >
                    {/* TAB */}
                    <div className="absolute -top-5 left-10 bg-[#d8c79a] px-3 py-1 text-xs shadow-sm">
                      {a.title}
                    </div>

                    {/* DESC */}
                    <div className="absolute bottom-3 left-4 text-xs opacity-70">
                      {a.description}
                    </div>
                  </motion.div>
                )
              })}

            </div>
          </motion.div>
        </div>

        {/* ================= DRAWER FRONT ================= */}
        <motion.div
          onClick={() => setOpen((prev) => !prev)}
          animate={{ y: open ? 260 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="absolute inset-0 z-10 bg-[#e6d3a3] border-t-[6px] border-[#c8b98f] shadow-xl cursor-pointer"
        >

          {/* LABEL */}
          <div className="absolute top-6 left-6 w-[240px] h-[44px] bg-neutral-200 border border-neutral-400 flex items-center px-3 text-xs shadow-inner">
            BACK MATTER — ISSUE 08
          </div>

          {/* LINKS */}
          <div className="absolute right-20 top-20 text-xs">
            <div className="relative">

              <button className="absolute bg-[#f3e7c7] px-3 py-2 shadow rotate-2">
                about
              </button>

              <a
                href="https://instagram.com"
                target="_blank"
                className="absolute top-12 left-2 bg-[#f3e7c7] px-3 py-2 shadow -rotate-1"
              >
                instagram
              </a>

              <a
                href="/past-issues"
                className="absolute top-24 -left-1 bg-[#f3e7c7] px-3 py-2 shadow rotate-3"
              >
                past issues
              </a>

            </div>
          </div>

          {/* HANDLE */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 h-4 bg-neutral-500 rounded-full shadow-inner" />

        </motion.div>

      </div>
    </main>
  )
}