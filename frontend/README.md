# SafariStay Kenya — frontend

Next.js 14 (App Router) + Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Pages

- `/` — hero with search and a hotel-room photo, featured stays, a 9-photo gallery, destinations, why SafariStay
- `/stays` — all stays, filterable by destination (`/stays?destination=Diani%20Beach`)
- `/stays/[slug]` — stay details with amenities, experiences and price per night

## Notes

- **Logo:** `public/brand/` holds the original PNG (used for link previews) plus a pre-sized `-360.jpg` for the header and footer (`components/Logo.tsx`). Images are served as-is (`images.unoptimized` in `next.config.js`); Next's on-the-fly optimiser has no `sharp` here and stalls on Render's free tier. The tab icons `app/icon.png` and `app/apple-icon.png` are cropped from the logo's tree-and-sun artwork.
- **Colours:** `forest` (green) and `gold` in `tailwind.config.ts` are taken from the logo. Shared classes (`ss-btn-primary`, `ss-eyebrow`, …) live in `app/globals.css`.
- **Fonts:** Playfair Display for headings, Inter for body text, via `next/font`.
- **Sample data:** stays come from `lib/stays.ts`. The names are placeholders, not real properties; replace this module with an API once there is a backend.
- **Photos:** stock images from [Unsplash](https://unsplash.com/license) (free for commercial use), self-hosted in `public/photos/` at 1600px and 800px (`-800`). `lib/photos.ts` lists each one with its alt text and Unsplash ID; the gallery and each stay's photo are chosen there and in `lib/stays.ts`. They are illustrative, not the listed properties — replace them with real property photos when available.
- **Booking** is not wired up yet. The button on each stay page reads "Booking opens soon".
