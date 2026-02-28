import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  _id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  lqip?: string; // Added for the blur placeholder
  category: string;
}

export default function Portfolio({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">Recent Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <Card key={project._id} className="group overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
              {/* Robust Image Section */}
              <div className="relative aspect-video bg-slate-200 overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    placeholder={project.lqip ? "blur" : "empty"}
                    blurDataURL={project.lqip}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 text-xs italic">
                    No Project Image
                  </div>
                )}
              </div>

              {/* Project Details */}
              <CardHeader className="pb-2">
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                  {project.category}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{project.location}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}