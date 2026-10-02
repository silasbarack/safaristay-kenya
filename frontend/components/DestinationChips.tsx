import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { photos, photoSrc, type PhotoKey } from '@/lib/photos';
import FadeImage from './FadeImage';
import Reveal from './Reveal';

const chips: { title: string; subtitle: string; destination: string; photo: PhotoKey }[] = [
  { title: 'Nairobi Hotels', subtitle: 'City stays & business', destination: 'Nairobi', photo: 'nairobiSkyline' },
  { title: 'Maasai Mara Lodges', subtitle: 'Iconic safari experiences', destination: 'Maasai Mara', photo: 'maraSafariSunset' },
  { title: 'Diani Beach Resorts', subtitle: 'Coastal paradise', destination: 'Diani Beach', photo: 'oceanInfinityPool' },
  { title: 'Amboseli Camps', subtitle: 'Views of Mount Kilimanjaro', destination: 'Amboseli', photo: 'amboseliKilimanjaro' },
  { title: 'Naivasha Retreats', subtitle: 'Lakeside getaways', destination: 'Lake Naivasha', photo: 'giraffeAcaciaDusk' },
];

// Quick links into the stays list: a swipeable row on phones, five across on desktop.
export default function DestinationChips() {
  return (
    <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
      {chips.map((c, i) => (
        <Reveal as="li" key={c.title} delay={i * 80} className="w-[250px] shrink-0 snap-start lg:w-auto">
          <Link
            href={`/stays?destination=${encodeURIComponent(c.destination)}`}
            className="group flex items-center gap-2.5 rounded-full border border-line bg-white p-1.5 pr-2.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card"
          >
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
              <FadeImage src={photoSrc(photos[c.photo], 'small')} alt="" sizes="44px" className="object-cover" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block truncate text-[13px] font-semibold text-ink">{c.title}</span>
              <span className="block truncate text-[11px] text-muted">{c.subtitle}</span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-forest-700" aria-hidden />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
