import Link from 'next/link'

type ProductMedia = {
  image?:
    | {
        filename: string
        url?: string
      }
    | string
    | null
  alt?: string | null
}

export type ProductCardProps = {
  title: string
  slug: string
  price?: number | null
  description?: string | null
  badge?: string
  media?: ProductMedia[]
}

const getPrimaryImage = (media?: ProductMedia[]) => {
  if (!media || media.length === 0) return null
  const record = media[0]
  if (!record || !record.image || typeof record.image === 'string') return null
  return {
    alt: record.alt ?? record.image.filename,
    src: record.image.url ?? `/api/media/file/${record.image.filename}`,
  }
}

export default function ProductCard({
  title,
  slug,
  price,
  description,
  badge,
  media,
}: ProductCardProps) {
  const primaryImage = getPrimaryImage(media)

  return (
    <article className="card">
      {badge ? (
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
          {badge}
        </div>
      ) : null}

      <div className="card-image">
        {primaryImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={primaryImage.src}
            alt={primaryImage.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span aria-hidden="true">🕯️</span>
        )}
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 .75rem', fontSize: '1.3rem', fontWeight: 900 }}>
          {title}
        </h3>
        {price != null ? (
          <p style={{ margin: '0 0 .5rem', fontWeight: 800, color: '#333' }}>${price}</p>
        ) : null}
        {description ? (
          <p style={{ margin: '0', fontSize: '.95rem', lineHeight: '1.6', color: '#444' }}>
            {description}
          </p>
        ) : null}
        <div style={{ marginTop: '1.25rem' }}>
          <Link
            href={`/products/${slug}`}
            className="btn-primary"
            style={{ fontSize: '.85rem', padding: '.5rem 1.25rem' }}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
