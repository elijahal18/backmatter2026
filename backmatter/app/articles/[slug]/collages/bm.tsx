"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/BM/abstracttech1.jpg"
        x="76%"
        y="50%"
        rotate={2}
        size={400}
        opacity={1}
      />

      <CollageImage
        src="/article_images/BM/cdarchive.jpg"
        x="7%"
        y="15%"
        rotate={2}
        size={320}
        opacity={1}
      />

    </div>
  )
}