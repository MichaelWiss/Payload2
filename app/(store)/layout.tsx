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
        <div className="announcement mono caps" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '.5rem 1rem',
          background: 'linear-gradient(90deg,var(--hot-pink),var(--acid-lime))',
          borderBottom: '3px solid var(--ink)',
          fontSize: '.85rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '.08em',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}>
          ✨ Spring Collection Live • Free Ship $75+ • Shop Handmade Goods ✨
        </div>

        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          borderBottom: '3px solid var(--ink)',
          background: 'var(--cream)'
        }}>
          <div style={{
            fontSize: 'clamp(28px,6vw,56px)',
            fontWeight: '1000',
            lineHeight: '1',
            letterSpacing: '-.02em'
          }}>
            <div style={{
              background: 'var(--hot-pink)',
              color: '#fff',
              padding: '.15em .35em',
              border: '2px solid var(--ink)',
              boxShadow: '6px 6px 0 var(--ink)',
              display: 'inline-block'
            }}>RITUAL</div>
            <div style={{
              display: 'inline-block',
              marginLeft: '.4rem',
              WebkitTextStroke: '2px var(--ink)',
              color: 'var(--cream)'
            }}>Supply</div>
          </div>
          <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <a href="/" style={{
              textDecoration: 'none',
              color: 'var(--ink)',
              fontWeight: '700',
              fontSize: '.95rem',
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              position: 'relative',
              paddingBottom: '.25rem',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s'
            }}>Home</a>
            <a href="/products" style={{
              textDecoration: 'none',
              color: 'var(--ink)',
              fontWeight: '700',
              fontSize: '.95rem',
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              position: 'relative',
              paddingBottom: '.25rem',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s'
            }}>Shop</a>
            <a href="/cart" style={{
              textDecoration: 'none',
              color: 'var(--ink)',
              fontWeight: '700',
              fontSize: '.95rem',
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              position: 'relative',
              paddingBottom: '.25rem',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s'
            }}>Cart</a>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid var(--ink)',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              boxShadow: '4px 4px 0 var(--ink)'
            }}>🛍️</div>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer>
          <div style={{
            background: 'var(--acid-lime)',
            borderTop: '3px solid var(--ink)',
            textAlign: 'center',
            padding: '8vh 2vw'
          }}>
            <div style={{
              fontSize: 'clamp(80px,25vw,200px)',
              fontWeight: '1000',
              lineHeight: '.85',
              letterSpacing: '-.03em',
              marginBottom: '2rem'
            }}>RITUAL</div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <a href="#" className="btn-primary">Follow on Instagram</a>
              <a href="#" className="btn-primary">Join Mailing List</a>
              <a href="#" className="btn-primary">Visit Studio</a>
            </div>
          </div>
          <div style={{
            background: 'var(--cream)',
            borderTop: '3px solid var(--ink)',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1.5rem',
            fontSize: '.9rem'
          }} className="mono">
            <a href="#" style={{
              color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s'
            }}>Privacy</a>
            <a href="#" style={{
              color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s'
            }}>Terms</a>
            <a href="#" style={{
              color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s'
            }}>Returns</a>
            <a href="#" style={{
              color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s'
            }}>Contact</a>
            <span>© 2025 Ritual Supply Co</span>
          </div>
        </footer>
      </body>
    </html>
  )
}