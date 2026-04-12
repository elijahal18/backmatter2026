import Navigation from "./Nav1"
import "./globals.css"
import { poppins, playfair, inter, garamond } from "./fonts"
import { LayoutGroup } from "framer-motion"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${garamond.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-[var(--white)] text-[var(--green-dark)] font-sans">
        <Navigation />

        <LayoutGroup>
          <div className="w-full px-6 py-12">
            {children}
          </div>
        </LayoutGroup>
        <footer className="w-full border-t border-[var(--green-dark)]/10 px-6 py-6 text-sm flex justify-between items-center">

          <span className="text-[var(--blue-light)]/70 font-alt tracking-wide">
            Back Matter 8
          </span>

          <span className="text-[var(--blue-light)] font-alt tracking-[0.2em] uppercase text-xs">
            Spring 2026
          </span>

        </footer>
      </body>
    </html>
  )
}