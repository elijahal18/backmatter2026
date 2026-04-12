"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/IOA/sign.png"
        x="7%"
        y="15%"
        rotate={2}
        size={240}
        opacity={1}
        shadow={false}
      />
      <CollageImage
        src="/article_images/IOA/scale.png"
        x="76%"
        y="80%"
        rotate={2}
        size={320}
        opacity={1}
        shadow={false}
      />

    </div>
  )
}