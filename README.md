# Ganesh C — Portfolio hover update

This version keeps the original portfolio design and content, and adds polished hover effects to the navigation, buttons, portrait, statistics, skills, tags, projects, achievement and contact links. It also includes keyboard focus styles and reduced-motion support.

The two JobNova links are grouped together so they stay aligned in the project list.

## Run locally

Requirements: Node.js 20 or Node.js 22+.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. To create a production build, run `npm run build`.

## Add the update to your existing project

1. Replace `src/main.jsx` with the updated file from this project.
2. Copy `src/hover-effects.css` into your existing `src` folder.
3. Keep your existing `src/styles.css`, `ganesh.jpeg` and the rest of your assets.

The updated `main.jsx` imports the new stylesheet after `styles.css`. No additional libraries are needed for the hover effects. The accent color can be adjusted with `--hover-gold-dark` near the top of `hover-effects.css`.

This is a local project update. Deploy it to your hosting provider when you are ready to update the public website.
