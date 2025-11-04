const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Shop' },
  { href: '/cart', label: 'Cart' },
]

export default function NavBar() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        borderBottom: '3px solid var(--ink)',
        background: 'var(--cream)',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(28px,6vw,56px)',
          fontWeight: 1000,
          lineHeight: '1',
          letterSpacing: '-.02em',
        }}
      >
        <div
          style={{
            background: 'var(--hot-pink)',
            color: '#fff',
            padding: '.15em .35em',
            border: '2px solid var(--ink)',
            boxShadow: '6px 6px 0 var(--ink)',
            display: 'inline-block',
          }}
        >
          RITUAL
        </div>
        <div
          style={{
            display: 'inline-block',
            marginLeft: '.4rem',
            WebkitTextStroke: '2px var(--ink)',
            color: 'var(--cream)',
          }}
        >
          Supply
        </div>
      </div>

      <nav
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              textDecoration: 'none',
              color: 'var(--ink)',
              fontWeight: 700,
              fontSize: '.95rem',
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              position: 'relative',
              paddingBottom: '.25rem',
              borderBottom: '2px solid transparent',
              transition: 'border-color .2s',
            }}
          >
            {item.label}
          </a>
        ))}
        <div
          aria-hidden="true"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid var(--ink)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            boxShadow: '4px 4px 0 var(--ink)',
          }}
        >
          🛍️
        </div>
      </nav>
    </header>
  )
}
