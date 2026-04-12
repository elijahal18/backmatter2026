"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/PH/soccer.png"
        x="7%"
        y="15%"
        rotate={2}
        size={240}
        opacity={1}
        shadow={false}
      />
      <CollageImage
        src="/article_images/PH/break.png"
        x="76%"
        y="20%"
        rotate={2}
        size={320}
        opacity={1}
        shadow={false}
      />
      <CollageImage
        src="/article_images/PH/contract.png"
        x="7%"
        y="40%"
        rotate={2}
        size={320}
        opacity={1}
        shadow={false}
      />

    </div>
  )
}