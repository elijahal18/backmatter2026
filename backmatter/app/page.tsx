"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import CollageImage from "../components/CollageImage"
import { FaInstagram } from "react-icons/fa"
import { Caveat } from "next/font/google"

const previewImages: Record<string, string> = {
  IOA: "/article_images/IOA/hero.jpg",
  TCK: "/article_images/TCK/hero.jpg",
  PAP: "/article_images/PAP/hero.jpg",
  BM: "/article_images/BM/hero.jpg",
  WGTLO: "/article_images/WGTLO/hero.jpg",
  CCT: "/article_images/CCT/hero.jpg",
}

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] })
const folderColors = [
  "#f3e7c7",
  "#efe2be",
  "#eadbb5",
  "#f6ecd1",
  "#e6d6aa"
]
const articles = [
  {
    title: "Our Collective C.R.A.P.",
    slug: "IOA",
    description: "on digital clutter, memory, and what we keep"
  },
  {
    title: "How to Play with Paper and Pixels",
    slug: "PAP",
    description: "handmade worlds inside digital ones"
  },
  {
    title: "Who Gets to Log Off?",
    slug: "WGTLO",
    description: "disconnection is a privilege"
  },
  {
    title: "That Time I Failed to Archive Back Matter",
    slug: "BM",
    description: "when archiving fails, what remains?"
  },
  {
    title: "New School, Old Troubles",
    slug: "NSOT",
    description: "restructuring, mistrust, and the cost of silence"
  },
  {
    title: "Ceremony, Community, and Tsintskua in Cherán",
    slug: "CCT",
    description: "Interviews on murals, heritage and community"
  },
  {
    title: "The Struggle for Safe Use",
    slug: "SFSU",
    description: "harm reduction, resistance, and what saves lives"
  },
  {
    title: "The Workers Justice Project",
    slug: "WJP",
    description: "holding space, building power"
  },
  {
    title: "Between Worlds",
    slug: "TCK",
    description: "between cultures, building a self"
  },
  {
    title: "Playing Hardball",
    slug: "PH",
    description: "labor, precarity, and the fight to unionize"
  }
]

