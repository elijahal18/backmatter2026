import Link from "next/link"
import CollageImage from "../components/CollageImage"

const articles = [
  { title: "Exe", slug: "exe" },
  { title: "Exe 1", slug: "exe1" },
  { title: "Exe 2", slug: "exe2" },
]

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">

      {/* COLLAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <CollageImage src="/paper.png" x="10%" y="20%" rotate={-12} size={140} opacity={0.8} />
        <CollageImage src="/paper.png" x="70%" y="50%" rotate={8} size={160} opacity={0.8} />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">

        {/* TITLE BLOCK */}
        <div className="text-center flex flex-col items-center gap-4">

          <h2 className="text-4xl font-semibold text-[var(--green-dark)] tracking-wide">
            Issue 01
          </h2>

          {/* editorial divider */}
          <div className="w-16 h-[2px] bg-[var(--green-accent)]" />

        </div>

        {/* ARTICLE GRID */}
        <div className="bg-[var(--green-light)]/40 border border-[var(--green-main)]/10 rounded-xl py-12">

          {[0, 2].map((start, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-16 mb-12 last:mb-0"
              style={{ marginLeft: rowIndex % 2 === 1 ? 60 : 0 }}
            >
              {articles.slice(start, start + 2).map((article, i) => (
                <Link
                  key={i}
                  href={`/articles/${article.slug}`}
                  className="w-36 h-36 rounded-full flex items-center justify-center text-center p-4 
                             transition transform hover:scale-110 hover:-rotate-2

                             bg-white
                             border-2 border-[var(--green-main)]/30

                             shadow-md hover:shadow-xl"
                >
                  <span className="text-sm font-medium text-[var(--green-dark)]">
                    {article.title}
                  </span>
                </Link>
              ))}
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}