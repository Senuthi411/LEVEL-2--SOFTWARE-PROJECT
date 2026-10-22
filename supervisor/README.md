# TeaLeaf Field Scout — Supervisor portal

React, JavaScript, Tailwind CSS 4, and Vite. Typography and 2,032 Figma assets are stored locally. No temporary Figma image URLs are used at runtime.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. Build with `npm run build` and serve the result with `npm run preview`.

## Design coverage

Source: https://www.figma.com/design/rZC0dqmPUsRBBtm9dsJ0RN/Final-Edit-Copy?node-id=5-4

The eight Supervisor sidebar destinations retain the design's labels and order:

- Dashboard
- Review Queue
- Correction Queue
- Expert Referrals
- Quarantine Queue
- Decision History
- Evidence Viewer
- Fieldwork Assignments

The implementation includes 83 screen routes plus the retrieved notification, filter, search, confirmation and toast overlays. It covers review decisions, correction approval and rejection, referrals, quarantine states and ingest retries, evidence and revision views, assignment creation and lifecycle states, profile preferences, and the Supervisor demo entry flow. Prototype destination IDs from the copied Figma file drive navigation through `src/prototype-links.json` and `src/design-registry.js`.

The eight sidebar labels and order match the source. The original desktop design is 3840 × 2160. The app scales that canvas to fit desktop widths, preserving the proportions. On narrow screens it retains a scrollable 1280px desktop layout rather than inventing a mobile design.

The copied Figma file restored access to the remaining Supervisor designs. No main sidebar destination remains a pending-access page. Other personas shown in the shared role selector are outside this Supervisor module.

Assignment forms support editable title, instructions, due date, division and priority; drafts, assignment data and notification preferences persist in this browser's localStorage. Queue tabs follow the corresponding Figma state screens; filters operate on the displayed demo records. CSV export runs locally. Workflow outcomes use the predefined prototype examples.

This is a frontend demonstration. It has no backend API, real authentication, password update service or shared database. Editing a field does not change the Figma file. Placeholder content and journeys explicitly marked as unavailable in the original prototype retain those limits.

## Verification

`npm run build` checks the production bundle. With the dev server running, `node scripts/verify-portal.mjs` uses Microsoft Edge through Playwright to inspect every screen route, verify loaded images and nonzero rendered geometry, and exercise navigation, tabs, notifications, preferences, correction submission and approval, and the assignment lifecycle. Screenshots and the machine-readable report are saved under `artifacts/`. Visual spot checks were made against the retrieved Figma renders; no automated pixel-diff guarantee is claimed.
