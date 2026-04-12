export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">

      {/* TITLE */}
      <h1 className="text-3xl font-serif tracking-tight text-[var(--orange-dark)]">
        About Back Matter
      </h1>

      {/* BODY */}
      <p className="leading-8 text-[var(--green-dark)] font-serif">
        Back Matter is a space for experimental writing, criticism, and hybrid work focused on media and publication.
        It brings together fiction, poems, creative nonfiction, and visuals on the topic in one place.
      </p>

      <p className="leading-8 text-[var(--green-dark)] font-serif">
        The goal for this 2026 digital edition is to make reading online feel more communal, physical and alive, drawing from collage, print, and scrappy publishing.
      </p>

      {/* MASTHEAD */}
      <div>
        <h2 className="text-2xl tracking-tight mb-6 text-[var(--orange-dark)] font-serif">
          Masthead
        </h2>

        <div className="space-y-3 text-[var(--green-dark)] font-sans">

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
  )
}