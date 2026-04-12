"use client"

import { useEffect, useState } from "react"

export default function SnakeCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <img
      src="/snakeheadmouse.png"
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