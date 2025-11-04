const LIMITED_EDITIONS = [
  {
    title: 'Moon Phase Set',
    emoji: '🌙',
    description: 'Lunar guidance tools',
  },
  {
    title: 'Spring Renewal',
    emoji: '🌸',
    description: 'Fresh blooms & intent',
  },
  {
    title: 'Autumn Gratitude',
    emoji: '🍂',
    description: 'Harvest ceremonies',
  },
  {
    title: 'Winter Stillness',
    emoji: '❄️',
    description: 'Quiet introspection',
  },
]

export default function LimitedEditions() {
  return (
    <section
      style={{
        padding: '5vw 3vw',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        background: 'var(--mint)',
        color: 'var(--ink)',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(40px,10vw,100px)',
          fontWeight: 1000,
          margin: '0 0 2rem',
          lineHeight: '.9',
          letterSpacing: '-.03em',
          textTransform: 'uppercase',
        }}
      >
        Limited Editions
      </h2>
      <p
        style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          maxWidth: '700px',
          marginBottom: '2rem',
        }}
      >
        Seasonal releases inspired by moons, solstices, and the quiet turning of time.
      </p>

      <div className="grid grid-cols-4 gap-6" style={{ marginTop: '2rem' }}>
        {LIMITED_EDITIONS.map((edition) => (
          <div
            key={edition.title}
            className="product-tile"
            style={{
              borderColor: 'var(--ink)',
              boxShadow: '8px 8px 0 var(--ink)',
            }}
          >
            <div className="tile-image">{edition.emoji}</div>
            <div style={{ padding: '1.2rem' }}>
              <h4
                style={{
                  fontWeight: 800,
                  margin: '0 0 .4rem',
                  fontSize: '.95rem',
                }}
              >
                {edition.title}
              </h4>
              <p
                style={{
                  fontSize: '.85rem',
                  lineHeight: '1.5',
                  color: '#666',
                  margin: 0,
                }}
              >
                {edition.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
