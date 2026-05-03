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
        src="/article_images/WGTLO/phone.jpg"
        x={m("-30%", "-10%")}
        y="50%"
        rotate={6}
        size={m(200, 350)}
        opacity={1}
        shadow={true}
      />

      <CollageImage
        src="/article_images/WGTLO/reba.png"
        x="79%"
        y="80%"
        rotate={6}
        size={m(250, 400)}
        opacity={1}
        shadow={true}
      />

    </div>
  )
}