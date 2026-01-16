# Deployment & Content Guide

This guide explains how to deploy your site to GitHub Pages (with a custom domain) and how to manage your content effectively.

## 1. Hosting on GitHub Pages

Your project is already configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site whenever you push to the `main` branch.

### Setting up the Repository
1. Push your code to a new GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, ensure **Source** is set to **GitHub Actions**.
4. The workflow will run automatically on push. Once finished, your site will be live at `https://<username>.github.io/<repo-name>/`.

### Adding a Custom Domain (e.g., `unga.org.ua`)
1. Go to your domain registrar (where you bought the domain).
2. Add the following **DNS records**:
   - **A Record**: `@` points to `185.199.108.153` (GitHub IP)
   - **A Record**: `@` points to `185.199.109.153`
   - **A Record**: `@` points to `185.199.110.153`
   - **A Record**: `@` points to `185.199.111.153`
   - **CNAME Record**: `www` points to `<username>.github.io`
3. In your GitHub Repository, go to **Settings** > **Pages**.
4. Under **Custom domain**, enter your domain (e.g., `unga.org.ua`) and click **Save**.
5. Check **Enforce HTTPS**.
6. **Important**: GitHub will automatically create a `CNAME` file in your repository. Ensure you pull this change to your local machine (`git pull`) so it isn't overwritten next time you push.

### Updating Configuration
Open `astro.config.mjs` and update the `site` property:
```js
export default defineConfig({
  site: 'https://unga.org.ua', // Your actual domain
  // ...
});
```

---

## 2. Modus Operandi: Creating & Updating Content

Since this is a static site built with Markdown, you have several options for managing content.

### File Structure
All news articles live in `src/content/news/`.
- Each article is a `.md` file.
- Currently, images are referenced via URL, but you can also put them in `public/images/` and reference them like `/images/my-photo.jpg`.

### Option A: The "Hacker" Way (VS Code)
This is the standard developer workflow.
1. Open the project in **VS Code**.
2. Create a new file in `src/content/news/` (e.g., `new-investigation.md`).
3. Copy the frontmatter from an existing post (the text between `---`) and update the fields title, date, etc.
4. Write your article in Markdown.
5. Commit and push:
   ```bash
   git add .
   git commit -m "Add new article"
   git push
   ```

### Option B: The "Writer" Way (Obsidian / iA Writer)
If you prefer a distraction-free writing environment:
1. Open the `src/content/news/` folder as a "Vault" in **Obsidian** or add it as a library location in **iA Writer**.
2. Write your articles comfortably.
3. Use a Git plugin for obsidian or simply use the terminal to push changes when done.

### Option C: The "CMS" Way (Cloud Cannon / TinaCMS / Decap CMS)
If you want a graphical interface (like WordPress) without the server cost, you can add a Git-based CMS. **Decap CMS** (formerly Netlify CMS) is a popular free choice that works with GitHub Pages.

**Recommendation:** Start with **Option A or B**. Since you are already using Nextcloud and Linux, you might appreciate **Obsidian** for writing.

### Markdown Basics
- **Headers**: `# Title`, `## Section`
- **Bold**: `**text**`
- **Links**: `[Link Text](url)`
- **Images**: `![Description](url)`
