import PageContainer from "@/components/atoms/PageContainer";
import { type, typeRole } from "@/content/typography";

export default function TK_Header() {
  return (
    <header
      className="py-12 border-b border-white/10"
      data-purpose="toolkit-header"
    >
      <PageContainer>
        <p className={`${typeRole.disclaimer} mb-4`}>LIBERATI DESIGN SYSTEM</p>
        <h1 className={`${type.scale.h1} ${type.mod.uppercase}`}>Visual Toolkit v1.0</h1>
        <p className={typeRole.body}>
          A cinematic minimalist framework for high-end digital experiences.
          Built for Obsidian Dark Mode environments.
        </p>
      </PageContainer>
    </header>
  );
}

