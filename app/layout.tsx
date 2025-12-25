import './globals.css'

export const metadata = {
  title: 'Banking ',
  description: 'Banking SaaS',
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