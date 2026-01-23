# jasonleinart.com

Personal portfolio site built with Astro.

## Tech Stack

- **Framework:** Astro v5
- **Styling:** Tailwind CSS
- **Content:** MDX with Zod schema validation
- **Fonts:** DM Sans + Instrument Serif (self-hosted via Fontsource)
- **Hosting:** Cloudflare Pages

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Pushes to `master` automatically deploy to production via Cloudflare Pages.

## Project Structure

```
src/
├── content/       # MDX content (projects, writing, decisions, etc.)
├── components/    # Astro components
├── layouts/       # Page layouts
├── pages/         # Route pages
└── styles/        # Global CSS
```

See `CLAUDE.md` for detailed content schemas and project instructions.
