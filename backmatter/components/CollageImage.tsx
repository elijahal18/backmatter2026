"use client"

import { motion } from "framer-motion"

export default function CollageImage({
  src,
  x,
  y,
  rotate,
  size = 120,
  opacity = 1,
  blend = "normal",
  shadow = true
}: {
  src: string
  x: number | string
  y: number | string
  rotate: number
  size?: number
  opacity?: number
  blend?: "normal" | "multiply"
  shadow?: boolean
}) {

  return (
    <motion.img
      src={src}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}

      style={{
        position: "absolute",
        left: typeof x === "number" ? `${x}px` : x,
        top: typeof y === "number" ? `${y}px` : y,
        transform: `rotate(${rotate}deg)`,
        width: size,
        opacity
      }}

      className={`
        ${shadow ? "drop-shadow-[0_8px_10px_rgba(0,0,0,0.6)]" : ""}
        ${blend === "multiply" ? "mix-blend-multiply" : ""}
      `}
    />
  )
}