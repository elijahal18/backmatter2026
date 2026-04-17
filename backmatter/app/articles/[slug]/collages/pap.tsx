"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <CollageImage
        src="/article_images/PAP/collage2.png"
        x="3%"
        y="40%"
        rotate={2}
        size={350}
        opacity={1}
        shadow={false}
      />
      

    </div>
  )
}