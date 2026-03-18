import Navigation from "../components/Nav"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 bg-[var(--bg-cream)]" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(214,236,255,0.4),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,224,236,0.4),transparent_40%)]" />

        <Navigation />

        <div className="max-w-5xl mx-auto px-6 py-16">
          {children}
        </div>

      </body>
    </html>
  )
}