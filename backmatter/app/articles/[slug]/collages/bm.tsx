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

      {/*<CollageImage
        src="/article_images/BM/abstracttech1.jpg"
        x={m("88%","76%")}
        y="50%"
        rotate={90}
        size={m(350,500)}
        opacity={1}
      />*/}

      <CollageImage
        src="/article_images/BM/cdarchive.jpg"
        x={m("-20%","-7%")}
        y="20%"
        rotate={2}
        size={m(150,320)}
        opacity={1}
      />
      <CollageImage
        src="/article_images/BM/archiverebertha.png"
        x={m("90%","80%")}
        y="80%"
        rotate={2}
        size={m(200,320)}
        opacity={1}
        shadow={false}
      />
      <CollageImage
        src="/article_images/BM/wayback.png"
        x={m("83%","76%")}
        y="35%"
        rotate={90}
        size={m(350,500)}
        opacity={1}
      />

    </div>
  )
}