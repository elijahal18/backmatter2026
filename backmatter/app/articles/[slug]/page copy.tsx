"use client"

import CollageImage from "../../../components/CollageImage"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"

export default function Page() {
  const params = useParams()
  const slug = params.slug

  return (
    <div className="relative w-full min-h-screen bg-[var(--white)] text-[var(--black)]">

      {/* HERO BUBBLE */}
      <motion.div
        layoutId={`bubble-${slug}`}
        className="flex justify-center mt-20"
      >
        <motion.div
          layoutId={`bubble-inner-${slug}`}
          className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-xl"
        >
          <img
            src="/poppy.jpg"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* COLLAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <CollageImage
          src="/driedflower1.png"
          x="15%"
          y="20%"
          rotate={-10}
          size={180}
          opacity={0.6}
        />

        <CollageImage
          src="/driedmoth1.png"
          x="70%"
          y="50%"
          rotate={8}
          size={160}
          opacity={0.6}
        />
      </div>

      {/* ARTICLE */}
      <article className="relative z-10 max-w-2xl mx-auto mt-16 px-6">

        {/* TITLE */}
        <h1 className="
          text-4xl 
          md:text-5xl
          mb-10 
          tracking-tight 
          text-[var(--green)]
          font-serif
        ">
          Example 1
        </h1>

        {/* BODY */}
        <div className="
          text-[17px] 
          leading-8 
          font-serif 
          text-[color:rgba(34,34,34,0.9)]
        ">


          <p className="mb-6">
            When I arrived in New York fresh off graduating during the recession that defined a generation of American millennials, I had stars in my eyes. I passed on a job in book publishing because the salary was barely livable.
          </p>

          <p className="mb-6 leading-7">
            I had stars in my eyes when I landed my first media job at a premier magazine publisher in the big city, even though I’d already been laid off from my previous job, as a copy editor working the graveyard shift at the daily print newspaper in my hometown. I quickly excelled. I was the only writer on a team producing award-winning campaigns in digital advertising. Digital was the future.
          </p>

          <p className="mb-6 leading-7">
            By the time I secured a management position, things started to change. The media industry was troubled, and maybe digital couldn’t save it, after all. In the 2010s anyone in the industry could tell you of the incessant fear that the hammer would drop on them in the next round of increasingly frequent layoffs.
          </p>

          <p className="mb-6 leading-7">
            I kept making the cut, and still I had stars in my eyes. As a writer, I was, unbelievably, financially independent in an increasingly expensive city that I could still afford to live in. How many student journalists from Ohio got to be part of legacy magazine journalism? And sure, my work was rarely bylined, paid for by advertisers as a business model, but I was part of a company doing the important work of journalism. So what if I was on the advertising side of the business writing banner ads?
          </p>

          <p className="mb-6 leading-7">
            It’s just that the editorial salaries were unlivable. And what was that scandal about the internship program that was shut down for paying nothing at all, not to mention the abusive working environment?
          </p>

          <p className="mb-6 leading-7">
            I removed the rose-colored glasses, wiped the smudges on my designer sleeve. This was the publisher of the world’s premier fashion magazine, after all, and yes, I did ride the elevator with Ms. Wintour once, though to be fair I was already on when she stepped in. I didn’t step off.
          </p>

          <p className="mb-6 leading-7">
            Instead I changed jobs, swapping one legacy publisher for another. This company published one of the most influential news magazines in history.
          </p>

          <p className="mb-6 leading-7">
            It was an election year and a woman was running for president. Surely, things would get better.
          </p>

          <p className="mb-6 leading-7">
            At my new job, I pitched big ideas for campaigns centering women who were boundary pushers making change, including a campaign to celebrate women who were first in their fields. I was asked by a male executive whether we really needed that.
          </p>

          <p className="mb-6 leading-7">
            Two years after Hillary lost, that iconic news magazine was sold off to a private buyer, a literal billionaire.
          </p>

          <p className="mb-6 leading-7">
            TIME was the same magazine that ran the print Pull from Robert Rauschenberg’s 1974 Hoarfrost Series. The silkscreen on fabric, silk and cheesecloth used two images without permission, and the photographer Morton Beebe sued in what was an early appropriation lawsuit.
          </p>

          <p className="mb-6 leading-7 font-semibold">
            Social Media, Art, and the Ethics of Success in a Post-Internet Era
          </p>

          <p className="mb-6 leading-7">
            The work of Rauschenberg, currently on display across the city, asks a question of etiquette: How does an artist conduct themselves once they become successful? How do they broker their power?
          </p>

          <p className="mb-6 leading-7">
            In my fiction work, I write about what humans do with power. How it changes even the lowliest in the chain; how it changes the values of a person whose most important personal value was integrity. How easy it is to slide into a more comfortable position in life, always made possible by the exploitation of someone else.
          </p>

          <p className="mb-6 leading-7">
            That’s the cost of existing in capitalism. And we are all guilty. So how do we, how does the artist, cause the least harm in a system designed to profit off creative labor, when we are the creatives?
          </p>

          <p className="mb-6 leading-7">
            At a fragile time for American art and freedom of speech in a volatile sociopolitical climate, Rauschenberg’s Combines become metaphors at the intersection of the artist before and the artist after success.
          </p>

          <p className="mb-6 leading-7">
            What would Rauschenberg make of the current state of media?
          </p>

          <p className="mb-6 leading-7">
            To understand his work, it must be pieced together by the viewer, much like an artist’s career. Perhaps the lack of a full retrospective is itself a statement about what it means to be a working creative today.
          </p>

          <p className="mb-6 leading-7">
            It’s worth comparing Rauschenberg’s mixed media prints to social media and online formats today. From both ends, he learned that artists deserve to be paid, first as someone struggling for materials, later as someone sued for using another artist’s work.
          </p>

          <p className="mb-6 leading-7">
            This makes him central to the modern paradox of the artist: if you are not starving, are you a sellout? And if you are profiting, how do you support others? How do you hold the door open?
          </p>

          <p className="mb-6 leading-7">
            Rauschenberg might be horrified to see the combine of privately owned journalism and tech, and what AI does to the value of the written word, while consuming massive environmental resources.
          </p>

          <p className="mb-6 leading-7">
            After 15 years as a writer, I can offer one account of what happens on both sides of success. When I was a successful working writer, I was making an income, not art.
          </p>

          <p className="mb-6 leading-7">
            One campaign I was assigned was for a brand publicly anti-LGBTQ under the guise of being a family brand. I refused to work on it. I never said why.
          </p>

          <p className="mb-6 leading-7">
            I still believe that moment contributed to my eventual layoff.
          </p>

          <p className="mb-6 leading-7">
            Years later, I still flinch when I see the brand in the grocery aisle. Sometimes it’s the only one that carries my son’s favorite pasta, and I have to choose between integrity and avoiding a meltdown.
          </p>

          <p className="mb-6 leading-7">
            The decisions we make shape our lives. When I’ve spoken up, it has cost me jobs, money, and stability. And still I try to live by those principles.
          </p>

          <p className="mb-6 leading-7">
            Back at the company that owned TIME, I was laid off in a merger. My role was eliminated, then reposted at a lower level for less pay.
          </p>

          <p className="mb-6 leading-7">
            The idea I had pitched and was told we didn’t need was later executed by someone else.
          </p>

          <p className="mb-6 leading-7">
            Journalism died that day for me. I stepped off the elevator of legacy media and wiped the stars from my eyes.
          </p>

          <p className="mb-6 leading-7">
            Now, I’m writing fiction in the MFA program at The New School. Sometimes it’s art that brings us closest to truth, and to change.
          </p>
        </div>
      </article>

    </div>
  )
}