function Grass({ data }: { data: any[] }) {
  return (
    <div className="absolute top-[45%] left-0 w-full h-32 pointer-events-none z-20">
      {data.map((g, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${g.left}%`,
            height: `${g.height}px`,
            width: `${g.width}px`,
            background: `linear-gradient(to top, #1f3d2b, #6FAF8F)`,
            transformOrigin: "bottom",
          }}
          animate={{
            rotate: [g.tilt, g.tilt + 4, g.tilt],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function Flowers() {
  const flowerColors = [
    "var(--pink)",
    "var(--orange)",
    "var(--blue-light)"
  ]

  return (
    <div className="absolute top-[57%] left-0 w-full pointer-events-none z-30">
      {[...Array(6)].map((_, i) => {
        const left = 10 + i * 14
        const scale = 0.8 + Math.random() * 0.6
        const tilt = -8 + Math.random() * 16
        const petalColor = flowerColors[i % flowerColors.length]

        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: `${left}%`,
              transform: `rotate(${tilt}deg) scale(${scale})`
            }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* 🌸 flower head */}
            <div className="relative w-4 h-4 mb-[2px]">
              <div className="absolute w-2 h-2 rounded-full top-0 left-1" style={{ background: petalColor }} />
              <div className="absolute w-2 h-2 rounded-full top-1 left-0" style={{ background: petalColor }} />
              <div className="absolute w-2 h-2 rounded-full top-1 left-2" style={{ background: petalColor }} />
              <div className="absolute w-2 h-2 rounded-full top-2 left-1" style={{ background: petalColor }} />

              {/* center */}
              <div className="absolute w-1.5 h-1.5 rounded-full top-[5px] left-[5px] bg-[var(--orange-dark)]" />
            </div>

            {/* 🌿 stem */}
            <div className="w-[2px] h-10 bg-[var(--green-dark)]" />
          </motion.div>
        )
      })}
    </div>
  )
}
function SideGrass({ data }: { data: any }) {
  return (
    <div className="absolute top-[40%] left-0 w-full h-32 pointer-events-none z-10">

      {/* LEFT SHORT */}
      {data.leftShort.map((g, i) => (
        <motion.div
          key={"ls" + i}
          className="absolute bottom-0 rounded-full opacity-80"
          style={{
            left: `${g.left}%`,
            height: `${g.height}px`,
            width: `${g.width}px`,
            background: `linear-gradient(to top, #1f3d2b, #6FAF8F)`,
            transformOrigin: "bottom",
            zIndex: 24 // 🔥 ABOVE folders
          }}
          animate={{ rotate: [g.tilt, g.tilt + 4, g.tilt] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ))}

      {/* RIGHT SHORT */}
      {data.rightShort.map((g, i) => (
        <motion.div
          key={"rs" + i}
          className="absolute bottom-0 rounded-full opacity-80"
          style={{
            left: `${g.left}%`,
            height: `${g.height}px`,
            width: `${g.width}px`,
            background: `linear-gradient(to top, #1f3d2b, #6FAF8F)`,
            transformOrigin: "bottom",
          }}
          animate={{ rotate: [g.tilt, g.tilt + 4, g.tilt] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ))}

      {/* LEFT TALL */}
      {data.leftTall.map((g, i) => (
        <motion.div
          key={"lt" + i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${g.left}%`,
            height: `${g.height}px`,
            width: `${g.width}px`,
            background: `linear-gradient(to top, #1f3d2b, #9CCF69)`,
            transformOrigin: "bottom",
            zIndex: 30 // 🔥 ABOVE folders
          }}
          animate={{ rotate: [g.tilt, g.tilt + 2, g.tilt] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      ))}

      {/* RIGHT TALL */}
      {data.rightTall.map((g, i) => (
        <motion.div
          key={"rt" + i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${g.left}%`,
            height: `${g.height}px`,
            width: `${g.width}px`,
            background: `linear-gradient(to top, #1f3d2b, #9CCF69)`,
            transformOrigin: "bottom",
          }}
          animate={{ rotate: [g.tilt, g.tilt + 2, g.tilt] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      ))}

    </div>
  )
}
export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [ready, setReady] = useState(false)

  const [grassData] = useState(() =>
    [...Array(80)].map(() => ({
      height: 20 + Math.random() * 50,
      left: Math.random() * 100,
      width: 1 + Math.random() * 2,
      tilt: -10 + Math.random() * 20,
    }))
  )

  const [sideGrassData] = useState(() => ({
    leftShort: [...Array(25)].map(() => ({
      left: + Math.random() * 8,
      height: 30 + Math.random() * 40,
      width: 2 + Math.random(),
      tilt: -6 + Math.random() * 12,
    })),
    rightShort: [...Array(25)].map(() => ({
      left: 92 + Math.random() * 8,
      height: 30 + Math.random() * 40,
      width: 2 + Math.random(),
      tilt: -6 + Math.random() * 12,
    })),
    leftTall: [...Array(15)].map(() => ({
      left: Math.random() * 6,
      height: 80 + Math.random() * 100,
      width: 2 + Math.random() * 2,
      tilt: -4 + Math.random() * 8,
    })),
    rightTall: [...Array(10)].map(() => ({
      left: 94 + Math.random() * 6,
      height: 80 + Math.random() * 100,
      width: 2 + Math.random() * 2,
      tilt: -4 + Math.random() * 8,
    })),
  }))

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f1113]">
      <div className="relative w-full flex items-center justify-center">
        {/* SIDE CABINETS (BACKGROUND) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          {/* LEFT CABINET */}
          <div className="absolute -left-[1px] w-[260px] h-[60vh]
            bg-gradient-to-b from-[#3a3f45] via-[#2a2f34] to-[#1a1d20]
            border border-black/40 shadow-2xl opacity-90">

            {/* metal sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10" />

            {/* drawers */}
            {[0,1,2].map(i => (
              <div
                key={i}
                className="absolute left-0 w-full h-[33%] border-t border-white/10"
                style={{ top: `${i * 33}%` }}
              >
                {/* handle */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-neutral-500 rounded-full shadow-inner" />
              </div>
            ))}
          </div>

          {/* RIGHT CABINET */}
          <div className="absolute -right-[1px] w-[260px] h-[60vh]
            bg-gradient-to-b from-[#3a3f45] via-[#2a2f34] to-[#1a1d20]
            border border-black/40 shadow-2xl opacity-90">

            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10" />

            {[0,1,2].map(i => (
              <div
                key={i}
                className="absolute left-0 w-full h-[33%] border-t border-white/10"
                style={{ top: `${i * 33}%` }}
              >
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-neutral-500 rounded-full shadow-inner" />
              </div>
            ))}
          </div>

        </div>
        {/* CABINET */}
        <div className="relative w-[90vw] max-w-[1100px] h-[60vh] rounded overflow-visible
    bg-gradient-to-b from-[#2b2f34] via-[#1f2327] to-[#14171a]
    shadow-inner border border-black/30">
          {/* NEON SIGN */}
          <motion.div
            className="absolute -top-20 left-1/2 -translate-x-1/2 z-20
                      px-8 py-4 rounded-md
                      bg-[color:var(--green)]/10 border border-[color:var(--green)]/30 shadow-2xl"

            animate={{
              opacity: [1, 0.9, 1, 0.75, 1, 0.95, 1],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          >

            {/* inner glow */}
            <div className="absolute inset-0 rounded-md bg-green-400/10 blur-md pointer-events-none" />

            <div className="relative text-[28px] tracking-[0.25em] font-light">

              {/* glow layers */}
            <div className="absolute inset-0 blur-md text-[color:var(--green)] opacity-90">
              REBIRTH
            </div>
            <div className="absolute inset-0 blur-2xl text-[color:var(--green)] opacity-70">
              REBIRTH
            </div>

            {/* main tube */}
            <div className="relative text-[color:var(--green)] brightness-125">
              REBIRTH
            </div>

            </div>

            {/* light spill */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] h-[60px]
              bg-green-400/30 blur-2xl" />

          </motion.div>

          {/* == CONTENT AREA == */}
          <div className="absolute inset-0 z-0 overflow-visible">

            {/* ONLY SHOW WHEN OPEN */}
            {ready && (
              <motion.div
                initial={{ opacity: 0 }} // 👈 important
                animate={{ opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
              >

                {/* STACKED FOLDERS */}
                <div className="relative w-full h-full px-10 pt-6">
                  <Grass data={grassData} />
                  <Flowers />
                  {articles.map((a, i) => {
                    const offset = 15+i * 32
                    const color = folderColors[i % folderColors.length]

                    return (
                      <motion.div
                        data-hover
                        onMouseEnter={() => setHovered(a.slug)}
                        onMouseLeave={() => setHovered(null)}
                        key={a.slug}
                        onClick={() => router.push(`/articles/${a.slug}`)}
                        whileHover={{
                          y: -15,
                          scale: 1.02
                        }}
                        className="absolute w-[90%] h-[300px] bg-[#f3e7c7] shadow-md cursor-pointer"
                        style={{
                          top: `${offset}px`,
                          left: `${10+i * 10}px`,
                          zIndex: 10 + i,
                          backgroundColor: color
                        }}
                      >
                        {hovered === a.slug && (
                      <motion.img
                        src={previewImages[a.slug]}
                        className="absolute pointer-events-none"
                        style={{
                          top: "-20px",
                          right: "260px",
                          width: "120px",
                          transform: "rotate(6deg)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                        {/* TAB */}
                        <div 
                          className="absolute -top-5 px-3 py-1 text-xs"
                          style={{
                            left: `${40 + (i % 3) * 100}px`,
                            backgroundColor: color
                          }}
                        >
                          {a.title}
                        </div>

                        {/* DESC */}
                        <div className={`absolute top-2 right-4 text-base opacity-80 text-[var(--green-dark)] ${caveat.className}`}>
                          {a.description}
                        </div>
                      </motion.div>
                    )
                  })}
                  <SideGrass data={sideGrassData} />
                  <motion.img
                    src="/bee.png"
                    className="absolute w-[28px] pointer-events-none z-[999]"
                    style={{
                      left: "50%",
                      top: "55%"
                    }}
                    animate={{
                      x: [0, 120, 200, 120, 0, -120, -200, -120, 0],
                      y: [0, -12, 6, -6, 0, -12, 6, -6, 0],

                      scaleX: [1, 1, 1, -1, -1, -1, -1, 1, 1],

                      rotate: [0, 10, -10, 5, 0, -10, 10, -5, 0],
                      scale: [1, 1.1, 1, 0.95, 1, 1.1, 1, 0.95, 1]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                </div>
              </motion.div>
            )}
          </div>

          {/* ================= DRAWER FRONT ================= */}
          <motion.div
            data-hover
            onClick={() => setOpen((prev) => !prev)}
            animate={{
              y: open ? 340 : 0,
              scale: open ? 1.05 : 1
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute inset-0 z-10 cursor-pointer
              bg-gradient-to-b from-[#e3e6ea] via-[#cfd4da] to-[#b7bcc2]
              border-t-[6px] border-[#9aa1a8]
              shadow-xl"
          >

            {/* LABEL */}
            <div
              className="
                absolute top-6 left-6 w-[240px] h-[44px]
                flex items-center px-3 text-xs tracking-wider font-medium
                text-neutral-800

                border border-neutral-500
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),_0_2px_4px_rgba(0,0,0,0.25)]

                bg-[linear-gradient(
                  to bottom,
                  #f5f5f5,
                  #d6d6d6 40%,
                  #bfbfbf 60%,
                  #eeeeee
                )]
              "
            >
              BACK MATTER — ISSUE 8
            </div>

            {/* LINKS */}
            <div className="absolute right-10 top-16 flex flex-col gap-3 text-xs">

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  router.push("/about")
                }}
                className="
                  relative
                  px-4 py-3
                  text-sm
                  bg-[#f8eebc]
                  text-[var(--black)]
                  border border-black/10
                  shadow-[2px_2px_0px_rgba(0,0,0,0.15)]
                  hover:shadow-[3px_3px_0px_rgba(0,0,0,0.2)]
                  transition-all duration-200
                "
              >
                {/* lines */}
                <div className="absolute inset-0 pointer-events-none
                  bg-[repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 22px,
                    rgba(0,0,0,0.08) 23px
                  )]"
                />

                {/* top margin line */}
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-red-400/40" />

                <span className="relative">about</span>
              </button>

              <a
                href="https://instagram.com/backmattermag"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center
                          bg-[#f8eebc]
                          border border-black/10
                          w-10 h-10
                          shadow-[2px_2px_0px_rgba(0,0,0,0.15)]
                          hover:shadow-[3px_3px_0px_rgba(0,0,0,0.2)]
                          transition-all duration-200"
              >
                <FaInstagram size={18} className="text-[var(--black)]" />
              </a>

              {/*<a
                href="/past-issues"
                onClick={(e) => e.stopPropagation()}
                className="bg-[var(--blue-light)]/20 border border-[var(--blue-light)]/40 
                          px-4 py-2 shadow-sm hover:bg-[var(--blue-light)]/30 
                          transition-all duration-200"
              >
                past issues
              </a>*/}

            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-[#f3e7c7] px-6 py-4 shadow-lg border border-[#c8b98f]
                        text-sm tracking-widest uppercase"
            >
              {open ? "click to close" : "click to open"}
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 h-4 bg-neutral-500 rounded-full shadow-inner" />

          </motion.div>

        </div>
      </div>
    </main>
  )
}