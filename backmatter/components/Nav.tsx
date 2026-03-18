import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center 
                    bg-[var(--green-dark)] border-b border-[var(--green-main)]/40 shadow-md">

      <h1 className="text-xl font-semibold tracking-wide text-[var(--green-light)]">
        Back Matter
      </h1>

      <div className="flex gap-6 text-sm text-[var(--green-light)]">
        <Link 
          href="/" 
          className="hover:text-[var(--green-accent)] transition"
        >
          Home
        </Link>

        <Link 
          href="/about" 
          className="hover:text-[var(--green-accent)] transition"
        >
          About
        </Link>
      </div>
    </nav>
  )
}