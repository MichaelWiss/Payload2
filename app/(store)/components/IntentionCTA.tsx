export default function IntentionCTA() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '3vw',
        padding: '5vw 3vw',
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          background: 'var(--acid-lime)',
          border: '3px solid var(--ink)',
          boxShadow: '14px 14px 0 var(--ink)',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(32px,8vw,80px)',
            fontWeight: 1000,
            lineHeight: '.95',
            margin: 0,
            letterSpacing: '-.02em',
          }}
        >
          Every ritual <span style={{ color: 'var(--hot-pink)' }}>starts</span> with intention
        </h2>
      </div>

      <div
        style={{
          background: '#fff',
          border: '3px solid var(--ink)',
          boxShadow: '12px 12px 0 var(--ink)',
          display: 'grid',
          gridTemplateRows: 'repeat(4,1fr)',
          gap: '2px',
          backgroundColor: 'var(--ink)',
        }}
      >
        {['🌿 Ethically Sourced', '✨ Hand Finished', '📦 Plastic Free', '♻️ Sustainably Made'].map(
          (benefit) => (
            <div
              key={benefit}
              style={{
                background: 'var(--cream)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                textAlign: 'center',
                fontSize: '.95rem',
              }}
            >
              {benefit}
            </div>
          ),
        )}
      </div>
    </section>
  )
}
