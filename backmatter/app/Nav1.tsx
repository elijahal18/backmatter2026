export default function Navigation() {
  return (
    <nav className="w-full border-b border-[var(--green-dark)]/10 py-6 px-8 flex justify-between items-center bg-[var(--white)]">
      <h1 className="text-xl font-semibold tracking-wide text-[var(--green-dark)]">
        Back Matter
      </h1>
      <div className="flex gap-6 text-sm opacity-80">
        <a href="/" className="transition-colors duration-200 hover:text-[#F95738]">
          Home
        </a>
        <a href="/about" className="transition-colors duration-200 hover:text-[#F95738]">
          About
        </a>
        
      </div>
    </nav>
  )
}