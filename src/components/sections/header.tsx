import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          CONTRACTOR<span className="text-blue-600">NAME</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Our Work</Link>
        </nav>
        <Button size="sm" className="bg-blue-600">Free Estimate</Button>
      </div>
    </header>
  );
}