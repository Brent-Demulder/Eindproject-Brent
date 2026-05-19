import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectLayoutProps {
  children: React.ReactNode;
  currentProject?: string;
  type?: "project" | "opdracht";
}

const stageProjects = [
  { name: "Curendis", path: "/project/curendis" },
  { name: "Gedeon Richter Pro", path: "/project/gedeon-richter-pro" },
  { name: "JUNE20", path: "/project/june20" },
  { name: "Oscare", path: "/project/oscare" },
  { name: "Thomas More", path: "/project/thomas-more" },
  { name: "Stromer", path: "/project/stromer" },
];

const schoolProjects = [
  { name: "Vlog", path: "/opdracht/vlog" },
  { name: "Case", path: "/opdracht/case" },
  { name: "Poster", path: "/opdracht/poster" },
];

export default function ProjectLayout({ children, currentProject, type = "project" }: ProjectLayoutProps) {
  const list = type === "opdracht" ? schoolProjects : stageProjects;
  const otherProjects = list.filter(p => p.name !== currentProject);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/#projects-reveal" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Terug naar projecten
        </Link>

        {/* Main Project Container */}
        <div className="relative z-10 bg-[#29175c] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/5 animate-fadein">
          {/* Project Content */}
          {children}

          {/* Bekijk Ook Section */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-4">
              Bekijk ook
            </h4>
            <div className="flex flex-wrap gap-3">
              {otherProjects.map(project => (
                <Link
                  key={project.name}
                  to={project.path}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors"
                >
                  {project.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
