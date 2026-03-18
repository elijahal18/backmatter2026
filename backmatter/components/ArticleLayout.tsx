import CollageCanvas from "./CollageCanvas"

export default function ArticleLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <div className="relative">

      <CollageCanvas />

      <article className="prose prose-lg relative z-10">
        {children}
      </article>

    </div>
  )
}