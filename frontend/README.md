# SafariStay Kenya — frontend

Next.js 14 (App Router) + Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Pages

- `/` — hero with search, featured stays, destinations, why SafariStay
- `/stays` — all stays, filterable by destination (`/stays?destination=Diani%20Beach`)
- `/stays/[slug]` — stay details with amenities, experiences and price per night

## Notes

- **Logo:** `public/brand/safaristay-kenya-logo.png` (copy of `../brand/`), rendered by `components/Logo.tsx`. The browser-tab icons `app/icon.png` and `app/apple-icon.png` are cropped from its tree-and-sun artwork.
- **Colours:** `forest` (green) and `gold` in `tailwind.config.ts` are taken from the logo. Shared classes (`ss-btn-primary`, `ss-eyebrow`, …) live in `app/globals.css`.
- **Fonts:** Playfair Display for headings, Inter for body text, via `next/font`.
- **Sample data:** stays come from `lib/stays.ts`. The names are placeholders, not real properties; replace this module with an API once there is a backend. Card artwork is a placeholder drawing until real photos are added.
- **Booking** is not wired up yet. The button on each stay page reads "Booking opens soon".
