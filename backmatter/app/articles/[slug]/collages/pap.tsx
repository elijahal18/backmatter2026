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
        src="/article_images/PAP/collage2.png"
        x={m("-35%", "-7%")}
        y="40%"
        rotate={m(-30, 2)}
        size={m(250, 400)}
        opacity={1}
      />
      <CollageImage
        src="/article_images/PAP/collage3.png"
        x={m("88%", "-7%")}
        y="80%"
        rotate={2}
        size={m(220, 400)}
        opacity={1}
      />
      

    </div>
  )
}