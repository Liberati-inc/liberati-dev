## Liberati Code of Honor – Frontend & Design System

### 1. Design Philosophy
- **Modular first**: Everything is a reusable unit. Prefer many small, composable components over monoliths.
- **Web-style hierarchy**:
  - **Tokens**: Colors, typography, spacing, radii, motion (Tailwind config + CSS variables).
  - **Blocks**: Stateless primitives (buttons, labels, icons, text styles).
  - **Patterns**: Simple compositions of blocks (cards, form fields, icon+label rows).
  - **Sections**: Full page sections (hero, service grid, project detail).
  - **Pages / Flows**: Route-level composition only; no new visual logic here.
- **Cinematic minimalist**: High clarity with deliberate emphasis. Default to subtle; earn every flourish.

### 3. DRY (Don’t Repeat Yourself)
- **One source of truth per concept**:
  - Colors, typography, spacing → tokens (`tailwind.config` + `globals.css`).
  - Icons → `SvgIcon` (and wrappers like `SvgButton`), not hand-written `<svg>` in random files.
  - CTAs → shared blocks like `PrimaryButton`, not ad-hoc button markup.
- **Copy/paste is a smell**:
  - If you paste the same JSX or Tailwind string more than twice, extract a block or pattern.
  - If two sections diverge only by data, introduce props or configuration, not forks.

### 2. No Bespoke Coding – Shared Props
- **Same props, same component**:
  - Components must not branch on context (e.g. `isLanding ? false : contentFadeOnHover`). Callers pass the correct prop value; the component treats all callers the same.
  - Avoid `if (isX) return <A />; return <B />` when A and B are the same component with different props. Use one component path and pass props that control behavior.
  - If a prop is needed for one caller, expose it for all callers; default it appropriately so existing callers don't break.

### 4. Component Rules
- **Blocks**:
  - No business logic, side-effects, or data fetching.
  - Styling driven by tokens + Tailwind; no hard-coded magic numbers unless they *are* new tokens.
  - Accept `className` to allow safe extension without forking.
- **Patterns**:
  - Own layout for a small, coherent pattern (e.g. service card, brief card, form field).
  - Take semantic props (`variant="direction"`, `status="success"`) rather than raw style flags.
- **Sections**:
  - Compose blocks/patterns; minimal local state only when necessary for UX.
  - Do not reach into global tokens directly if a block/pattern already encapsulates them.
- **Pages / layouts**:
  - Only orchestrate sections and handle routing/data loading.
  - Own global shells like `PageContainer` or layout wrappers; sections should not import page‑level containers directly.
  - Never define new visual patterns here; route files should read almost like a table of contents.

### 5. Naming & Structure
- **File placement**:
  - `components/blocks/*` – primitives.
  - `components/patterns/*` – small compositions.
  - `components/sections/*` – full page sections.
  - `app/(marketing)`, `app/(system)` – route groups for public vs. internal surfaces.
- **Names are intentful**:
  - Prefer `ServiceCard`, `ProjectGrid`, `SectionLabel` over generic `Card`, `Container`, `Box`.
  - Variants reflect semantics (`"direction"`, `"motion"`) not presentation (`"redIcon"`, `"bigIcon"`).

### 5a. Toolkit Exports – Required on Every Component
- **All components** (blocks, patterns, sections, brand) **must export**:
  - `toolkitExclude`: `boolean` — `false` = visible in toolkit, `true` = hidden (composition-only).
  - `toolkitOrder`: `number` — sort index; lower = first. Use `999` for excluded components.
- **Rule**: Every component declares its toolkit visibility and position. No implicit defaults.
- **Example**:
  ```js
  export const toolkitExclude = false;  // visible in toolkit
  export const toolkitOrder = 1;        // sort position
  export default function PrimaryButton({ ... }) { ... }
  ```
