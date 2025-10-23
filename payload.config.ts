import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        delete: () => false,
        update: () => false,
      },
      fields: [],
    },
    {
      slug: 'products',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor(),
        },
        {
          name: 'price',
          type: 'number',
          min: 0,
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'images',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'categories',
        },
      ],
    },
    {
      slug: 'categories',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticDir: 'media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            position: 'centre',
          },
          {
            name: 'tablet',
            width: 1024,
            height: undefined,
            position: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      slug: 'orders',
      admin: {
        useAsTitle: 'id',
      },
      access: {
        read: () => true,
        create: () => true,
        update: () => false,
        delete: () => false,
      },
      fields: [
        {
          name: 'total',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'items',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'product',
              type: 'relationship',
              relationTo: 'products',
              required: true,
            },
            {
              name: 'quantity',
              type: 'number',
              required: true,
              min: 1,
            },
            {
              name: 'price',
              type: 'number',
              required: true,
              min: 0,
            },
          ],
        },
        {
          name: 'customerEmail',
          type: 'email',
          required: true,
        },
        {
          name: 'customerName',
          type: 'text',
          required: true,
        },
        {
          name: 'status',
          type: 'select',
          options: [
            {
              label: 'Pending',
              value: 'pending',
            },
            {
              label: 'Processing',
              value: 'processing',
            },
            {
              label: 'Shipped',
              value: 'shipped',
            },
            {
              label: 'Delivered',
              value: 'delivered',
            },
            {
              label: 'Cancelled',
              value: 'cancelled',
            },
          ],
          defaultValue: 'pending',
          required: true,
        },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [],
})