import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1, "Sanity Project ID is missing"),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1, "Sanity Dataset is missing"),
  SANITY_API_READ_TOKEN: z.string().min(1, "Sanity Read Token is missing"),
  RESEND_API_KEY: z.string().min(1, "Resend API Key is missing"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
});