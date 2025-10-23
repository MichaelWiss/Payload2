# My Store - Payload CMS + Next.js E-commerce

A modern e-commerce store built with Next.js 15, Payload CMS, TypeScript, and PostgreSQL.

## Features

- 🛍️ Complete e-commerce storefront
- 🔧 Payload CMS admin panel
- 📦 Product management with images and categories
- 🛒 Shopping cart functionality
- 📱 Responsive design with Tailwind CSS
- 🗄️ PostgreSQL database with Drizzle ORM
- 📝 Rich text editing with Lexical
- 🔍 GraphQL API
- 🖼️ Image processing with Sharp

## Project Structure

```
my-store/
├─ app/
│  ├─ (payload)/                     # Generated Payload admin interface
│  │  ├─ admin/[[...segments]]/      # Admin routes
│  │  ├─ api/[...slug]/             # REST API endpoints
│  │  ├─ graphql/                   # GraphQL endpoint
│  │  ├─ graphql-playground/        # GraphQL playground
│  │  └─ layout.tsx                 # Admin layout
│  └─ (store)/                      # Customer-facing storefront
│     ├─ layout.tsx                 # Store layout
│     ├─ page.tsx                   # Homepage
│     ├─ products/                  # Product pages
│     ├─ cart/                      # Shopping cart
│     └─ actions.ts                 # Server actions
├─ lib/
│  └─ payload.ts                    # Payload client utilities
├─ payload.config.ts                # Payload configuration
├─ next.config.mjs                  # Next.js configuration
└─ .env.local                       # Environment variables
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Set up environment variables:
Copy `.env.local` and update with your database URL and secrets:
```bash
DATABASE_URI=postgresql://username:password@localhost:5432/my_store
PAYLOAD_SECRET=your-secret-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

3. Start the development server:
```bash
npm run dev
```

### First Run Setup

1. Visit `http://localhost:3000/admin` to create your first admin user
2. The admin panel is where you'll manage products, categories, and orders
3. The storefront is available at `http://localhost:3000`

## Collections

### Products
- Title, description, price
- Image gallery with alt text
- Category relationships
- Featured products flag
- SEO-friendly slugs

### Categories
- Name and slug for product organization

### Orders
- Complete order tracking
- Customer information
- Order items with quantities and prices
- Order status management

### Media
- Image uploads with multiple sizes
- Automatic thumbnail generation
- Alt text for accessibility

## API Endpoints

- **REST API**: `/api/*` - Full CRUD operations for all collections
- **GraphQL**: `/graphql` - Query and mutation support
- **GraphQL Playground**: `/graphql-playground` - Interactive API explorer

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run payload` - Run Payload CLI commands

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **CMS**: Payload CMS 3.x
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Rich Text**: Lexical editor
- **Images**: Sharp for processing

## Development

The project follows Payload CMS best practices:
- Collections are defined in `payload.config.ts`
- Use server components where possible
- Implement server actions for cart/order operations
- Generated admin interface should not be modified

For more information, visit the [Payload CMS documentation](https://payloadcms.com/docs).