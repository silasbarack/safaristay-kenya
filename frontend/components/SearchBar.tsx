import { Search } from 'lucide-react';
import { destinations } from '@/lib/stays';

// Plain GET form, so search works without client-side JavaScript.
export default function SearchBar({ defaultDestination = '' }: { defaultDestination?: string }) {
  return (
    <form action="/stays" method="get" className="flex flex-col gap-3 rounded-card border border-line bg-white p-3 shadow-card sm:flex-row">
      <label className="sr-only" htmlFor="destination">
        Destination
      </label>
      <select id="destination" name="destination" defaultValue={defaultDestination} className="ss-input sm:flex-1">
        <option value="">Anywhere in Kenya</option>
        {destinations.map((d) => (
          <option key={d.name} value={d.name}>
            {d.name}
          </option>
        ))}
      </select>
      <button type="submit" className="ss-btn-gold px-6">
        <Search className="h-4 w-4" aria-hidden />
        Search stays
      </button>
    </form>
  );
}
