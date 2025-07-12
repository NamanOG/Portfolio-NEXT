import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Naman Bagdiya | Portfolio',
  description: 'Web Developer, Digital Artisan & Tech Enthusiast from Raipur, CG. Explore my projects and skills in web development.',
  keywords: ['Naman Bagdiya', 'Web Developer', 'Portfolio', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Naman Bagdiya' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {icon: '/naman_omoji.png',},
}

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
