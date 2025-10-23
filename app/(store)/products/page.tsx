import { getPayloadClient } from '@/lib/payload'

async function getProducts() {
  const payload = await getPayloadClient()
  const products = await payload.find({
    collection: 'products',
    limit: 12,
  })
  return products.docs
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <>
      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(135deg,var(--purple) 0%,#764BA2 100%)',
        borderBottom: '3px solid var(--ink)',
        padding: '5vw 3vw',
        color: '#fff'
      }}>
        <h1 style={{
          fontSize: 'clamp(40px,10vw,100px)',
          fontWeight: '1000',
          margin: '0 0 2rem',
          lineHeight: '.9',
          letterSpacing: '-.03em',
          textTransform: 'uppercase'
        }}>All Products</h1>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          maxWidth: '700px'
        }}>
          Every item in our collection is crafted with intention. Browse tools for your daily practice, seasonal rituals, and moments of grounding.
        </p>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '5vw 3vw' }}>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div key={product.id} className="product-tile">
              {product.images?.[0]?.image ? (
                <img
                  src={`/api/media/file/${product.images[0].image.filename}`}
                  alt={product.images[0].alt}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
              ) : (
                <div className="tile-image">
                  {product.category?.name === 'Candles' ? '🕯️' : 
                   product.category?.name === 'Crystals' ? '🔮' : 
                   product.category?.name === 'Oils' ? '🫗' : '✨'}
                </div>
              )}
              <div style={{ padding: '1.2rem' }}>
                <h3 style={{ fontWeight: '800', margin: '0 0 .4rem', fontSize: '.95rem' }}>
                  {product.title}
                </h3>
                <p style={{ fontSize: '.85rem', lineHeight: '1.5', color: '#666', margin: '0 0 1rem' }}>
                  ${product.price}
                </p>
                <a 
                  href={`/products/${product.slug}`} 
                  className="btn-primary" 
                  style={{ fontSize: '.8rem', padding: '.5rem 1rem', width: '100%', textAlign: 'center' }}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '8rem 0',
            background: 'var(--cream)',
            border: '3px solid var(--ink)',
            boxShadow: '12px 12px 0 var(--ink)',
            margin: '2rem 0'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '900', 
              marginBottom: '1rem',
              color: 'var(--ink)'
            }}>No Products Yet</h2>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '2rem',
              color: '#666'
            }}>Ready to add your first ritual tools?</p>
            <a href="/admin" className="btn-primary">
              Add Products in Admin Panel
            </a>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section style={{
        padding: '5vw 3vw',
        borderTop: '3px solid var(--ink)',
        background: 'var(--mint)',
        color: 'var(--ink)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'rgba(255,255,255,.15)',
            border: '2px solid rgba(255,255,255,.4)',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
            <h3 style={{ fontWeight: '800', marginBottom: '.5rem' }}>Ethically Sourced</h3>
            <p style={{ fontSize: '.9rem', lineHeight: '1.6' }}>
              Every material carefully chosen with respect for makers and earth.
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,.15)',
            border: '2px solid rgba(255,255,255,.4)',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{ fontWeight: '800', marginBottom: '.5rem' }}>Hand Finished</h3>
            <p style={{ fontSize: '.9rem', lineHeight: '1.6' }}>
              Small batch production means each piece carries unique character.
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,.15)',
            border: '2px solid rgba(255,255,255,.4)',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
            <h3 style={{ fontWeight: '800', marginBottom: '.5rem' }}>Plastic Free</h3>
            <p style={{ fontSize: '.9rem', lineHeight: '1.6' }}>
              Packaging that honors the earth and your unboxing experience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}