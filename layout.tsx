import "./globals.css"
import { Inter, Orbitron } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata = {
  title: "Krishna Chaitanya Bodepudi - Cybersecurity Analyst",
  description: "Cybersecurity Analyst and Information Systems Graduate Student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable}`}>{children}</body>
    </html>
  )
}

