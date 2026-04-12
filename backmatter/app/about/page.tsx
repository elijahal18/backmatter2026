"use client"
import Link from "next/link"
export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--white)] px-6">
      <div
        className="
          relative
          w-full max-w-3xl
          p-10
          bg-[#f8eebc]
          text-[var(--black)]
          shadow-[6px_6px_0px_rgba(0,0,0,0.2)]
          rotate-[0.6deg]
        "
      >
        <Link
          href="/"
          className="
            absolute top-4 right-6
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
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background: `repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 26px,
              rgba(0,0,0,0.08) 27px
            )`,
          }}
        />

        {/* red margin line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-red-400/40" />

        <div className="relative flex flex-col gap-8">

          {/* TITLE */}
          <h1 className="text-3xl font-serif tracking-tight text-[var(--orange-dark)]">
            About Back Matter
          </h1>

          {/* BODY */}
          <p className="leading-8 font-serif">
            Back Matter is a space for experimental writing, criticism, and hybrid work focused on media and publication.
            It brings together fiction, poems, creative nonfiction, and visuals on the topic in one place.
          </p>

          <p className="leading-8 font-serif">
            The goal for this 2026 digital edition is to make reading online feel more communal, physical and alive, drawing from collage, print, and scrappy publishing.
          </p>

          {/* MASTHEAD */}
          <div>
            <h2 className="text-2xl tracking-tight mb-6 text-[var(--orange-dark)] font-serif">
              Masthead
            </h2>

            <div className="space-y-3 font-sans">

              <p><span className="italic">Managing Editor</span> — Eva Szilardi-Tierny</p>

              <p><span className="italic">Co-Editors in Chief</span> — Rachel Potter, Kayley Cassidy</p>

              <p><span className="italic">Creative Director</span> — Giulia Tacchi</p>

              <p><span className="italic">Associate Editors</span> — Fatoumata Bah, Lillian Heckler, Mandy Kim, Katelyn Kimberlain, Austin Tannenbaum</p>

              <p><span className="italic">Marketing & Communication Co-Directors</span> — Camila Andrade Pires, Sasha Fuetsch</p>

              <p><span className="italic">Digital Editor</span> — Cara Szigethy</p>

              <p><span className="italic">Digital Designer</span> — Elijah Ager Luckett</p>

              <p><span className="italic">Art Director</span> — Montse Marti</p>

              <p><span className="italic">Print Designers</span> — Ash Reynolds, Rayna Salam, Katya Wack</p>

            </div>
          </div>

        </div>

        {/* tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/60 rotate-2 shadow-sm" />

      </div>
    </div>
  )
}