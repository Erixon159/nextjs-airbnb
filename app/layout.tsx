import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import { Inter } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/navbar/Navbar'
import Providers from '@/app/providers'

export const metadata: Metadata = {
  title: 'Next.js AirBnB',
  description: 'Feel at home, away from home.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
