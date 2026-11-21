# Anisha Gupta — Portfolio

A responsive Next.js portfolio for Anisha Gupta. It includes project detail routes, a configurable project video component, and the provided resume download.

## Run locally

Requirements: Node.js 20.9+ and pnpm (or npm).

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. To make a production build, run `pnpm build` and then `pnpm start`.

## Update project links and videos

Edit `src/data/projects.ts` to add verified `github` and `demo` URLs. Project links are intentionally omitted until supplied. For each detail page, pass a real video path to `ProjectVideo` in `src/app/projects/[slug]/page.tsx` when an MP4 has been added under `public/`; the video section remains hidden until a path is configured.

The resume is served from `public/Anisha_Gupta_Resume.pdf` and downloaded by the hero, navigation and contact buttons.

## Deploy with Vercel

Import this repository in Vercel, keep the detected Next.js framework settings, and deploy. No environment variables are required for the current site.
