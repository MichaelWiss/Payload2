import { getPayloadClient } from '@/lib/payload'
import { notFound } from 'next/navigation'

async function getProduct(slug: string) {
  const payload = await getPayloadClient()
  const products = await payload.find({
    collection: 'products',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
    limit: 1,
  })
  
  return products.docs[0] || null
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          {product.images?.[0]?.image && (
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={`/api/media/file/${product.images[0].image.filename}`}
                alt={product.images[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1).map((imageData: any, index: number) => (
                <div key={index} className="aspect-square bg-gray-100 rounded overflow-hidden">
                  <img
                    src={`/api/media/file/${imageData.image.filename}`}
                    alt={imageData.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          </div>

          <div className="prose max-w-none">
            {product.description && (
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            )}
          </div>

          <div className="border-t pt-6">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
