# TeaLeaf Reporting User

React, JavaScript, Tailwind CSS and Vite implementation of the accessible Reporting User analytics designs from [Final Edit Copy](https://www.figma.com/design/a2TJM00gbIBBwzOcn3mMxm/Final-Edit-Copy). The Figma file was read only and was not modified.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. Build with `npm run build`; serve the production build with `npm run preview`.

## Implemented designs

| URL hash | Screen | Figma node |
| --- | --- | --- |
| #dashboard | Analytics Dashboard | 29:2 |
| #estates | Estate Overview | 29:212 |
| #divisions | Division Overview | 29:486 |
| #observations | Observation Statistics | 29:784 |
| #comparison | Suspected vs Confirmed Disease | 29:1241 |
| #filters | Reporting Filters | 30:263 |
| #diseases | Disease Distribution | 29:997 |
| #bottlenecks | Review Bottlenecks | 30:2 |
| #freshness | Data Freshness Information | 30:514 |
| #empty | Empty observations | 30:735 |
| #loading | Loading dashboard | 30:875 |
| #collapsed | Collapsed dashboard sidebar | 52:7657 |

Two additional loading variants are retained in `src/screens`. All downloaded SVG icons/chart assets are saved in `public/assets`. No temporary Figma URLs are used by the running application. The asset manifest preserves download provenance only.

## Incomplete scope

Comparison and Reporting Filters now have working pages, built from the existing Figma-derived components and saved screen metadata. Fresh high-fidelity reads remain blocked by the Figma plan limit, so an exact visual match for those two pages has not been verified. Only analytics error (30:1017) and Reporting User profile (41:1547) still show unavailable screens.

The implementation retains the original 3840 × 2160 desktop composition and scales it to viewport width. It does not provide a separately designed mobile layout. It uses Inter when available locally, with Arial fallback. Source screens use the original Figma flex layouts and Tailwind classes. Screen components are separated from interaction wiring in `src/main.jsx`.

Sidebar links, browser back/forward, sidebar collapse, report search, demo notifications, banner dismissal, and CSV download work locally. Search and notification dialogs are functional additions; their original overlay designs were not retrieved. CSV exports visible demo content; there is no backend, live dataset, authentication, or live report filtering. The Reporting Filters page filters the saved demo fixture locally. Estate and division scope, 7/30 day periods, status columns, disease measures, Apply, Reset, valid empty results and persistence work in the preview. Status selection controls visible columns; the total remains the sum of all six statuses. Division filter controls and table drill-down links remain presentation only. Check again displays demo snapshot information and does not refresh a remote service.

## Browser verification

With the dev server running and Microsoft Edge installed:

```sh
node scripts/check-browser.mjs
```

This checks screen rendering, local images, navigation, sidebar expansion/collapse, report search and CSV download. Screenshots are written to `artifacts/`.


Regression checks for comparison and filters: `node scripts/check-reporting-fix.mjs`.
