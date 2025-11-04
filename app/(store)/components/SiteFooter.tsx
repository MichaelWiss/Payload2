export default function SiteFooter() {
  return (
    <footer>
      <div
        style={{
          background: 'var(--acid-lime)',
          borderTop: '3px solid var(--ink)',
          textAlign: 'center',
          padding: '8vh 2vw',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(80px,25vw,200px)',
            fontWeight: 1000,
            lineHeight: '.85',
            letterSpacing: '-.03em',
            marginBottom: '2rem',
          }}
        >
          RITUAL
        </div>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <a href="#" className="btn-primary">
            Follow on Instagram
          </a>
          <a href="#" className="btn-primary">
            Join Mailing List
          </a>
          <a href="#" className="btn-primary">
            Visit Studio
          </a>
        </div>
      </div>
      <div
        className="mono"
        style={{
          background: 'var(--cream)',
          borderTop: '3px solid var(--ink)',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '1.5rem',
          fontSize: '.9rem',
        }}
      >
        <a
          href="#"
          style={{
            color: 'var(--ink)',
            textDecoration: 'none',
            borderBottom: '2px solid transparent',
            transition: 'border-color .2s',
          }}
        >
          Privacy
        </a>
        <a
          href="#"
          style={{
            color: 'var(--ink)',
            textDecoration: 'none',
            borderBottom: '2px solid transparent',
            transition: 'border-color .2s',
          }}
        >
          Terms
        </a>
        <a
          href="#"
          style={{
            color: 'var(--ink)',
            textDecoration: 'none',
            borderBottom: '2px solid transparent',
            transition: 'border-color .2s',
          }}
        >
          Returns
        </a>
        <a
          href="#"
          style={{
            color: 'var(--ink)',
            textDecoration: 'none',
            borderBottom: '2px solid transparent',
            transition: 'border-color .2s',
          }}
        >
          Contact
        </a>
        <span>© 2025 Ritual Supply Co</span>
      </div>
    </footer>
  )
}
