import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-27', // Use today's date
  useCdn: false, // Set to true for production to speed up responses
});

// This client uses a token to see unpublished drafts
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-27',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN, // Add this to .env.local
})