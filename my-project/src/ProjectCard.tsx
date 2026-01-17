import type { Project } from "./Project";

const ProjectCard = ({ title, description, tags, imageUrl } : Project) => {
  return (
    <div className="group relative min-w-[400px] max-w-[400px] bg-white/5 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Image Container */}
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-white/10 text-blue-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};


export default ProjectCard;