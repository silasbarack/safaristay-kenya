import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Playfair_Display({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'SafariStay Kenya — Hotels, Lodges & Experiences',
    template: '%s · SafariStay Kenya',
  },
  description:
    'Book hand-picked hotels, safari lodges, tented camps and beach villas across Kenya, and pay with M-Pesa.',
  openGraph: {
    images: ['/brand/safaristay-kenya-logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
