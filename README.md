# LEVEL-2--SOFTWARE-PROJECT

## Member-1 — TeaLeaf Administrator Portal

React + TypeScript frontend based on the Tea Scout Figma design and the project implementation baseline. Includes login, protected administrator routes, dashboard, users, roles/scopes, estates, divisions, devices, and profile screens.

### Run locally

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:5174/login.

Demo account: `admin@tealeaf.test` / `TeaLeaf@2026`. These are public synthetic credentials for the local mock adapter, not production secrets. The login page includes a button to fill them in.

```sh
npm run check
npm run build
npm run preview
```

The frontend uses React Router and Vite. Source lives in `apps/web/src`, organized into shell and Identity feature domain/application/infrastructure/presentation folders. Original UI assets live in `apps/web/public/assets`. Shared styles are in `design.css` and `styles.css`.

Authentication and data operations are frontend demonstrations. A Node.js/Express, SQLite, JWT and REST backend must be connected for production authentication and server authorization. Passwords and real tokens are not persisted by this demo. Generated builds, dependencies, environment files, downloaded references, and local tooling are excluded from Git.

Browser smoke checks are provided in `verify-react.cjs`; they require a local Chromium debugging session on port 9222. For deployment, configure the static host to return `dist/index.html` for SPA routes.
