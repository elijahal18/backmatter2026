"use client"

import CollageImage from "@/components/CollageImage"
import { useEffect, useState } from "react"

export default function MemoryCollage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  const m = (mobile: any, desktop: any) => (isMobile ? mobile : desktop)
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/DA/acid-4.png"
        x={m("88%", "80%")}
        y="40%"
        rotate={6}
        size={m(180, 350)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/DA/acid-6.jpg"
        x={m("-25%", "-5%")}
        y="17%"
        rotate={2}
        size={m(180, 320)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/DA/acid-8.jpg"
        x={m("-23%", "-5%")}
        y="88%"
        rotate={2}
        size={m(170, 320)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/DA/reba.png"
        x={m("-23%", "-5%")}
        y="65%"
        rotate={2}
        size={m(180, 330)}
        opacity={1}
        shadow={false}
      />

    </div>
  )
}