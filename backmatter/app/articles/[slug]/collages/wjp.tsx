"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/WJP/wjp1.jpg"
        x="76%"
        y="40%"
        rotate={6}
        size={350}
        opacity={1}
      />

    </div>
  )
}