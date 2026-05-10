"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Caveat,
  EB_Garamond,
  Playfair_Display
} from "next/font/google"

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"]
})

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"]
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"]
})

export default function EditorsNotePage() {
  return (
    <div className="min-h-screen bg-[#dfd3b4] px-4 py-12 md:px-8">

      {/* home button */}
      <Link
        href="/"
        className="
          fixed
          top-5
          right-5
          z-50
          px-4
          py-2
          text-xs
          uppercase
          tracking-[0.18em]
          bg-[#f8eebc]
          border border-black/10
          shadow-[2px_2px_0px_rgba(0,0,0,0.15)]
          hover:translate-y-[1px]
          transition
        "
      >
        ← Cabinet
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          mx-auto
          max-w-3xl
          bg-[#f6f3ee]
          border border-black/10
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          overflow-hidden
        "
      >

        {/* paper texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/paper.png')]" />

        {/* notebook line */}
        <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-red-300/30" />

        {/* paper lines */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            bg-[repeating-linear-gradient(
              to_bottom,
              transparent,
              transparent_31px,
              rgba(0,0,0,0.08)_32px
            )]
          "
        />

        <div className="relative z-10 px-8 py-10 md:px-16 md:py-14">

          {/* header */}
          <div className="mb-12">

            <p className="text-[10px] uppercase tracking-[0.25em] opacity-50 mb-3">
              Issue 8 — REBIRTH
            </p>

            <h1
              className={`
                text-4xl md:text-5xl
                leading-none
                text-[var(--green-dark)]
                ${playfair.className}
              `}
            >
              Letter from
              <br />
              the Editors
            </h1>


          </div>

          {/* body */}
          <div
            className={`
              space-y-8
              text-[20px]
              leading-[1.9]
              text-black/85
              ${garamond.className}
            `}
          >

            <p>
              The eighth issue of <span className="italic">Back Matter</span> publishes during a time of uncertainty.
              Our realities are filled with political upheaval and warfare,
              with technofascism and rising unemployment.
              As students in the Creative Publishing and Critical Journalism program,
              we made a radical choice this semester:
              to move through the world with cautious optimism.
            </p>

            <p>
              In an effort to grapple with this, we come to the theme of REBIRTH. Whether it’s managing our own personal archives, playing handmade video games, reporting on New York City’s safe use spaces, or growing up as a third culture kid in Russia, the pieces in this issue explore the world we’ve been given and shape it into something new. As part of this metamorphosis, or what could be considered the shedding of old skin, we’d like to introduce this issue’s mascot, Rebertha, a friendly snake who you’ll see hiding and slithering across the pages.
            </p>

            <p>
             REBIRTH is often difficult to locate while it’s happening. It can look like uncertainty and disorientation, sitting with unresolved feelings for longer than expected. But it also creates space, an opening where even identity starts to drift, and the world itself begins to feel slightly unfastened.
            </p>

            <p>
              REBIRTH is the willingness to be changed by others. It happens in relation, in conversation, and in collaboration. Whether it’s building a space for immigrant workers, investigating what and how to preserve, or ruminating on our university and its repeated crises—we imagine what might persist, shift, or emerge in uncertain days ahead.
            </p>


            <p>
              REBIRTH asks us to rethink inherited frameworks. It tells us to question our understanding of what a writer is. Let’s keep our sources strong but expand our inquiry. Let’s trust ourselves and our stories. Let’s know when to dig deeper into something or when to flee the ship. We can listen to the rhythm of our own heartbeat, intertwined with the culture’s, and know, this is right.
            </p>

            <p>
              Thank you to our team of editors, who so graciously worked on all these pieces with speed and diligence even with everything else they had going on. Thank you to the design team, led by Giulia Tacchi, for putting together this magazine, for continuing to believe and fight for print media and all the effort that goes into it. Thank you to our social media team for making Back Matter its own influencer, and for being so joyful and playful in bringing these ideas online. Thank you to our managing editor Eva Szilardi-Tierney for keeping everything in order in a way that we alone could not. And thank you to our professors, Leah Prinzivalli and Kayla Romberger, for having faith in us, our ideas, and Back Matter as a whole.
            </p>

            <p>
              And thank you, the reader, for flipping through these pages and considering what it might mean to begin again, not from nothing, but from here.
            </p>


          </div>

          {/* signatures */}
          <div className="mt-20 flex flex-col gap-10 md:flex-row md:justify-between">

            <div>
              <p
                className={`
                  text-4xl
                  rotate-[-2deg]
                  opacity-80
                  ${caveat.className}
                `}
              >
                Kayley Cassidy
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-50">
                Editor in Chief
              </p>
            </div>

            <div>
              <p
                className={`
                  text-4xl
                  rotate-[2deg]
                  opacity-80
                  ${caveat.className}
                `}
              >
                Rachel Potter
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-50">
                Editor in Chief
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  )
}