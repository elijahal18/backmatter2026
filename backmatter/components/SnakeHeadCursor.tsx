"use client"

import { useEffect, useState } from "react"

export default function SnakeCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // detect clickable / interactive elements
      if (
        target.closest("a, button, [data-hover]")
      ) {
        setHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (
        target.closest("a, button, [data-hover]")
      ) {
        setHovering(false)
      }
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <img
      src={hovering ? "/mousehover.png" : "/mousenormal.png"}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 40,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  )
}