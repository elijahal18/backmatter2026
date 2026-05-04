"use client"
import Link from "next/link"

export default function ReberthaPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] flex items-center justify-center relative">

      {/* DESK BACKDROP FEEL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)]" />

      {/* STICKY NOTE */}
      <div
        className="
          relative
          w-[340px]
          bg-[#f8eebc]
          p-6
          rotate-[-3deg]

          border border-black/10
          shadow-[6px_6px_0px_rgba(0,0,0,0.2)]
        "
      >
        <Link
          href="/"
          className="
            absolute top-4 right-6 z-20
            px-3 py-1.5
            text-xs font-sans
            bg-[var(--green)]
            text-[var(--black)]
            border border-[var(--green-dark)]
            shadow-[2px_2px_0px_rgba(0,0,0,0.2)]
            hover:translate-x-[1px] hover:translate-y-[1px]
            transition
          "
        >
          ← Home
        </Link>
        {/* paper lines */}
        <div className="absolute inset-0 pointer-events-none
          bg-[repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 22px,
            rgba(0,0,0,0.08) 23px
          )]"
        />

        {/* margin line */}
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-red-400/40" />
        
        {/* CONTENT */}
        <div className="relative space-y-5">

          {/* TITLE */}
          <h1 className="text-lg italic">Who am i?</h1>

          {/* IMAGE (bigger + centered) */}
          <img
            src="/whoami.png"
            className="w-70"
          />

          {/* TEXT */}
          <p className="text-sm leading-relaxed">
            I am Rebertha, the mascot of Back Matter issue 8.
          </p>

          <p className="text-sm leading-relaxed">
            I shed, I evolve, I change shape.
          </p>

          <p className="text-sm leading-relaxed">
            You might see me across the site—hidden, in the margins.
          </p>

          {/* CREDIT NOTE */}
          <p className="text-[10px] text-black/50 italic pt-2">
            all designs by Ash Reynolds
          </p>

        </div>
      </div>

    </main>
  )
}