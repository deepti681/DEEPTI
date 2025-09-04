import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Deepti Pahuja | Frontend Developer",
  description:
    "Portfolio of Deepti Pahuja, a passionate Frontend Developer specializing in creating modern, responsive, and user-friendly web applications.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
