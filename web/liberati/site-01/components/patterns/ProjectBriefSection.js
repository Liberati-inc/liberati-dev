import BriefCard from "@/components/patterns/BriefCard";
import { type, typeRole, typeSectionBlock } from "@/content/typography";

export const toolkitExclude = false;
export const toolkitOrder = 0.2;

/**
 * Context / Strategy / Solution block. Data from project.brief (editable in project .ts).
 * Header: title, meta (below title), description (below meta).
 */
export default function ProjectBriefSection({ brief, meta, description }) {
  if (!brief) return null;

  const { sectionTitle = "Project Brief", introCopy, copyDelimiter, context, strategy, solution } = brief;
  const desc = description ?? introCopy;

  return (
    <section className="py-section-y bg-obsidian" data-purpose="project-brief">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className={`${typeSectionBlock.title} mb-4`}>
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
          <BriefCard title={context.title} copy={context.copy} lineDelimiter={copyDelimiter} />
          <BriefCard title={strategy.title} copy={strategy.copy} lineDelimiter={copyDelimiter} />
          <BriefCard title={solution.title} copy={solution.copy} lineDelimiter={copyDelimiter} />
        </div>
      </div>
    </section>
  );
}
