"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/DA/acid-4.png"
        x="80%"
        y="40%"
        rotate={6}
        size={350}
        opacity={1}
      />

      <CollageImage
        src="/article_images/DA/acid-6.jpg"
        x="-5%"
        y="17%"
        rotate={2}
        size={320}
        opacity={1}
      />

      <CollageImage
        src="/article_images/DA/acid-8.jpg"
        x="-5%"
        y="88%"
        rotate={2}
        size={320}
        opacity={1}
        shadow={false}
      />

    </div>
  )
}