- **Excluded components** (e.g. `SectionLabel`, `FadeOnHover`, `BlockOverlay`): set `toolkitExclude = true` and `toolkitOrder = 999`.
- **Toolkit PROPS use the prop name as the value**: Use the prop name itself, so users see which prop controls what. Examples: `label` → "label", `title` → "title", `header` → "header", `copy` → "copy", `meta` → "meta", `content` → "content", `sample` → "sample". For nested props use paths like `items[0].label` or `brief.context.title`. Never use project-specific names (e.g. "Snapdragon XR", "COD"). This keeps the toolkit as a design-system reference where developers can map UI to props at a glance.
- **Prefer semantic prop names over `children`**: Use `label` for button/link/nav text, `copy` for body text, `content` for wrapper slots, `sample` for typography samples. This makes the API self-documenting.
- **Sections in toolkit use real site data**: Sections (e.g. `ServicesSection`, `ProjectsSection`) receive the same props the marketing pages use (`services`, `servicesNote`, `servicesCta`, `projectsForGallery`, etc.). Prop names are already visible in the nested patterns; sections show the real look and feel.

### 5b. Toolkit Page Conventions
- **Section headers**:
  - All toolkit sections use a consistent grid layout: label in the first column (`SectionLabel`), content in a `md:col-span-3` wrapper.
  - Numbering follows the web-style hierarchy:
    - `1.x` &rarr; tokens/blocks (e.g. `1.0 Color Palette`, `1.1 Typography`, `1.2 UI Elements`, `1.3 Iconography`, `1.4 Form Components`).
    - `2.x` &rarr; patterns/layouts (e.g. `2.0 Service Cards`, `2.1 Project Grid`, `2.2 Project Details`, `2.3–2.5 Additional Toolkit layouts`).
    - `3.x` &rarr; sections (e.g. `3.0 Top Navigation`, `3.1 Hero – Cinematic`).
  - **Toolkit-only**: these numbered labels/titles are for `/toolkit` and other system views only. **Never import or render them on marketing/user-facing pages**; those pages should compose blocks/patterns/sections without the toolkit indexing chrome.
- **CTAs**:
  - Any primary CTA in the toolkit (e.g. “Schedule a Call”, “Get in Touch”, “Send Message”, “View Showreel”) must use the shared `PrimaryButton` atom, optionally extended via `className` (spacing/width only, not font size or tracking).
  - Secondary/ghost CTAs (e.g. “Our Work”) must use a dedicated secondary button atom (e.g. `SecondaryButton`), and that atom must be surfaced in the toolkit UI elements section as the single source of truth.

### 5c. React‑ifying HTML (landing → toolkit)
- When converting a static HTML section (hero, about, services, etc.) into React:
  - **First search existing blocks/patterns/sections** before writing new JSX. Reuse:
    - `PrimaryButton` / `SecondaryButton` for CTAs
    - `FormField` for inputs
    - `ServiceCard`, `ProjectCard`, `BriefCard`, `VideoOverlay`, `SvgIcon`, etc.
  - Do **not** restyle CTAs or typography ad‑hoc inside the new section. If the HTML uses a new visual variant:
    - Add/extend a block (e.g. `SecondaryButton`) and wire it into the toolkit (UI elements section) first.
    - Then consume that block from the new section.
  - **Never override core block identity** (no hacks/patches/band‑aids):
    - Do not change border radius, font size, or letter‑spacing of button blocks via `className` at call sites.
    - If a new shape or size is required (e.g. pill buttons), change the block itself and update the toolkit section that documents it so that all usages inherit the same look.
  - Tie headings to the toolkit typography scale:
    - Use the established H0/H1/H2/H3 samples from `TypographySection` (matching classNames).
    - If a heading needs to be larger/smaller than existing samples, **add a new sample** (e.g. `H0`) to the toolkit and reuse that style in the section instead of inventing fresh Tailwind strings.
  - **Preserve layout & responsive logic**:
    - Carry over breakpoint behavior (`sm:`, `md:`, `lg:` grid/flex rules) from the original HTML into the React component unless there is an explicit decision to change the design.
    - Prefer moving common layout patterns into shared helpers (e.g. `PageContainer`, grid patterns), but the end result must respond the same way across viewports as the source HTML.

