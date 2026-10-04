import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return <footer id="contact" className="premium-footer scroll-mt-32">
    <div className="premium-container footer-top"><p>Thoughtfully selected stays.<br /><em>Remarkable Kenya.</em></p><Link href="/stays" className="ss-btn-primary">Find your next stay <ArrowRight size={19} aria-hidden /></Link></div>
    <div className="premium-container footer-grid">
      <div className="footer-brand"><Logo className="h-24" /><p>A considered collection of Kenyan city hotels, safari lodges and coastal escapes.</p></div>
      <div><h3>Explore</h3><Link href="/stays">All stays</Link><Link href="/#destinations">Our collections</Link><Link href="/stays?collection=city">Business travel</Link><Link href="/#our-story">Our story</Link></div>
      <div><h3>Plan with confidence</h3><Link href="/#hotel-contacts">Hotel contacts</Link><Link href="/#featured">Rooms &amp; published rates</Link><p>Book and pay directly with your hotel.</p><p>Independent guide · Nairobi, Kenya</p></div>
    </div>
    <div className="premium-container footer-bottom"><span>© {new Date().getFullYear()} SafariStay Kenya.</span><span>Editorial imagery: Unsplash and an illustrative safari scene. Hotel photos are available on official websites.</span></div>
  </footer>;
}
