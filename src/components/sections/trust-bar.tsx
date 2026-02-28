import { ShieldCheck, Star, HardHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TrustBar() {
  const credentials = [
    { icon: <ShieldCheck className="w-4 h-4" />, label: "Fully Licensed & Insured" },
    { icon: <Star className="w-4 h-4 text-yellow-500" />, label: "5-Star Rated" },
    { icon: <HardHat className="w-4 h-4" />, label: "Local Bay Area Team" },
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-4">
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        {credentials.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm font-medium text-slate-700">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}