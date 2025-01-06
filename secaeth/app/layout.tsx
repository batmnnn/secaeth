import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'SecÆth - Satellite Authentication',
  description: 'Revolutionary satellite-based authentication coming soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  )
}

