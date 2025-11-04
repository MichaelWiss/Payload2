const TESTIMONIALS = [
  'Finally found products that respect both craft and nature. Every item carries intention.',
  "The quality is undeniable. These aren't just things—they're experiences that slow you down.",
  "Supporting handmade goods feels right. You can feel the care in every detail.",
]

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '5vw 3vw',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        background: 'var(--purple)',
        color: '#fff',
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
        What Our Community Says
      </h2>
      <p
        style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          maxWidth: '700px',
          marginBottom: '2rem',
        }}
      >
        Real words from people who have made these rituals part of their practice.
      </p>

      <div
        className="testimonial-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5vw',
          marginTop: '2rem',
        }}
      >
        {TESTIMONIALS.map((quote) => (
          <blockquote
            key={quote}
            style={{
              background: 'rgba(255,255,255,.15)',
              border: '2px solid rgba(255,255,255,.4)',
              padding: '2rem',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
              margin: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: 500,
              }}
            >
              “{quote}”
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
