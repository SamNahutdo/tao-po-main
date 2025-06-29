import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: "%s | TaoPo",
    default: "TaoPo",
  },
  description: "A web app for managing TaoPo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
