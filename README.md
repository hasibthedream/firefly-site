# Firefly Thermal Website (React + Vite + Tailwind)

This project was generated from your uploaded `firefly-website.jsx` and is ready to run locally or deploy.

## Run locally

1) Install Node.js (v18+ recommended)
2) In this folder:

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

- Push this folder to a GitHub repo
- In Vercel: New Project → import repo → Deploy
- Vercel will auto-detect Vite.

## Domain cutover (fireflythermal.com)

After deploy, connect the domain in Vercel and update DNS:
- Keep Google Workspace MX records
- Replace Squarespace A/CNAME records with Vercel's instructions
