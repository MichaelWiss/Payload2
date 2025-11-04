import FeaturedCollections from './components/FeaturedCollections'
import Hero from './components/Hero'
import IntentionCTA from './components/IntentionCTA'
import LimitedEditions from './components/LimitedEditions'
import Testimonials from './components/Testimonials'

export default async function HomePage() {
  return (
    <>
      <Hero />
      <IntentionCTA />
      <FeaturedCollections />
      <Testimonials />
      <LimitedEditions />
    </>
  )
}
