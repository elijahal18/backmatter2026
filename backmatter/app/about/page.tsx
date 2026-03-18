export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">

      <h1 className="text-3xl font-semibold text-[var(--green-dark)]">
        About Back Matter
      </h1>

      <p className="leading-7 text-[var(--green-main)]">
        Back Matter is a space for experimental writing, criticism, and hybrid work focused on media and publication.
        It brings together fiction, poems, creative nonfiction, and visuals on the topic in one place.
      </p>

      <p className="leading-7 text-[var(--green-main)]">
        The theme of this 2026 digital edition is to make reading online feel more physical and alive, drawing from collage, print, and scrappy publishing.
      </p>

      <div>
        <h2 className="text-xl font-semibold mb-3 text-[var(--green-dark)]">
          Team
        </h2>
        <h3 className="text-l font-semibold mb-3 text-[var(--green-dark)]">
          Design
        </h3>

        <div className="space-y-1 text-[var(--green-main)]">
          <p>Katya Wack</p>
          <p>Montse Marti</p>
          <p>Rayna Salam</p>
          <p>Sasha Fuetsch</p>
          <p>Ash Reynolds</p>
          <p>Camila Andrade Pires</p>
          <p>Cara Szigethy</p>
          <p>Giulia Tacchi</p>
          <p>Elijah Ager Luckett</p>
        </div>
      </div>

    </div>
  )
}