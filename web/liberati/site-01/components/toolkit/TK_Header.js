"use client";

import PageContainer from "@/components/blocks/PageContainer";
import { type, typeRole } from "@/content/typography";
import { tkNav } from "@/content/tk-nav";

export default function TK_Header({ selected, onSelect }) {
  return (
    <header
      className="sticky top-0 z-50 py-8 border-b border-white/10 bg-obsidian/95 backdrop-blur-md"
      data-purpose="toolkit-header"
    >
      <PageContainer>
        <p className={`${typeRole.disclaimer} mb-4`}>LIBERATI DESIGN SYSTEM</p>
        <h1 className={`${type.scale.h1} ${type.mod.uppercase}`}>Visual Toolkit v1.0</h1>
        <p className={`${typeRole.body} mb-6`}>
          A cinematic minimalist framework for high-end digital experiences.
          Built for Obsidian Dark Mode environments.
        </p>
        <nav className="flex flex-wrap gap-6" aria-label="Toolkit sections">
          {tkNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect?.(item.id)}
              className={`${typeRole.navLink} transition-colors ${
                selected === item.id ? "text-liberatiRed" : "text-white hover:text-liberatiRed"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </PageContainer>
    </header>
  );
}
