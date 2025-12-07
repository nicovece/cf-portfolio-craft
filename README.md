# Portfolio - Craft CMS

Personal portfolio site built with Craft CMS 5.

## Tech Stack

- Craft CMS 5.8
- PHP 8.3
- MySQL 8.0
- Vite 6
- Tailwind CSS 4
- TypeScript

## Local Development

```bash
# Start DDEV environment
ddev start

# Install dependencies
ddev composer install
npm install

# Run Craft setup (first time only)
ddev craft setup

# Start Vite dev server
npm run dev
```

Site available at: https://cf-portfolio-craft.ddev.site

## Frontend Development

```bash
npm run dev    # Development with HMR (port 3000)
npm run build  # Production build
```

## Project Structure

```
templates/
  _layouts/       # Base layouts
  _modules/       # Complete sections (nav, footer, gallery)
  _partials/      # Reusable components and content blocks
src/
  css/           # Tailwind CSS + custom components
  js/            # TypeScript modules
```

## Key Patterns

- Template modularization (modules vs partials)
- Eager loading optimization (.eagerly(), .with())
- Retcon partials for rich text styling
- @layer components for CSS architecture

## Credits

Reference implementation: [ptf-site-main](https://github.com/prototypefund/demo-week-runde14)
