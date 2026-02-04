# Artists Against Apartheid: Bay Area

Website for the album release of "Artists Against Apartheid: Bay Area"

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit http://localhost:4321

## Deployment

The site is deployed to GitHub Pages from the `gh-pages` branch.

### To deploy updates:

1. Make changes on `main` branch
2. Build the site:
   ```bash
   npm run build
   ```
3. Switch to gh-pages branch:
   ```bash
   git checkout gh-pages
   ```
4. Copy the build output:
   ```bash
   rm -rf docs
   cp -r dist docs
   ```
5. Commit and push:
   ```bash
   git add docs
   git commit -m "Update build"
   git push
   ```
6. Switch back to main:
   ```bash
   git checkout main
   ```

### GitHub Pages Configuration

In your repo settings, configure GitHub Pages to:
- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/docs`
