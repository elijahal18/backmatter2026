"use client"

import { motion } from "framer-motion"

export default function EightMorph() {
  return (
    <motion.div
      initial={{ rotate: 0, scaleX: 1, opacity: 0 }}
      animate={{
        rotate: 90,        // becomes infinity
        scaleX: 1.6,       // stretch into ∞
        opacity: 0.25
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        delay: 0.5
      }}
      className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
      <div className="text-[220px] font-serif text-[var(--green-dark)]/20 leading-none">
        8
      </div>
    </motion.div>
  )
}