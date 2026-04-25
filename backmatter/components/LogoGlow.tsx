"use client"

export default function LogoGlow() {
  return (
    <div
      className="absolute z-30"
      style={{
        top: "60px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div
        className="
            px-10 py-4   // ⬅️ slightly more padding
            bg-[#d8d1bd]
            border border-[#bfb6a4]
            shadow-[0_4px_10px_rgba(0,0,0,0.25)]
        "
        >
        <img
            src="/logo.png"
            alt="Back Matter"
            style={{
            width: 280,   // ⬅️ was 220 → bigger but still clean
            display: "block",
            filter: "contrast(1.2) saturate(0.9)"
            }}
        />
      </div>
    </div>
  )
}