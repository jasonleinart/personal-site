# Styling Spec

Global styling rules for content types. All prose content uses shared styles from `src/styles/global.css`.

---

## Prose Content Class

**All content wrappers must use the `.prose-content` class** for consistent styling across content types.

```html
<article class="article-content prose-content">
  <Content />
</article>
```

This applies to:
- Analysis articles (`/analysis/[slug].astro`)
- Playbook phases (`/playbook/[slug].astro`)
- Notes (`/notes/[slug].astro`)
- Projects (if using MDX content)

---

## What `.prose-content` Includes

Defined in `src/styles/global.css`:

### Typography
- Font size: 1.125rem (1rem on mobile)
- Line height: 1.75
- Color: `--color-text-secondary`

### Headings
- **h2**: 1.75rem, semibold, terracotta-adjacent
- **h3**: 1.375rem, semibold

### Tables (Terracotta Accent)
- Left border: 3px solid `--color-accent` on first column (th:first-child, td:first-child)
- Header: 2px bottom border in accent color
- Header background: `rgba(201, 132, 116, 0.08)` (subtle terracotta tint)
- Cell padding: 0.875rem 1rem
- Row dividers: 1px solid `--color-border` on td
- Row hover: `rgba(201, 132, 116, 0.04)` background on tr:hover td

### Blockquotes
- Left border: 4px solid `--color-accent`
- Background: `--color-bg-secondary`
- Italic text

### Lists
- Proper indentation
- Consistent spacing

### Code
- Monospace font
- Background highlight
- Proper pre/code block styling

### Video Embeds
- Border-radius: 8px
- Aspect ratio: 16/9

---

## Adding Page-Specific Styles

If a page needs additional styles beyond `.prose-content`:

1. Keep the `.prose-content` class for base styles
2. Add a page-specific class for overrides
3. Use scoped `<style>` for page-specific additions only

```html
<article class="article-content prose-content">
```

```css
/* Only add styles NOT covered by .prose-content */
.article-content {
  margin-bottom: 3rem; /* layout-specific */
}
```

---

## Button Styles

**Use global `.btn-primary` and `.btn-secondary` classes** for all CTAs.

```html
<a href="/path" class="btn-primary">Primary CTA</a>
<a href="/path" class="btn-secondary">Secondary CTA</a>
```

- **Primary:** Terracotta gradient background, white text, glow effect
- **Secondary:** Transparent with border, green (sage) hover state

---

## Don't Duplicate

**Never add these to page templates** (they're in global.css):
- Button styles (.btn-primary, .btn-secondary)
- Table styles (thead, th, td, borders)
- Heading styles (h2, h3)
- Paragraph margins
- List styles
- Blockquote styles
- Link colors
- Strong/bold colors
- Code styling
- Responsive typography

---

## Color Variables

Always use CSS variables, never hardcoded colors:

| Purpose | Variable |
|---------|----------|
| Accent (terracotta) | `--color-accent` |
| Accent hover | `--color-accent-hover` |
| Accent muted bg | `rgba(201, 132, 116, 0.08)` |
| Secondary accent (sage) | `--color-accent-secondary` |
| Text primary | `--color-text` |
| Text secondary | `--color-text-secondary` |
| Text muted | `--color-text-muted` |
| Border | `--color-border` |
| Background | `--color-bg` |
| Background elevated | `--color-bg-secondary` |
