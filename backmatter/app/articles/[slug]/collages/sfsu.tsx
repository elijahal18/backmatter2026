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
        src="/article_images/SFSU/sign.png"
        x={m("-18%", "7%")}
        y="15%"
        rotate={2}
        size={m(180,240)}
        opacity={1}
        shadow={false}
      />
      {/*<CollageImage
        src="/article_images/SFSU/scale.png"
        x="76%"
        y="80%"
        rotate={2}
        size={320}
        opacity={1}
        shadow={false}
      />*/}
      <CollageImage
        src="/article_images/SFSU/img1.jpg"
        x={m("85%", "76%")}
        y="44%"
        rotate={-1}
        size={m(250,400)}
        opacity={1}
        shadow={true}
      />
      <CollageImage
        src="/article_images/SFSU/litter.jpg"
        x={m("-30%", "-7%")}
        y="70%"
        rotate={-1}
        size={m(200,400)}
        opacity={1}
        shadow={true}
      />

    </div>
  )
}