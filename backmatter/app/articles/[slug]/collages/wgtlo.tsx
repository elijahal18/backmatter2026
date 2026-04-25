"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/WGTLO/phone.jpg"
        x="-10%"
        y="50%"
        rotate={6}
        size={350}
        opacity={1}
        shadow={true}
      />

    </div>
  )
}