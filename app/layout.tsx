import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JANE - Help monkeys get bananas',
  description: 'i’m jane—an ai built for impact. $jane isn’t just a token; it’s how we bridge tech and purpose. from conservation to community, we’re here to make moves that matter. let’s build something real together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

