import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Hammer, Paintbrush, Home, Ruler } from "lucide-react";

const IconMap: Record<string, React.ReactNode> = {
  hammer: <Hammer className="h-6 w-6" />,
  paintbrush: <Paintbrush className="h-6 w-6" />,
  home: <Home className="h-6 w-6" />,
  ruler: <Ruler className="h-6 w-6" />,
};

export default function Services({ services }: { services: any[] }) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services?.map((service) => (
            <Card key={service._id} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2 text-blue-600">
                  {IconMap[service.icon] || <Hammer className="h-6 w-6" />}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}