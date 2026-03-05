import BriefCard from "@/components/molecules/BriefCard";
import { type } from "@/content/typography";

/**
 * Context / Strategy / Solution block. Data from project.brief (editable in project .ts).
 */
export default function ProjectBriefSection({ brief }) {
  if (!brief) return null;

  const { sectionTitle = "Project Brief", introCopy, context, strategy, solution } = brief;

  return (
    <section className="py-24 px-6 md:px-16 bg-obsidian" data-purpose="project-brief">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2
            className={`${type.scale.h2} ${type.mod.uppercase} mb-4 text-white tracking-tighter`}
          >
            {sectionTitle}
          </h2>
          {introCopy && (
            <p className="text-mutedGray text-lg max-w-2xl">{introCopy}</p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <BriefCard title={context.title}>{context.copy}</BriefCard>
          <BriefCard title={strategy.title}>{strategy.copy}</BriefCard>
          <BriefCard title={solution.title}>{solution.copy}</BriefCard>
        </div>
      </div>
    </section>
  );
}
