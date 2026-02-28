import { groq } from 'next-sanity';

// Query to fetch all projects for the portfolio grid
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  location,
  description,
  category,
  "imageUrl": mainImage.asset->url,
  "lqip": mainImage.asset->metadata.lqip,
  "slug": slug.current
}`;

// Query to fetch a single project by its slug (for individual project pages)
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  location,
  description,
  category,
  "imageUrl": mainImage.asset->url,
  "gallery": gallery[].asset->url
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  author,
  location,
  quote,
  rating
}`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  icon
}`;

export const heroQuery = groq`*[_type == "hero"][0] {
  title,
  subtitle,
  ctaText,
  phoneNumber,
  "bgImageUrl": backgroundImage.asset->url
}`;

export const settingsQuery = groq`*[_type == "settings"][0] {
  title,
  description,
  "ogImageUrl": ogImage.asset->url
}`;