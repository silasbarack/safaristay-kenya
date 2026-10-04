import type { Stay } from './stays';

export type BookingQuery = { destination?: string; collection?: string; checkin?: string; checkout?: string; guests?: string };
export type ResidentPackage = { firstNightKes: number; extraNightKes: number; validFrom: string; validUntil: string; source: string };

export function kenyaDate(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Nairobi', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date);
  return `${parts.find(p => p.type === 'year')!.value}-${parts.find(p => p.type === 'month')!.value}-${parts.find(p => p.type === 'day')!.value}`;
}

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function validateSearch(query: BookingQuery, today: string): string | null {
  const { checkin, checkout, guests } = query;
  if (guests && (!/^\d+$/.test(guests) || Number(guests) < 1 || Number(guests) > 6)) return 'Choose between 1 and 6 guests.';
  if (!checkin && !checkout) return null;
  if (!checkin || !checkout) return 'Select both arrival and departure dates, or leave both empty to browse.';
  if (!validDate(checkin) || !validDate(checkout)) return 'Please enter valid arrival and departure dates.';
  if (checkin < today) return 'Your arrival date must be today or later.';
  if (checkout <= checkin) return 'Departure must be after your arrival date.';
  return null;
}

const source = 'https://www.serenahotels.com/offers/serena-east-african-resident-ground-package';
const publishedPackages: Record<string, [number, number]> = {
  'mara-serena-safari-lodge': [35550, 31550],
  'sweetwaters-serena-camp': [41000, 31000],
  'amboseli-serena-safari-lodge': [40300, 27800],
  'kilaguni-serena-safari-lodge': [30550, 25550],
};

/** Published East African resident package, per person, excluding park fees. */
export function getResidentPackage(slug: string, checkin: string, checkout?: string): ResidentPackage | null {
  const prices = publishedPackages[slug];
  if (!prices || !validDate(checkin) || checkin < '2026-10-01' || checkin > '2026-12-22') return null;
  // The final valid night is 22 December; departure on the 23rd is permitted.
  if (checkout && (!validDate(checkout) || checkout <= checkin || checkout > '2026-12-23')) return null;
  return { firstNightKes: prices[0], extraNightKes: prices[1], validFrom: '2026-10-01', validUntil: '2026-12-22', source };
}

/** Opens the visitor's email app; SafariStay does not send or confirm a booking. */
export function enquiryHref(stay: Pick<Stay, 'name' | 'contact'>, query: BookingQuery): string {
  const body = [
    `Hello, I would like to enquire about a stay at ${stay.name}.`,
    '',
    `Arrival: ${query.checkin || 'Please advise'}`,
    `Departure: ${query.checkout || 'Please advise'}`,
    `Guests: ${query.guests || '2'}`,
    '',
    'Please confirm availability, the room or resident package options, the total price, taxes, meals, park fees where applicable, and cancellation terms.',
    '',
    'Thank you.',
  ].join('\r\n');
  return `mailto:${stay.contact.email}?subject=${encodeURIComponent(`Stay enquiry: ${stay.name}`)}&body=${encodeURIComponent(body)}`;
}
