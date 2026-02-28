import { draftMode } from 'next/headers'
import { client, previewClient } from '@/lib/sanity.client'
import { 
  projectsQuery, 
  testimonialsQuery, 
  heroQuery, 
  servicesQuery 
} from '@/lib/sanity.queries'
import Portfolio from '@/components/sections/portfolio'
import Testimonials from '@/components/sections/testimonials'
import FAQ from '@/components/sections/faq'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'

export default async function LandingPage() {
  const isDraftMode = (await draftMode()).isEnabled
  const fetchClient = isDraftMode ? previewClient : client

  // Fetch ALL data in parallel using the appropriate client
  const [heroData, services, projects, reviews] = await Promise.all([
    fetchClient.fetch(heroQuery),
    fetchClient.fetch(servicesQuery),
    fetchClient.fetch(projectsQuery),
    fetchClient.fetch(testimonialsQuery)
  ])

  return (
    <main>
      {isDraftMode && (
        <div className="bg-yellow-400 text-black text-center py-2 text-sm font-bold sticky top-0 z-[60]">
          Draft Mode Active — You are viewing unpublished content.
        </div>
      )}
      
      {/* Ensure components receive their data */}
      <Hero data={heroData} />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Testimonials reviews={reviews} />
      <FAQ />
    </main>
  )
}