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
        src="/article_images/PH/soccer.png"
        x={m("-25%", "0%")}
        y="15%"
        rotate={2}
        size={m(300,400)}
        opacity={1}
        shadow={false}
      />
      <CollageImage
        src="/article_images/PH/break.png"
        x={m("88%", "76%")}
        y="18%"
        rotate={-60}
        size={m(240,300)}
        opacity={1}
        shadow={false}
      />
      {/*<CollageImage
        src="/article_images/PH/contract.png"
        x="7%"
        y="35%"
        rotate={-50}
        size={320}
        opacity={1}
        shadow={false}
      />*/}

      <CollageImage
        src="/article_images/PH/referee-rebertha.png"
        x={m("85%", "80%")}
        y="76%"
        rotate={0}
        size={m(200,320)}
        opacity={1}
        shadow={false}
      />

    </div>
  )
}