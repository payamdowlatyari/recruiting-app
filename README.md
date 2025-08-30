# Recruiting Without Limits – Shell Site

This repository contains a minimal, fast, and responsive single‑page Next.js app.

## Integration plan (summary)

- **Broker feed:** Bind a lightweight list to `/api/brokers` or a static `brokers.json`. Use ISR/CDN caching for freshness.
- **AI assistant:** Lazy‑load a chat launcher that calls `/api/assist` (serverless) backed by an LLM + retrieval over broker/job content. Hydrate only on demand to keep the shell fast.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
