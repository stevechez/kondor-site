import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold uppercase tracking-wider">
              Contractor Name
            </h3>
            <p className="text-sm leading-relaxed">
              Premium residential remodeling and custom builds. 
              Serving Aptos, Santa Cruz, and the surrounding Bay Area with 
              craftsmanship you can trust.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-white transition">Kitchen Remodels</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Bathroom Renovations</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Home Additions & ADUs</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition">Recent Projects</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:1234567890" className="flex items-center gap-3 hover:text-white transition">
                <Phone className="h-4 w-4 text-blue-500" />
                (123) 456-7890
              </a>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-500" />
                office@contractor.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-500" />
                Aptos, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Credit */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Contractor Name. All rights reserved.</p>
          <p className="text-slate-500">
            Built with ❤️ by <span className="text-slate-400 font-medium">Steve Maciaszek</span>
          </p>
        </div>
      </div>
    </footer>
  );
}