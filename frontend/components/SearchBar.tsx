import { CalendarDays, MapPin, Search, UserRound } from 'lucide-react';
import type { ReactNode } from 'react';
import { destinations } from '@/lib/stays';

type SearchBarProps = {
  defaultDestination?: string;
  defaultCheckIn?: string;
  defaultCheckOut?: string;
  defaultGuests?: number;
};

function Field({ icon, label, htmlFor, children }: { icon: ReactNode; label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl px-3 py-2.5 transition focus-within:bg-sand hover:bg-sand lg:rounded-none lg:px-5 lg:hover:bg-transparent">
      <span className="shrink-0 text-forest-700">{icon}</span>
      <div className="min-w-0 flex-1">
        <label htmlFor={htmlFor} className="block text-xs font-semibold text-ink">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}

const control = 'w-full min-w-0 bg-transparent text-sm text-muted outline-none [color-scheme:light]';

// Plain GET form, so search works without client-side JavaScript.
export default function SearchBar({ defaultDestination = '', defaultCheckIn = '', defaultCheckOut = '', defaultGuests = 2 }: SearchBarProps) {
  return (
    <form
      action="/stays"
      method="get"
      className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-2 shadow-[0_24px_60px_-30px_rgba(18,34,20,0.45)] lg:flex lg:items-center lg:gap-0 lg:divide-x lg:divide-line"
    >
      <div className="col-span-2 lg:flex-[1.4]">
        <Field icon={<MapPin className="h-5 w-5" aria-hidden />} label="Destination" htmlFor="destination">
          <select id="destination" name="destination" defaultValue={defaultDestination} className={control}>
            <option value="">Where are you going?</option>
            {destinations.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="lg:flex-1">
        <Field icon={<CalendarDays className="h-5 w-5" aria-hidden />} label="Check-in" htmlFor="checkin">
          <input id="checkin" name="checkin" type="date" defaultValue={defaultCheckIn} className={control} />
        </Field>
      </div>
      <div className="lg:flex-1">
        <Field icon={<CalendarDays className="h-5 w-5" aria-hidden />} label="Check-out" htmlFor="checkout">
          <input id="checkout" name="checkout" type="date" defaultValue={defaultCheckOut} className={control} />
        </Field>
      </div>
      <div className="col-span-2 lg:flex-[0.9]">
        <Field icon={<UserRound className="h-5 w-5" aria-hidden />} label="Guests" htmlFor="guests">
          <select id="guests" name="guests" defaultValue={String(defaultGuests)} className={control}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="col-span-2 lg:border-l-0 lg:pl-2">
        <button type="submit" className="ss-btn-primary h-12 w-full px-7 lg:w-auto">
          <Search className="h-4 w-4" aria-hidden />
          Search stays
        </button>
      </div>
    </form>
  );
}
