import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-slate-900 py-16 px-4 mb-16 rounded-2xl max-w-7xl mx-auto overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Home Transformation?
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Whether you're planning a full kitchen remodel or a custom deck build, 
          our team in Aptos brings 30 years of expertise to every square inch of your project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Request a Free Estimate
          </Link>
          <Link 
            href="tel:+18315550123" 
            className="bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white font-bold py-4 px-8 rounded-lg transition-all text-lg"
          >
            Call Us Today
          </Link>
        </div>
        
        <p className="mt-8 text-slate-500 text-sm italic">
          Fully Licensed, Bonded, and Insured • Serving Santa Cruz & Monterey Counties
        </p>
      </div>
    </section>
  );
}