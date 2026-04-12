import { Poppins, Playfair_Display, Inter, EB_Garamond } from "next/font/google"

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
})

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

export const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap"
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
})