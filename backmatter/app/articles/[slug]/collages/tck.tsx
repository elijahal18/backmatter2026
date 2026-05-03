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
        src="/article_images/TCK/Pull quote.jpg"
        x={m("88%", "78%")}
        y="40%"
        rotate={6}
        size={m(220,350)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/TCK/fun_image.png"
        x={m("-29%", "-7%")}
        y="60%"
        rotate={2}
        size={m(200,350)}
        opacity={1}
      />
      {/*
      <CollageImage
        src="/article_images/TCK/badglobe.png"
        x="70%"
        y="15%"
        rotate={6}
        size={500}
        opacity={1}
        shadow={false}
      />

      <CollageImage
        src="/article_images/TCK/losthouse.png"
        x="76%"
        y="80%"
        rotate={2}
        size={340}
        opacity={1}
        shadow={false}
      />
      */}

    </div>
  )
}