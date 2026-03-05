# Landing Page Componentization Report

**Rule:** The marketing `page.js` renders **only** toolkit components. Compare with `landing_import.html` to see what exists vs what still needs componentization.

| Section | On page.js (toolkit) | landing_import.html | Status |
|---------|----------------------|---------------------|--------|
| Top nav | SiteHeader (SvgIcon, FilterPill, PrimaryButton) | Same | ✓ Toolkit |
| Hero | — | Cinematic Motion & Design | Missing → HeroSection |
| About | — | We Partner With Brands | Missing → AboutBlock |
| Services | LayoutGridSection (ServiceCard x3) | Capabilities / Design & Tech Synergy | ✓ Toolkit |
| Portfolio | LayoutGridSection (ProjectCard x2) | Brands in Motion | ✓ Toolkit |
| CTA | — | Ready to evolve... / Start a Project | Missing → WideCtaBanner |
| Footer | ToolkitFooter | Same | ✓ Toolkit |

---

## Elements Needing Componentization

### 1. SectionHeader (molecule)
**Pattern:** Two-line section header
- **Label:** Small, uppercase, liberatiRed (e.g. `CAPABILITIES`, `Portfolio`)
- **Title:** Large, white, title case (e.g. `Design & Tech Synergy`, `Brands in Motion`)

**Used in:** Services section, Brands in Motion section

**Current:** Inline markup in page. Toolkit `SectionLabel` is different (single line, muted gray, toolkit-style numbering).

---

### 2. WideCtaBanner (organism)
**Pattern:** Full-width CTA block
- Solid liberatiRed background
- Optional decorative element (e.g. large icon, top-right)
- Centered white heading
- Black “Start a Project” button

**Used in:** CTA section before footer

**Current:** Inline markup. Toolkit has `PrimaryButton` (red idle) but no full-width CTA organism.

---

### 3. HeroSection (organism)
**Pattern:** Cinematic hero
- Full viewport height
- Background image with gradient overlay
- Centered H1 (optional red accent span)
- Tagline
- Primary CTA (uses `PrimaryButton`)
- Secondary CTA (bordered, ghost style)

**Used in:** Top of page

**Current:** Inline markup. No toolkit hero organism.

---

### 4. AboutBlock (organism)
**Pattern:** Two-column about section
- Left: icon + large heading
- Right: paragraph + “Learn More” link with arrow icon

**Used in:** About section

**Current:** Inline markup. Uses Material Symbols; per governance, icons should eventually move to `SvgIcon`.

---

### 5. ProjectCard image variant (molecule)
**Pattern:** Project card with image background
- Image background
- Hover overlay
- Bottom-left text: category label + title (e.g. `MOTION / 01`, `PARALLELS 03`)

**Used in:** Brands in Motion grid

**Current:** Inline markup. Toolkit `ProjectCard` has placeholder asset and different layout (card below image, meta line).

---

### 6. SecondaryButton (atom)
**Pattern:** Ghost/bordered CTA
- White/10 background, white/20 hover
- White border
- Uppercase label

**Used in:** Hero “Our Work” button

**Current:** Inline button. Toolkit has `PrimaryButton` (red) only.

---

## Retained Non-Visual Logic (from landing)

- Responsive breakpoints: `md:`, `lg:` (grids, flex, nav visibility)
- Layout structure: `max-w-7xl`, `px-6 lg:px-10`, `py-24`
- Grid patterns: `grid-cols-1 md:grid-cols-3`, `grid-cols-1 md:grid-cols-2`
- Hero height: `h-[85vh]`
- Sticky header: `sticky top-0 z-50`, `backdrop-blur-md`

---

## Toolkit Components Used

| Component | Usage |
|-----------|-------|
| `LandingHeader` | Composes SvgIcon, PrimaryButton |
| `ServiceCard` | Services section (direction, motion, interactive) |
| `PrimaryButton` | Header CTA, Hero “View Showreel” |
| `ToolkitFooter` | Footer |

---

## Governance Note

About and CTA sections currently use Material Symbols (`south_east`, `arrow_forward`, `auto_awesome`). Per `Governance/Assets_Governance.md`, icons should use `SvgIcon` with inline SVG paths. When componentizing those sections, convert icons to `SvgIcon` variants.
