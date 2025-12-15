# Portfolio - Craft CMS

Modern portfolio website built with Craft CMS 5 and Tailwind CSS.

**Live Site:** https://www.nicovece.dev

## Tech Stack

- Craft CMS 5.8
- PHP 8.3
- MySQL 8.0
- Vite 6
- Tailwind CSS 4
- TypeScript
- **Hosting:** Fortrabbit (Universal Stack, Ireland)

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

## Production Deployment

**Platform:** Fortrabbit Universal Stack (eu-w1a region)

### Deployment Workflow

Code changes auto-deploy via GitHub Actions when pushed to `production` branch:

```bash
git checkout production
git merge main
git push origin production
```

### Asset Upload

Images are not in git and must be synced manually:

```bash
rsync -avz web/uploads/ en-k9fwp1@ssh.eu-w1a.frbit.app:/data/www/web/uploads/
```

### Database Sync

For local → production database sync:

```bash
# Export from local (decompresses automatically)
ddev export-db > db.sql
mv db.sql db.sql.gz && gunzip db.sql.gz

# Upload and import
scp db.sql en-k9fwp1@ssh.eu-w1a.frbit.app:/tmp/
ssh en-k9fwp1@ssh.eu-w1a.frbit.app \
  'mysql -h mysql -u en-k9fwp1 -p{password} en-k9fwp1 < /tmp/db.sql'
```

**Note:** Database sync overwrites production. Prefer making content changes directly in production admin.

### Documentation

See `learning_docs/craft_deployment_fortrabbit.md` for complete deployment guide.

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

- Template modularization (modules for complete sections, partials for reusable components)
- Eager loading optimization (.eagerly(), .with())
- Retcon partials for rich text styling
- @layer components for CSS architecture

## Credits

Reference implementation: [ptf-site-main](https://github.com/prototypefund/demo-week-runde14)
