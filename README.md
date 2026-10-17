# ALCOEN's Business Website

Marketing website for ALCOEN (inspection, expertise and engineering services), built with
React 18, React Router 6, TypeScript, Vite and Tailwind CSS.

## Getting started

```bash
npm ci
cp .env.example .env   # then adjust values
npm run dev            # http://localhost:3000
npm run lint
npm run build          # output in dist/
```

### Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_MAIL_API_URL` | Endpoint (POST, JSON) that receives the contact form. Set it before building, since Vite inlines it at build time. While it is empty (mailing service not ready yet), the form shows visitors the phone numbers instead of sending. |

## Project layout

- `src/data/services.ts` - single source of truth for services (slug, title, header image). Routes, the home slider, the service header and redirects from legacy URLs are generated from it.
- `src/pages/Services/*` - one page per service, lazy loaded in `src/App.tsx`.
- `src/pages/contactAction.ts` - contact form action (timeout, error handling, honeypot).

To add a service: add an entry to `services.ts`, create the page in `src/pages/Services/` and register it in the `pages` map in `src/App.tsx`.

## Deployment (Apache / cPanel)

The site is a client-side routed SPA, so the server must fall back to `index.html` for unknown paths.
`public/.htaccess` does this and is copied into `dist/` by the build. Upload the whole content of `dist/`
(including the hidden `.htaccess`) to the web root.

## Status and known limitations

- **Mailing service not ready yet.** Until `VITE_MAIL_API_URL` is set, the contact form does not send anything and shows the company phone numbers instead.
- `npm audit` still reports issues that need major upgrades (`react-router` v7, ESLint 9 / Tailwind tooling).
- Some service images exist in both `public/services` and `src/assets`.

## Notes

- Images should be exported as WebP and sized for their display width.
- Once the mailing service exists, host it somewhere always-on: free tiers sleep, which makes the first request slow.
- CI (`.github/workflows/ci.yml`) runs lint and build on every push and pull request.
