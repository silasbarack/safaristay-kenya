/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images as-is. Logos are pre-sized in public/brand/, and the on-the-fly
    // optimiser (no `sharp` installed) stalls on Render's free tier, leaving blank images.
    unoptimized: true,
  },
};

module.exports = nextConfig;
