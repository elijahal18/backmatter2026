"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

let quoteCounter = 0

export default function SideQuote({
  children,
  side: forcedSide,
}: {
  children: React.ReactNode
  side?: "left" | "right"
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  const indexRef = useRef<number | null>(null)
  if (indexRef.current === null) {
    indexRef.current = quoteCounter++
  }

  const computedSide =
  forcedSide ??
  (indexRef.current % 2 === 0 ? "left" : "right")

  const tilt = (indexRef.current % 3 - 1) * 1.5

  const hasTriggered = useRef(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true

          timeout = setTimeout(() => {
            setVisible(true)
          }, 500) 
        }
      },
      {
        rootMargin: "0px 0px -40% 0px",
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <span className="relative inline">
      <span ref={ref} className="bg-[var(--pink)]/20 px-[2px]">
        {children}
      </span>

      <motion.span
        className="
          hidden lg:block
          absolute
          text-lg
          italic
          text-[var(--green-dark)]
          leading-8
        "
        style={{
          top: 0,
          transform: `translateY(-10%) rotate(${tilt}deg)`,
          ...(computedSide === "left"
            ? { x: "-90%" }
            : { x: "156%" }),
        }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative w-[460px] min-h-[200px]">
          {/* PAPER */}
          <div
            className="
              absolute
              inset-0
              -z-10
              bg-[url('/paper.png')]
              bg-[length:100%_100%]
              bg-no-repeat
              opacity-95
              pointer-events-none
            "
          />

          {/* TEXT CONTENT */}
          <div className="px-18 py-12">
            <motion.span
              initial={{ backgroundSize: "0% 0.6em" }}
              animate={{
                backgroundSize: visible ? "100% 0.6em" : "0% 0.6em",
              }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="
                bg-gradient-to-r
                from-[var(--pink)]/40
                to-[var(--pink)]/40
                bg-no-repeat
                [background-position:0_85%]
                inline
              "
            >
              {children}
            </motion.span>
          </div>

        </div>
      </motion.span>
    </span>
  )
}