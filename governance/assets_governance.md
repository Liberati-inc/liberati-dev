## Asset & SVG Governance

### Goals
- **Single source of truth** for visual assets.
- **Atomic, themeable SVGs** (color/size/hover controlled via Tailwind + tokens).
- **Predictable imports** for Cursor/Claude to reason about.

### General Rules
- **All UI icons must be inline SVGs**, not `<img>` tags pointing at `.svg` files.
- **External `.svg` files in `public/assets/svg` are considered raw inputs only**:
  - Use them as design references or one‑time imports.
  - After inlining their paths, keep them for history but **do not use them directly in JSX**.
- **Every reusable icon must go through `SvgIcon` (or a thin wrapper)`**, never hand‑rolled `<svg>`s in random components.

### `SvgIcon` Contract
- File: `components/atoms/SvgIcon.js`.
- Backed by an internal `ICONS` map:
  - **Key**: semantic name (`"direction"`, `"motion"`, `"interactive"`, etc.).
  - **Value**: `{ viewBox, d }` where `d` is the inlined `path` from the original asset.
- API:
  - **Required**: `variant` (must match a key in `ICONS`).
  - **Optional**:
    - `asButton` → adds hover/interaction transforms (for button‑like usage).
    - `className` → extra Tailwind utilities.
    - `sizeClass` → controls rendered size (default `w-10 h-10`).
    - `colorClass` → uses `currentColor`; default `text-liberatiRed`.
- Implementation rules:
  - Always set `fill="currentColor"` so color comes from Tailwind/text color.
  - Do **not** hard‑code brand colors in the SVG `d`; use tokens/Tailwind.
  - New icons must be added to the `ICONS` map with clear, semantic keys.

### Creating New Icons From Assets
When adding a new `.svg` under `public/assets/svg`:

1. **Inline once**:
   - Open the asset, copy the `viewBox` and the main `path d="..."`.
2. **Register in `SvgIcon`**:

   ```js
   const ICONS = {
     ...,
     newVariantName: {
       viewBox: "0 0 W H",
       d: "PASTE_PATH_HERE",
     },
   };
   ```

3. **Use via `SvgIcon`**:

   ```jsx
   <SvgIcon variant="newVariantName" />
   ```

4. **Never** import the asset file into JSX (`<img src="/assets/svg/..." />`) for icons.

### SVG Buttons (`SvgButton`)
- All icon‑buttons must be built on top of `SvgIcon`.
- Suggested pattern:

```jsx
// components/atoms/SvgButton.js
import SvgIcon from "@/components/atoms/SvgIcon";

export default function SvgButton({
  iconVariant,
  label,
  className = "",
  ...rest
}) {
  return (
    <button
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-colors ${className}`}
      {...rest}
    >
      <SvgIcon variant={iconVariant} asButton />
      {label && <span>{label}</span>}
    </button>
  );
}
```

### Atomic Usage Rules
- **Atoms**:
  - `SvgIcon`, `SvgButton` are the only primitives that talk to `ICONS`.
- **Molecules/Organisms**:
  - Accept **semantic props** like `iconVariant="direction"` instead of raw SVG.
  - Example: `ServiceCard` takes `iconVariant` and renders `<SvgIcon variant={iconVariant} />`.
- When updating an icon:
  - Change only the `ICONS` entry in `SvgIcon`.
  - All dependent components (service cards, iconography, future buttons) update automatically.

