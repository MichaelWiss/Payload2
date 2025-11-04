import { getPayloadClient } from '@/lib/payload'

import ProductCard, { ProductCardProps } from './ProductCard'

async function getHeroProduct(): Promise<ProductCardProps | null> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'products',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 1,
    depth: 1,
  })

  const doc = result.docs[0]
  if (!doc) return null

  const categoryName =
    doc.category && typeof doc.category === 'object' && 'name' in doc.category
      ? (doc.category.name as string)
      : null

  const description =
    typeof doc.description === 'string'
      ? doc.description
      : doc.summary ??
        (categoryName ? `Part of our ${categoryName.toLowerCase()} collection.` : null)

  return {
    title: doc.title,
    slug: doc.slug,
    price: doc.price,
    description: description ?? 'Handcrafted ritual essential.',
    badge: 'Bestseller',
    media: doc.images,
  }
}

export default async function Hero() {
  const heroProduct = await getHeroProduct()

  return (
    <section
      style={{
        background: 'linear-gradient(135deg,var(--acid-lime) 0%,#C8FF33 100%)',
        borderBottom: '3px solid var(--ink)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(48px,14vw,180px)',
          fontWeight: 1000,
          lineHeight: '.9',
          letterSpacing: '-.03em',
          padding: '6vh 3vw 2vh',
          margin: 0,
          color: 'var(--ink)',
        }}
      >
        Rituals That Ground You
      </h1>

      <div
        style={{
          position: 'absolute',
          top: '3vh',
          right: '3vw',
          background: '#fff',
          border: '3px dashed var(--hot-pink)',
          padding: '.5rem 1rem',
          fontWeight: 800,
          boxShadow: '8px 8px 0 var(--hot-pink)',
          transform: 'rotate(8deg)',
          fontSize: '.9rem',
          textTransform: 'uppercase',
        }}
        className="mono caps"
      >
        Handcrafted • Limited
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '3vw',
          padding: '3vw',
          background: 'linear-gradient(180deg,var(--cream) 0%,#fff 100%)',
          alignItems: 'stretch',
        }}
      >
        {heroProduct ? (
          <ProductCard {...heroProduct} />
        ) : (
          <article className="card">
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--acid-lime)',
                color: 'var(--ink)',
                padding: '.25rem .75rem',
                border: '2px solid var(--ink)',
                fontWeight: 900,
                fontSize: '.8rem',
                textTransform: 'uppercase',
                boxShadow: '4px 4px 0 var(--ink)',
              }}
            >
              Bestseller
            </div>
            <div className="card-image">🕯️</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 .75rem', fontSize: '1.3rem', fontWeight: 900 }}>
                Ceremony Candle
              </h3>
              <p style={{ margin: '0', fontSize: '.95rem', lineHeight: '1.6' }}>
                Made from coconut wax and dried botanicals. Each one is hand-poured in small batches.
              </p>
            </div>
          </article>
        )}

        <article className="card" style={{ background: 'var(--deep-teal)', color: '#fff' }}>
          <div
            className="card-image"
            style={{
              background: 'linear-gradient(135deg,#667BC6 0%,#764BA2 100%)',
            }}
          >
            ⏛️
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 .75rem', fontSize: '1.3rem', fontWeight: 900 }}>
              Ritual Timing
            </h3>
            <p style={{ margin: '0', fontSize: '.95rem', lineHeight: '1.6' }}>
              Ceremonial hourglass to slow your day. Pause, breathe, and reset intention.
            </p>
          </div>
        </article>
      </div>

      <div
        style={{
          height: '70px',
          background: 'var(--deep-teal)',
          borderTop: '3px solid var(--ink)',
          borderBottom: '3px solid var(--ink)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            whiteSpace: 'nowrap',
            animation: 'scroll 18s linear infinite',
            fontWeight: 1000,
            fontSize: '32px',
            color: 'var(--acid-lime)',
            minWidth: 'fit-content',
          }}
        >
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Ground</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Center</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Breathe</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Become</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Ground</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Center</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Breathe</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Become</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Ground</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Center</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Breathe</span>
          <span style={{ textTransform: 'uppercase', letterSpacing: '-.02em' }}>✦ Become</span>
        </div>
      </div>
    </section>
  )
}
