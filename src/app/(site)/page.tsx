import { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { 
  projectsQuery, 
  settingsQuery, 
  heroQuery, 
  servicesQuery, 
  testimonialsQuery 
} from '@/lib/sanity.queries';

import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";

// 1. Generate Metadata for SEO (Server-side)
export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(settingsQuery);

  return {
    title: settings?.title || 'Contractor Name | General Contractor in Aptos',
    description: settings?.description || 'High-end home remodeling and custom builds in the Bay Area.',
    openGraph: {
      images: [settings?.ogImageUrl || '/default-og.jpg'],
    },
  };
}

// 2. Main Landing Page Component
export default async function LandingPage() {
  // Fetch all data in parallel for better performance
  const [heroData, services, projects, testimonials] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(servicesQuery),
    client.fetch(projectsQuery),
    client.fetch(testimonialsQuery),
  ]);

  return (
    <main>
      {/* Pass the Sanity data into each section */}
      <Hero data={heroData} />
      <TrustBar />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Testimonials reviews={testimonials} />
      <FAQ />
    </main>
  );
}