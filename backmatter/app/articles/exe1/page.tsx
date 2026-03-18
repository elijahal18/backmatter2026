import CollageImage from "../../../components/CollageImage"

export default function Page() {
  return (
    <div className="relative w-full min-h-screen">

      {/* COLLAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <CollageImage
          src="/paper.png"
          x="15%"
          y="20%"
          rotate={-10}
          size={180}
          opacity={0.6}
        />

        <CollageImage
          src="/paper.png"
          x="70%"
          y="50%"
          rotate={8}
          size={160}
          opacity={0.6}
        />
      </div>

      {/* ARTICLE */}
      <article className="relative z-10 max-w-3xl mx-auto">

        <h1 className="text-3xl mb-8 text-[var(--green-dark)]">
          Example 2
        </h1>

        <p className="leading-7 mb-6">
          First second article. 
        </p>

        <p className="leading-7">
          There is a wisdom that is woe; but there is a woe that is madness. And there is a Catskill eagle in some souls that can alike dive down into the blackest gorges, and soar out of them again and become invisible in the sunny spaces. And even if he forever flies within the gorge, that gorge is in the mountains; so that even in his lowest swoop the mountain eagle is still higher than other birds upon the plain, even though they soar.
        </p>

      </article>

    </div>
  )
}