import { getPayloadClient } from '@/lib/payload'

import ProductCard, { ProductCardProps } from './ProductCard'

type ProductDoc = {
  id: string
  title: string
  slug: string
  price?: number | null
  description?: string | null
  summary?: string | null
  images?: ProductCardProps['media']
  category?:
    | {
        name?: string | null
      }
    | null
    | string
}

const mapToCardProps = (product: ProductDoc, index: number): ProductCardProps => {
  const categoryName =
    product.category && typeof product.category === 'object' && 'name' in product.category
      ? product.category.name ?? undefined
      : undefined

  return {
    id: product.id,
    title: product.title,
    slug: product.slug,
    price: product.price,
    description:
      product.summary ??
      (typeof product.description === 'string'
        ? product.description
        : categoryName
        ? `Crafted for the ${categoryName.toLowerCase()} ritual.`
        : 'Intentionally made in small batches.'),
    badge: index === 0 ? 'Featured' : undefined,
    media: product.images,
  }
}

export default async function FeaturedCollections() {
  const payload = await getPayloadClient()
  const featured = await payload.find({
    collection: 'products',
    where: {
      featured: {
        equals: true,
      },
    },
    depth: 1,
    limit: 6,
  })

  const cards = featured.docs.map((product, index) => ({
    id: product.id,
    props: mapToCardProps(product, index),
  }))

  return (
    <section
      style={{
        padding: '5vw 3vw',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        background: 'var(--deep-teal)',
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
        Featured Collection
      </h2>
      <p
        style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          maxWidth: '700px',
          marginBottom: '2rem',
        }}
      >
        Carefully selected tools for your daily practice. Each item chosen for its beauty, function, and spirit.
      </p>

      <div className="grid grid-cols-4 gap-6" style={{ marginTop: '2rem' }}>
        {cards.map(({ id, props }) => (
          <ProductCard key={id} {...props} />
        ))}
      </div>

      {cards.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No featured products yet.</p>
          <a href="/admin" className="btn-primary">
            Add Products in Admin
          </a>
        </div>
      ) : null}
    </section>
  )
}
