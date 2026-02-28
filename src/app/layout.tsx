import "@/app/globals.css"; // Ensure your Tailwind styles are imported
import Header from "@/components/sections/header"; // You'll need to create this
import Footer from "@/components/sections/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header /> 
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}