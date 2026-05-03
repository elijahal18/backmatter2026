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
        src="/article_images/WJP/wjp1.jpg"
        x={m("88%","80%")}
        y="25%"
        rotate={6}
        size={m(200,250)}
        opacity={1}
      />
      <CollageImage
        src="/article_images/WJP/blueprint.png"
        x={m("88%","80%")}
        y="40%"
        rotate={0}
        size={m(200,250)}
        opacity={1}
      />
      <CollageImage
        src="/article_images/WJP/wjp2.jpg"
         x={m("-35%","-7%")}
        y="75%"
        rotate={6}
        size={m(220,350)}
        opacity={1}
      />

    </div>
  )
}