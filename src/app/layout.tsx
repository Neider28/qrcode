import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QRCode',
  description: 'A simple QA quote generator application that requires you to use external library.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
