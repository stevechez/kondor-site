import Image from "next/image";
import LeadForm from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
      {/* Dynamic Background Image */}
      {data?.bgImageUrl && (
        <Image
          src={data.bgImageUrl}
          alt="Construction Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      )}

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Copy & Call CTA */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              {data?.title || "Your Trusted General Contractor"}
            </h1>
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
              {data?.subtitle}
            </p>
            
            {data?.phoneNumber && (
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                <a href={`tel:${data.phoneNumber.replace(/\D/g,'')}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call {data.phoneNumber}
                </a>
              </Button>
            )}
          </div>

          {/* Right: Lead Form Card */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900">
            <h3 className="text-2xl font-bold mb-2">Get a Free Estimate</h3>
            <p className="text-sm text-slate-500 mb-6">Tell us about your project in Aptos or the surrounding area.</p>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}