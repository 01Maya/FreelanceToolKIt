import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Freelancer Toolkit - The All-in-One Tool Every Freelancer Needs",
  description:
    "Create invoices, track time, and manage clients — all in one simple tool. Trusted by 5,000+ freelancers worldwide.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-heading: ${playfairDisplay.variable};
}
        `}</style>
      </head>
      <body className={`${playfairDisplay.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
