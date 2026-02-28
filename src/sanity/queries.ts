export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  location,
  description,
  project,
  "mainImageUrl": mainImage.asset->url,
  "beforeImageUrl": beforeImage.asset->url
}`;