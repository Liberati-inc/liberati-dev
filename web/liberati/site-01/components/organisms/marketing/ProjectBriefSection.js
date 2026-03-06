import BriefCard from "@/components/molecules/BriefCard";
import { type, typeRole } from "@/content/typography";

/**
 * Context / Strategy / Solution block. Data from project.brief (editable in project .ts).
 * Header: title, meta (below title), description (below meta).
 */
export default function ProjectBriefSection({ brief, meta, description }) {
  if (!brief) return null;

  const { sectionTitle = "Project Brief", introCopy, copyDelimiter, context, strategy, solution } = brief;
  const desc = description ?? introCopy;

  return (
    <section className="py-24 px-6 md:px-16 bg-obsidian" data-purpose="project-brief">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2
            className={`${type.scale.h2} ${type.mod.uppercase} mb-4 text-white tracking-tighter`}
          >
            {sectionTitle}
          </h2>
          {meta && (
            <p className="text-mutedGray text-sm font-bold uppercase tracking-widest mb-3">{meta}</p>
          )}
          {desc && (
            <p className={`${typeRole.body} ${type.mod.white} max-w-2xl`}>{desc}</p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <BriefCard title={context.title} lineDelimiter={copyDelimiter}>{context.copy}</BriefCard>
          <BriefCard title={strategy.title} lineDelimiter={copyDelimiter}>{strategy.copy}</BriefCard>
          <BriefCard title={solution.title} lineDelimiter={copyDelimiter}>{solution.copy}</BriefCard>
        </div>
      </div>
    </section>
  );
}
