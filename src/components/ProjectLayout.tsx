import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectLayoutProps {
  children: React.ReactNode;
  currentProject?: string;
}

const allProjects = [
  { name: "Curendis", path: "/project/curendis" },
  { name: "Gedeon Richter Pro", path: "/project/gedeon-richter-pro" },
  { name: "Stromer", path: "/project/stromer" },
  { name: "JUNE20", path: "/project/june20" },
  { name: "Oscare", path: "/project/oscare" },
  { name: "Thomas More", path: "/project/thomas-more" },
];

export default function ProjectLayout({ children, currentProject }: ProjectLayoutProps) {
  // Filter out the current project from the "Bekijk ook" list
  const otherProjects = allProjects.filter(p => p.name !== currentProject);

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#29175c] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/5"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
