import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digital School - R&D',
  description: 'Digital School - R&D',
  generator: 'Digital School - R&D',
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} font-sans text-gray-900`}>{children}</body>
    </html>
  )
}
