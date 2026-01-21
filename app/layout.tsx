import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nova - AI Influencer',
  description: 'Meet Nova, your favorite AI influencer creating content about tech, lifestyle, and the future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
