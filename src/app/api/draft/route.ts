import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Check the secret and next parameters
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  (await draftMode()).enable()

  // Redirect to the path from the "slug" parameter or root
  redirect(slug || '/')
}