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
        src="/article_images/CCT/mur1.jpeg"
        x={m("-30%","-7%")}
        y="20%"
        rotate={10}
        size={m(200,300)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/CCT/mur2.jpg"
        x={m("88%","80%")}
        y="55%"
        rotate={0}
        size={m(180,320)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/CCT/mur3.jpg"
        x={m("-25%","-7%")}
        y="80%"
        rotate={-6}
        size={m(180,320)}
        opacity={1}
      />

    </div>
  )
}