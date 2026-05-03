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
        src="/article_images/IOA/BookScanCenter_8.jpg"
        x={m("90%", "77%")}
        y="40%"
        rotate={6}
        size={m(180, 350)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/IOA/BookScanCenter_10.jpg"
        x={m("-30%", "-5%")}
        y="70%"
        rotate={2}
        size={m(200, 320)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/IOA/phone.png"
        x={m("-25%", "7%")}
        y={"15%"}
        rotate={2}
        size={m(140, 240)}
        opacity={1}
      />

      <CollageImage
        src="/article_images/IOA/book.png"
        x={m("86%", "76%")}
        y="80%"
        rotate={2}
        size={m(180, 320)}
        opacity={1}
        shadow={false}
      />

    </div>
  )
}