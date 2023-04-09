import './globals.css'

export const metadata = {
  title: 'Products Page',
  description: 'An app to display products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
