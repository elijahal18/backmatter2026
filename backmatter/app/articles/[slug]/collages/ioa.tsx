"use client"

import CollageImage from "@/components/CollageImage"

export default function MemoryCollage() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/article_images/IOA/BookScanCenter_8.jpg"
        x="76%"
        y="40%"
        rotate={6}
        size={350}
        opacity={1}
      />

      <CollageImage
        src="/article_images/IOA/BookScanCenter_10.jpg"
        x="10%"
        y="70%"
        rotate={2}
        size={320}
        opacity={1}
      />

      <CollageImage
        src="/article_images/IOA/phone.png"
        x="7%"
        y="15%"
        rotate={2}
        size={240}
        opacity={1}
        shadow={false}
      />

      <CollageImage
        src="/article_images/IOA/book.png"
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