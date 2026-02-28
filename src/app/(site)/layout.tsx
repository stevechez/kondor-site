import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from "@/components/ui/sonner";
import { client } from "@/lib/sanity.client";
import { heroQuery } from "@/lib/sanity.queries";
import FloatingCallButton from "@/components/ui/floating-call-button";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const heroData = await client.fetch(heroQuery);

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <FloatingCallButton phoneNumber={heroData?.phoneNumber} />
        <Toaster position="top-center" richColors />
      </body>
      {/* Replace with the contractor's actual ID from their .env */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}