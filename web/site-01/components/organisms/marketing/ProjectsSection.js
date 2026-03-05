import ProjectCard from "@/components/molecules/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsSection() {
  return (
    <section className="bg-obsidian py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            meta={project.meta}
            stillImage={project.stillImage}
            vimeoId={project.vimeoId}
          />
        ))}
      </div>
    </section>
  );
}

