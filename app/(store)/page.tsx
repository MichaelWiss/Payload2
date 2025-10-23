import { getPayloadClient } from '@/lib/payload'

async function getFeaturedProducts() {
  const payload = await getPayloadClient()
  const products = await payload.find({
    collection: 'products',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 6,
  })
  return products.docs
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg,var(--acid-lime) 0%,#C8FF33 100%)',
        borderBottom: '3px solid var(--ink)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1 style={{
          fontSize: 'clamp(48px,14vw,180px)',
          fontWeight: '1000',
          lineHeight: '.9',
          letterSpacing: '-.03em',
          padding: '6vh 3vw 2vh',
          margin: '0',
          color: 'var(--ink)'
        }}>Rituals That Ground You</h1>
        
        <div style={{
          position: 'absolute',
          top: '3vh',
          right: '3vw',
          background: '#fff',
          border: '3px dashed var(--hot-pink)',
          padding: '.5rem 1rem',
          fontWeight: '800',
          boxShadow: '8px 8px 0 var(--hot-pink)',
          transform: 'rotate(8deg)',
          fontSize: '.9rem',
          textTransform: 'uppercase'
        }} className="mono caps">
          Handcrafted • Limited
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '3vw',
          padding: '3vw',
          background: 'linear-gradient(180deg,var(--cream) 0%,#fff 100%)',
          alignItems: 'stretch'
        }}>
          <article className="card">
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'var(--acid-lime)',
              color: 'var(--ink)',
              padding: '.25rem .75rem',
              border: '2px solid var(--ink)',
              fontWeight: '900',
              fontSize: '.8rem',
              textTransform: 'uppercase',
              boxShadow: '4px 4px 0 var(--ink)'
            }}>Bestseller</div>
            <div className="card-image">🕯️</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 .75rem', fontSize: '1.3rem', fontWeight: '900' }}>
                Ceremony Candle
              </h3>
              <p style={{ margin: '0', fontSize: '.95rem', lineHeight: '1.6' }}>
                Made from coconut wax and dried botanicals. Each one is hand-poured in small batches. Pure intention, pure scent.
              </p>
            </div>
          </article>

          <article className="card" style={{ background: 'var(--deep-teal)', color: '#fff' }}>
            <div className="card-image" style={{
              background: 'linear-gradient(135deg,#667BC6 0%,#764BA2 100%)'
            }}>⏛️</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 .75rem', fontSize: '1.3rem', fontWeight: '900' }}>
                Ritual Timing
              </h3>
              <p style={{ margin: '0', fontSize: '.95rem', lineHeight: '1.6' }}>
                Ceremonial hourglass. Moment keeper. A reminder to slow down and breathe through your day.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Marquee Belt */}
      <div style={{
        height: '70px',
        background: 'var(--deep-teal)',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          whiteSpace: 'nowrap',
          animation: 'scroll 18s linear infinite',
          fontWeight: '1000',
          fontSize: '32px',
          color: 'var(--acid-lime)',
          minWidth: 'fit-content'
        }}>
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

      {/* Statement Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '3vw',
        padding: '5vw 3vw',
        alignItems: 'stretch'
      }}>
        <div style={{
          background: 'var(--acid-lime)',
          border: '3px solid var(--ink)',
          boxShadow: '14px 14px 0 var(--ink)',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(32px,8vw,80px)',
            fontWeight: '1000',
            lineHeight: '.95',
            margin: '0',
            letterSpacing: '-.02em'
          }}>
            Every ritual <span style={{ color: 'var(--hot-pink)' }}>starts</span> with intention
          </h2>
        </div>
        
        <div style={{
          background: '#fff',
          border: '3px solid var(--ink)',
          boxShadow: '12px 12px 0 var(--ink)',
          display: 'grid',
          gridTemplateRows: 'repeat(4,1fr)',
          gap: '2px',
          backgroundColor: 'var(--ink)'
        }}>
          <div style={{
            background: 'var(--cream)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            textAlign: 'center',
            fontSize: '.95rem'
          }}>🌿 Ethically Sourced</div>
          <div style={{
            background: 'var(--cream)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            textAlign: 'center',
            fontSize: '.95rem'
          }}>✨ Hand Finished</div>
          <div style={{
            background: 'var(--cream)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            textAlign: 'center',
            fontSize: '.95rem'
          }}>📦 Plastic Free</div>
          <div style={{
            background: 'var(--cream)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            textAlign: 'center',
            fontSize: '.95rem'
          }}>♻️ Sustainably Made</div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{
        padding: '5vw 3vw',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        background: 'var(--deep-teal)',
        color: '#fff'
      }}>
        <h2 style={{
          fontSize: 'clamp(40px,10vw,100px)',
          fontWeight: '1000',
          margin: '0 0 2rem',
          lineHeight: '.9',
          letterSpacing: '-.03em',
          textTransform: 'uppercase'
        }}>Featured Collection</h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          maxWidth: '700px',
          marginBottom: '2rem'
        }}>
          Carefully selected tools for your daily practice. Each item chosen for its beauty, function, and spirit.
        </p>
        
        <div className="grid grid-cols-4 gap-6" style={{ marginTop: '2rem' }}>
          {featuredProducts.map((product: any) => (
            <div key={product.id} className="product-tile">
              {product.images?.[0]?.image ? (
                <img
                  src={`/api/media/file/${product.images[0].image.filename}`}
                  alt={product.images[0].alt}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
              ) : (
                <div className="tile-image">🕯️</div>
              )}
              <div style={{ padding: '1.2rem' }}>
                <h4 style={{ fontWeight: '800', margin: '0 0 .4rem', fontSize: '.95rem' }}>
                  {product.title}
                </h4>
                <p style={{ fontSize: '.85rem', lineHeight: '1.5', color: '#666', margin: '0 0 1rem' }}>
                  ${product.price}
                </p>
                <a href={`/products/${product.slug}`} className="btn-primary" style={{ fontSize: '.8rem', padding: '.5rem 1rem' }}>
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {featuredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No featured products yet.</p>
            <a href="/admin" className="btn-primary">Add Products in Admin</a>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '5vw 3vw',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        background: 'var(--purple)',
        color: '#fff'
      }}>
        <h2 style={{
          fontSize: 'clamp(40px,10vw,100px)',
          fontWeight: '1000',
          margin: '0 0 2rem',
          lineHeight: '.9',
          letterSpacing: '-.03em',
          textTransform: 'uppercase'
        }}>What Our Community Says</h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          maxWidth: '700px',
          marginBottom: '2rem'
        }}>
          Real words from people who've made these rituals part of their practice.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5vw',
          marginTop: '2rem'
        }} className="testimonial-grid">
          <div style={{
            background: 'rgba(255,255,255,.15)',
            border: '2px solid rgba(255,255,255,.4)',
            padding: '2rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              margin: '0',
              fontSize: '1rem',
              lineHeight: '1.7',
              fontWeight: '500'
            }}>
              "Finally found products that respect both craft and nature. Every item carries intention."
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,.15)',
            border: '2px solid rgba(255,255,255,.4)',
            padding: '2rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              margin: '0',
              fontSize: '1rem',
              lineHeight: '1.7',
              fontWeight: '500'
            }}>
              "The quality is undeniable. These aren't just things—they're experiences that slow you down."
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,.15)',
            border: '2px solid rgba(255,255,255,.4)',
            padding: '2rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              margin: '0',
              fontSize: '1rem',
              lineHeight: '1.7',
              fontWeight: '500'
            }}>
              "Supporting handmade goods feels right. You can feel the care in every detail."
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Rituals Section */}
      <section style={{
        padding: '5vw 3vw',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        background: 'var(--mint)',
        color: 'var(--ink)'
      }}>
        <h2 style={{
          fontSize: 'clamp(40px,10vw,100px)',
          fontWeight: '1000',
          margin: '0 0 2rem',
          lineHeight: '.9',
          letterSpacing: '-.03em',
          textTransform: 'uppercase'
        }}>Seasonal Rituals</h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          maxWidth: '700px',
          marginBottom: '2rem'
        }}>
          Limited edition collections inspired by seasons, moons, and moments of intention.
        </p>
        
        <div className="grid grid-cols-4 gap-6" style={{ marginTop: '2rem' }}>
          <div className="product-tile" style={{
            borderColor: 'var(--ink)',
            boxShadow: '8px 8px 0 var(--ink)'
          }}>
            <div className="tile-image">🌙</div>
            <div style={{ padding: '1.2rem' }}>
              <h4 style={{
                fontWeight: '800',
                margin: '0 0 .4rem',
                fontSize: '.95rem'
              }}>Moon Phase Set</h4>
              <p style={{
                fontSize: '.85rem',
                lineHeight: '1.5',
                color: '#666',
                margin: '0'
              }}>Lunar guidance tools</p>
            </div>
          </div>
          <div className="product-tile" style={{
            borderColor: 'var(--ink)',
            boxShadow: '8px 8px 0 var(--ink)'
          }}>
            <div className="tile-image">🌸</div>
            <div style={{ padding: '1.2rem' }}>
              <h4 style={{
                fontWeight: '800',
                margin: '0 0 .4rem',
                fontSize: '.95rem'
              }}>Spring Renewal</h4>
              <p style={{
                fontSize: '.85rem',
                lineHeight: '1.5',
                color: '#666',
                margin: '0'
              }}>Fresh blooms & intent</p>
            </div>
          </div>
          <div className="product-tile" style={{
            borderColor: 'var(--ink)',
            boxShadow: '8px 8px 0 var(--ink)'
          }}>
            <div className="tile-image">🍂</div>
            <div style={{ padding: '1.2rem' }}>
              <h4 style={{
                fontWeight: '800',
                margin: '0 0 .4rem',
                fontSize: '.95rem'
              }}>Autumn Gratitude</h4>
              <p style={{
                fontSize: '.85rem',
                lineHeight: '1.5',
                color: '#666',
                margin: '0'
              }}>Harvest ceremonies</p>
            </div>
          </div>
          <div className="product-tile" style={{
            borderColor: 'var(--ink)',
            boxShadow: '8px 8px 0 var(--ink)'
          }}>
            <div className="tile-image">❄️</div>
            <div style={{ padding: '1.2rem' }}>
              <h4 style={{
                fontWeight: '800',
                margin: '0 0 .4rem',
                fontSize: '.95rem'
              }}>Winter Stillness</h4>
              <p style={{
                fontSize: '.85rem',
                lineHeight: '1.5',
                color: '#666',
                margin: '0'
              }}>Quiet introspection</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}