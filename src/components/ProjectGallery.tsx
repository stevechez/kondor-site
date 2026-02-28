import { client } from '@/sanity/client';
import { PROJECTS_QUERY } from '@/sanity/queries';
import Image from 'next/image';

// 1. Defined the Project interface for strict typing
interface Project {
  _id: string;
  title: string;
  location?: string;
  description?: string;
  mainImageUrl: string;
  beforeImageUrl?: string;
}

export default async function ProjectGallery() {
  // 2. Fetch data and provide a fallback empty array to prevent .map errors
  const projects = (await client.fetch<Project[]>(PROJECTS_QUERY)) || [];

  // 3. Early return if no projects exist
  if (projects.length === 0) {
    return (
      <section className="max-w-7xl mx-auto py-16 px-4 text-center">
        <p className="text-slate-500 italic">No projects found. Add some in Sanity Studio!</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-slate-800">Our Recent Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <div 
            key={project._id} 
            className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image Container with aspect ratio and sizing */}
            <div className="relative h-64 w-full bg-slate-100">
              <Image
          src={project.mainImageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start gap-2">
          <h3 className="text-xl font-bold text-slate-900 leading-tight">
            {project.title}
          </h3>
          {project.location && (
            <span className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded shrink-0">
              {project.location}
            </span>
          )}
              </div>

              {project.description && (
          <p className="text-slate-600 mt-3 text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}