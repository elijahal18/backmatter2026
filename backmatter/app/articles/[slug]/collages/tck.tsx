"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/TCK/Pull quote.jpg"
        x="76%"
        y="40%"
        rotate={6}
        size={350}
        opacity={1}
      />

      <CollageImage
        src="/article_images/TCK/fun_image.png"
        x="-7%"
        y="60%"
        rotate={2}
        size={340}
        opacity={1}
      />

      <CollageImage
        src="/article_images/TCK/badglobe.png"
        x="70%"
        y="15%"
        rotate={6}
        size={500}
        opacity={1}
        shadow={false}
      />

      <CollageImage
        src="/article_images/TCK/losthouse.png"
        x="76%"
        y="80%"
        rotate={2}
        size={340}
        opacity={1}
        shadow={false}
      />


    </div>
  )
}