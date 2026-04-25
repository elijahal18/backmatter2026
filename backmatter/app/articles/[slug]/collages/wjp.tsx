"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/WJP/wjp1.jpg"
        x="80%"
        y="35%"
        rotate={6}
        size={350}
        opacity={1}
      />
      <CollageImage
        src="/article_images/WJP/wjp2.jpg"
        x="-7%"
        y="75%"
        rotate={6}
        size={350}
        opacity={1}
      />

    </div>
  )
}