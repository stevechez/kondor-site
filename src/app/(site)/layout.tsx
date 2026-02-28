import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: 'Contractor Name | Premium Home Remodeling in [Location]',
  description: 'Licensed and insured general contractor specializing in kitchen, bath, and full home remodels.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}