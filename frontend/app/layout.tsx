import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://safaristay-kenya.onrender.com'),
  title: {
    default: 'SafariStay Kenya — Hotels, Lodges & Experiences',
    template: '%s · SafariStay Kenya',
  },
  description:
    'Find hotels, safari lodges, tented camps and beach resorts across Kenya, with real rates and official contacts to book direct.',
  openGraph: {
    images: ['/brand/safaristay-kenya-logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {/* Scroll-reveal content starts hidden; keep it visible when JavaScript is off */}
        <noscript>
          <style>{'.ss-reveal{opacity:1!important;transform:none!important}img.opacity-0{opacity:1!important;filter:none!important}.ss-skeleton{display:none!important}'}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
