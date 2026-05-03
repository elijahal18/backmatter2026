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
        src="/article_images/NSOT/img1.png"
        x={m("-25%", "-5%")}
        y="40%"
        rotate={2}
        size={m(200, 320)}
        opacity={1}
        shadow={false}
      />

    </div>
  )
}