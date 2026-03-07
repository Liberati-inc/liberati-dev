"use client";

import { useState } from "react";
import TK_Header from "@/components/toolkit/TK_Header";
import { sectionsByCategory } from "@/content/tk-sections";

export default function ToolkitPage() {
  const [selected, setSelected] = useState("brand");

  const sections = sectionsByCategory[selected] ?? [];

  return (
    <main className="min-h-screen bg-obsidian text-pureWhite">
      <TK_Header selected={selected} onSelect={setSelected} />
      <div className="max-w-7xl mx-auto px-page-x lg:px-page-x-lg pb-32">
        {sections.map((Section, i) => (
          <Section key={i} />
        ))}
      </div>
    </main>
  );
}
