import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inti Fernandez | Portfolio',
  // TODO: Reemplazar esta info
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body>{children}</body>
    </html>
  )
}
