"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <CollageImage
        src="/article_images/PAP/collage2.png"
        x="-7%"
        y="40%"
        rotate={2}
        size={400}
        opacity={1}
      />
      <CollageImage
        src="/article_images/PAP/collage3.png"
        x="-7%"
        y="80%"
        rotate={2}
        size={400}
        opacity={1}
      />
      

    </div>
  )
}