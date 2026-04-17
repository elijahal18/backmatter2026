"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/CCT/mur1.jpeg"
        x="7%"
        y="20%"
        rotate={2}
        size={300}
        opacity={1}
      />

      <CollageImage
        src="/article_images/CCT/mur2.jpg"
        x="76%"
        y="55%"
        rotate={2}
        size={320}
        opacity={1}
      />

      <CollageImage
        src="/article_images/CCT/mur3.jpg"
        x="7%"
        y="80%"
        rotate={2}
        size={320}
        opacity={1}
      />

    </div>
  )
}