### 5d. Toolkit grouping & ordering
- Treat `/toolkit` as the on-site “storybook”:
  - **Token/block sections first**: color palette (`01. Color Palette`), typography (`02. Typography`), then core UI blocks/patterns like buttons, pills, iconography, form fields.
  - **Pattern/layout sections next**: service cards, project grids, brief/video/gallery blocks.
  - **Section components last**: navigations, heroes, composite layouts – with `TopNavSection` first within this group and the page/footer sections rendered last.
  - Each showcased element should include a small text label with its component name/path for reference (e.g. `PrimaryButton — components/blocks/PrimaryButton`), used only inside `/toolkit` as documentation, never copied into marketing pages.

### 5e. Next.js – No distDir or .next Changes
- **Never change `distDir`** in `next.config`. Keep the default `.next`. Custom `distDir` breaks Vercel and other platforms that expect the standard output path.
- **Do not rename or relocate `.next`**. It is the canonical Next.js build output; tooling and deployment assume it.

### 6. Styling & Tokens
- **Tokens > custom values**:
  - Use Tailwind’s design tokens or project-specific tokens before arbitrary values.
  - When you must introduce a new value, add it to tokens first, then use it.
- **No inline “magic”**:
  - Avoid hard-coded hex values or spacing in components if a token exists.
  - Treat `text-[10px]` / `tracking-[0.2em]` as *design decisions*; centralize or document them.
  - **Typography governance**:
    - `src/content/typography.ts` is the **single source of truth** for typography classes.
    - Font families: Manrope (body, headings); IBM Plex Mono (micro scale: labels, disclaimers, meta, CTAs).
    - When using `type.*` tokens (H0/H1/H2/H3/body) in blocks, patterns, sections, or pages, **do not append extra Tailwind typography classes** (font weight, size, line-height, letter-spacing, casing, or color) at the call site.
    - If a new typography treatment is needed, add or update a token in `typography.ts` and surface it in the toolkit `TypographySection` before consuming it elsewhere.

### 7. Icons & SVGs
- **Inline, controllable SVGs only**:
  - All UI icons are driven by `SvgIcon` and its `ICONS` map.
  - External `.svg` files are inputs to be inlined once, not consumed directly via `<img>`.
- **Buttons with icons**:
  - Build `SvgButton`-style blocks that wrap `SvgIcon` for interactive states.
  - Hover/active/disabled are handled with Tailwind classes and tokens, never duplicated per call site.

### 8. State, Data, and Side Effects
- **Keep state at the right level**:
  - Blocks and most patterns should be stateless.
  - Sections may manage local UI state; persistent or cross-section state belongs higher (page/layout).
- **Pure by default**:
  - Components should be pure functions of props whenever possible.
  - Side effects (fetching, subscriptions) live in route handlers, hooks, or dedicated data modules.

### 9. Collaboration & Review
- **Leave things cleaner**:
  - When you touch a file, align it with these rules where practical, even if you didn’t create it.
- **Prefer refactors over band-aids**:
  - If a design change conflicts with this code of honor, we refactor the structure rather than hack around it.
- **Document patterns**:
  - When you establish a new pattern (e.g. new icon variant, new card type), update governance docs or component README-style comments where appropriate.
- **No-assumption answers**:
  - When asked a question about code, **always inspect the real file/lines first** (with fresh reads) before answering.
  - Do not answer based on prior edits, recollection, or “what should be there” when the actual implementation can be checked.
  - When a user gives explicit implementation instructions but the wording is unclear (typos, ambiguous phrasing), **ask one focused clarification** rather than silently guessing. Only proceed without asking when the intent is unambiguous.
- **Push back when a request is off**:
  - If a user request would break proper workflows, go against industry standards, or not actually benefit the user, say so clearly: explain why it's inadvisable and propose a better approach.
  - Only proceed with the original request if the user explicitly insists after that pushback.

