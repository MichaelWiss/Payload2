import PreHeader from './components/PreHeader'
import NavBar from './components/NavBar'
import SiteFooter from './components/SiteFooter'
import './globals.css'

export const metadata = {
  title: 'Ritual Supply Co',
  description: 'Handcrafted ritual goods for grounding and intention',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PreHeader />
        <NavBar />
        <main>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
