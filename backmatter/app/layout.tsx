import "./globals.css"
import { poppins, playfair, inter, garamond } from "./fonts"
import { LayoutGroup } from "framer-motion"
import SnakeCursor from "../components/SnakeHeadCursor"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${garamond.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans">
        <SnakeCursor />
        <LayoutGroup>
          <div className="w-full min-h-screen">
            {children}
          </div>
        </LayoutGroup>
      </body>
    </html>
  )
}