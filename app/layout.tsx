import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inti Fernandez | Portfolio',
  // TODO: Reemplazar esta info
  description: 'TEXADev portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <head>
        {/* doesn't work */}
        <link rel="icon" href="/images/icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
