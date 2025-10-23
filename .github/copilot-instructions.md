# Payload CMS + Next.js E-commerce Store

This is a modern e-commerce store built with:
- Next.js 14+ with TypeScript
- Payload CMS for content management and admin
- PostgreSQL database with Drizzle ORM
- Lexical rich text editor
- GraphQL API
- Image processing with Sharp

## Project Structure
- `app/(payload)/` - Generated Payload admin interface (do not edit)
- `app/(store)/` - Customer-facing storefront
- `lib/payload.ts` - Payload configuration utilities
- `payload.config.ts` - Main Payload configuration

## Development Guidelines
- Use server components where possible
- Implement server actions for cart/order operations
- Follow Payload CMS best practices for collections and fields
- Use TypeScript throughout the project