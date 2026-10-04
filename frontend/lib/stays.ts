/**
 * Stays listed on SafariStay: real Kenyan hotels and lodges.
 *
 * Names, locations, phone numbers, emails and room rates come from each
 * hotel's official website (see `website`) and were last checked on
 * `RATES_CHECKED_ON`. Room rates are the hotel's own published "from" prices in USD.
 * Date-limited KES resident packages are maintained separately in booking.ts. The photos are
 * stock images (see lib/photos.ts), not photos of these properties.
 * SafariStay is not affiliated with these hotels — guests book directly.
 *
 * A hotel only gets a `whatsapp` number if its official site publishes one.
 */

import type { PhotoKey } from './photos';

export type StayType = 'Hotel' | 'Safari lodge' | 'Tented camp' | 'Beach resort';

export type Room = {
  name: string;
  fromUsd: number;
  sleeps: number;
};

export type Contact = {
  /** The hotel's own phone lines, in international format. */
  phones: string[];
  /** The group's central reservations line, when the hotel's page lists it. */
  reservationsPhone?: string;
  email: string;
  /** Only set when the hotel's official site lists a WhatsApp number. */
  whatsapp?: string;
};

export type Stay = {
  slug: string;
  name: string;
  type: StayType;
  destination: string;
  /** Where in the destination, as the hotel describes it. */
  area: string;
  summary: string;
  description: string;
  highlights: string[];
  rooms: Room[];
  contact: Contact;
  website: string;
  photo: PhotoKey;
  /** Extra photos for the stay page. */
  gallery: PhotoKey[];
  /** Short label shown on the photo of featured stays, e.g. 'Popular'. */
  badge?: string;
};

export const RATES_CHECKED_ON = '4 October 2026';

const SERENA_RESERVATIONS = '+254 732 123333';

export const stays: Stay[] = [
  {
    slug: 'mara-serena-safari-lodge',
    name: 'Mara Serena Safari Lodge',
    type: 'Safari lodge',
    destination: 'Maasai Mara',
    area: 'Mara Triangle, Maasai Mara National Reserve',
    summary: 'A lodge in the Mara Triangle with a front-row view of the wildebeest migration.',
    description:
      'Mara Serena sits in the Mara Triangle of the Maasai Mara National Reserve, overlooking the plains the great wildebeest migration crosses each year. It is a base for Big Five game drives, balloon safaris and Maasai cultural visits.',
    highlights: ['Wildebeest migration views', 'Big Five game drives', 'Balloon safaris', 'Maasai cultural visits'],
    rooms: [
      { name: 'Standard King Room', fromUsd: 377, sleeps: 2 },
      { name: 'Standard Twin Room', fromUsd: 377, sleeps: 2 },
      { name: 'The Suite', fromUsd: 577, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 736 595900', '+254 736 595901'],
      reservationsPhone: SERENA_RESERVATIONS,
      email: 'mara@serenahotels.com',
    },
    website: 'https://www.serenahotels.com/mara',
    photo: 'thatchedLodgePool',
    gallery: ['maraSafariSunset', 'timberSafariRoom', 'elephantSavanna'],
    badge: 'Popular',
  },
  {
    slug: 'serena-beach-resort-spa',
    name: 'Serena Beach Resort & Spa',
    type: 'Beach resort',
    destination: 'Mombasa',
    area: 'Shanzu Beach, Mombasa',
    summary: 'A heritage beach resort on the white sands of Shanzu Beach, north of Mombasa.',
    description:
      'Serena Beach Resort & Spa lies along Shanzu Beach on Kenya’s north coast. Rooms range from garden-view doubles to sea-view family rooms and suites, so it suits couples and families alike.',
    highlights: ['On Shanzu Beach', 'Sea-view rooms and suites', 'Family rooms for four', 'Spa'],
    rooms: [
      { name: 'Deluxe Queen Garden View', fromUsd: 231.2, sleeps: 2 },
      { name: 'Superior Room', fromUsd: 231.2, sleeps: 2 },
      { name: 'Superior Twin Seaview Room', fromUsd: 306, sleeps: 2 },
      { name: 'Family Room', fromUsd: 382.5, sleeps: 4 },
      { name: 'Family Seaview Room', fromUsd: 412.25, sleeps: 4 },
      { name: 'Garden Suite', fromUsd: 620.5, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 732 125000', '+254 733 584500', '+254 733 584501'],
      email: 'mombasa@serenahotels.com',
    },
    website: 'https://www.serenahotels.com/serena-beach',
    photo: 'palmPoolResort',
    gallery: ['thatchedBeachResort', 'thatchedPoolGarden', 'warmHotelRoom'],
    badge: 'Beachfront',
  },
  {
    slug: 'amboseli-serena-safari-lodge',
    name: 'Amboseli Serena Safari Lodge',
    type: 'Safari lodge',
    destination: 'Amboseli',
    area: 'Amboseli National Park',
    summary: 'An elegant lodge inside Amboseli National Park with uninterrupted views of Mount Kilimanjaro.',
    description:
      'In the heart of Amboseli National Park, this lodge looks out at Mount Kilimanjaro. Family rooms sleep four, which makes it an easy safari lodge to visit with children.',
    highlights: ['Views of Mount Kilimanjaro', 'Inside Amboseli National Park', 'Family rooms for four', 'Elephant country'],
    rooms: [
      { name: 'Standard King Room', fromUsd: 154, sleeps: 2 },
      { name: 'Standard Twin Room', fromUsd: 154, sleeps: 2 },
      { name: 'Standard Triple Room', fromUsd: 154, sleeps: 3 },
      { name: 'Family Room', fromUsd: 154, sleeps: 4 },
      { name: 'Ol Donyo Oibor Suite', fromUsd: 523, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 735 522361'],
      reservationsPhone: SERENA_RESERVATIONS,
      email: 'amboseli@serenahotels.com',
    },
    website: 'https://www.serenahotels.com/amboseli',
    photo: 'resortPoolDusk',
    gallery: ['amboseliKilimanjaro', 'lodgeBedroomLamps', 'elephantSavanna'],
    badge: 'Kilimanjaro views',
  },
  {
    slug: 'nairobi-serena-hotel',
    name: 'Nairobi Serena Hotel',
    type: 'Hotel',
    destination: 'Nairobi',
    area: 'Kenyatta Avenue, Nairobi',
    summary: 'A five-star city hotel on Kenyatta Avenue, set in lush gardens in central Nairobi.',
    description:
      'Nairobi Serena is a five-star hotel on Kenyatta Avenue in the centre of the city, surrounded by gardens. It is a calm base before or after a safari, with rooms from deluxe doubles to executive suites.',
    highlights: ['Central Nairobi location', 'Lush gardens', 'Five-star rooms and suites', 'Executive rooms'],
    rooms: [
      { name: 'Deluxe Room', fromUsd: 196.8, sleeps: 2 },
      { name: 'Deluxe Twin Room', fromUsd: 196.8, sleeps: 2 },
      { name: 'Executive Room', fromUsd: 287, sleeps: 2 },
      { name: 'Premium Room', fromUsd: 303.4, sleeps: 2 },
      { name: 'Executive Suite', fromUsd: 524.8, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 732 124000', '+254 727 282200'],
      email: 'nairobi@serenahotels.com',
    },
    website: 'https://www.serenahotels.com/nairobi',
    photo: 'classicHotelRoom',
    gallery: ['cityHotelRoom', 'nairobiSkyline', 'gardenLounge'],
    badge: 'City hotel',
  },
  {
    slug: 'lake-elmenteita-serena-camp',
    name: 'Lake Elmenteita Serena Camp',
    type: 'Tented camp',
    destination: 'Lake Elmenteita',
    area: 'Soysambu Conservancy, Nakuru',
    summary: 'A boutique tented retreat on the shores of Lake Elmenteita in Soysambu Conservancy.',
    description:
      'Set beside Lake Elmenteita in Soysambu Conservancy, this intimate tented camp pairs classic safari interiors with lakeside views. Birdwatching, nature walks and a heated swimming pool make it a peaceful Rift Valley escape.',
    highlights: ['Beside Lake Elmenteita', 'Soysambu Conservancy', 'Birdwatching and flamingos', 'Heated swimming pool'],
    rooms: [
      { name: 'Deluxe King Tent', fromUsd: 405, sleeps: 2 },
      { name: 'Deluxe Twin Tent', fromUsd: 405, sleeps: 2 },
      { name: 'Flamingo Suite', fromUsd: 850, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 709 998400'],
      reservationsPhone: SERENA_RESERVATIONS,
      email: 'elmenteita@serenahotels.com',
    },
    website: 'https://www.serenahotels.com/elmenteita',
    photo: 'roomHero',
    gallery: ['giraffeAcaciaDusk', 'gardenLounge', 'lodgeBedroomLamps'],
  },
  {
    slug: 'sweetwaters-serena-camp',
    name: 'Sweetwaters Serena Camp',
    type: 'Tented camp',
    destination: 'Nanyuki',
    area: 'Ol Pejeta Conservancy, Nanyuki',
    summary: 'A tented camp inside Ol Pejeta Conservancy, with tents facing a waterhole.',
    description:
      'Sweetwaters Serena Camp is inside the Ol Pejeta Conservancy near Nanyuki, known for its rhino and chimpanzees. Waterhole-view tents let you watch wildlife from your veranda.',
    highlights: ['Inside Ol Pejeta Conservancy', 'Waterhole-view tents', 'Rhino and chimpanzees nearby', 'Near Nanyuki'],
    rooms: [
      { name: 'Standard King Tent', fromUsd: 158, sleeps: 2 },
      { name: 'Standard Tent Waterhole View', fromUsd: 186, sleeps: 2 },
      { name: 'Morani Deluxe Tent', fromUsd: 318, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 734 699851'],
      reservationsPhone: SERENA_RESERVATIONS,
      email: 'sweetwaters@serenahotels.com',
    },
    website: 'https://www.serenahotels.com/sweetwaters',
    photo: 'mountainTerrace',
    gallery: ['elephantSavanna', 'darkWoodSuite', 'giraffeAcaciaDusk'],
  },
  {
    slug: 'kilaguni-serena-safari-lodge',
    name: 'Kilaguni Serena Safari Lodge',
    type: 'Safari lodge',
    destination: 'Tsavo West',
    area: 'Tsavo West National Park',
    summary: 'A classic stone lodge in the heart of Tsavo West, looking over a waterhole.',
    description:
      'Kilaguni Serena is in the heart of Tsavo West National Park. Its classic stone design pairs with modern comforts, and the lodge looks over a waterhole that draws wildlife.',
    highlights: ['Heart of Tsavo West National Park', 'Waterhole views', 'Classic stone design', 'Game drives'],
    rooms: [
      { name: 'Standard King Room', fromUsd: 212, sleeps: 2 },
      { name: 'Deluxe King Room', fromUsd: 227, sleeps: 2 },
      { name: 'Kilaguni Suite', fromUsd: 431, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 734 699865', '+254 734 699699'],
      reservationsPhone: SERENA_RESERVATIONS,
      email: 'kilaguni@serenahotels.com',
    },
    website: 'https://www.serenahotels.com/kilaguni',
    photo: 'sunsetTerraceResort',
    gallery: ['elephantSavanna', 'darkWoodSuite', 'giraffeAcaciaDusk'],
  },
];

export function getStay(slug: string): Stay | undefined {
  return stays.find((s) => s.slug === slug);
}

export function fromUsd(stay: Pick<Stay, 'rooms'>, guests = 1): number | null {
  const eligible = stay.rooms.filter((room) => room.sleeps >= guests);
  return eligible.length ? Math.min(...eligible.map((room) => room.fromUsd)) : null;
}
export const maxGuests = (stay: Stay) => Math.max(...stay.rooms.map((r) => r.sleeps));

// The four stays on the home page, in display order.
export const featuredSlugs = [
  'mara-serena-safari-lodge',
  'serena-beach-resort-spa',
  'amboseli-serena-safari-lodge',
  'nairobi-serena-hotel',
];

export const featuredStays: Stay[] = featuredSlugs.map((slug) => stays.find((s) => s.slug === slug)!);

export const destinations = Array.from(
  stays.reduce((map, s) => map.set(s.destination, (map.get(s.destination) ?? 0) + 1), new Map<string, number>()),
).map(([name, count]) => ({ name, count }));

export function formatKes(amount: number): string {
  return `KES ${amount.toLocaleString('en-KE')}`;
}

export function formatUsd(amount: number): string {
  const cents = Number.isInteger(amount) ? 0 : 2;
  return `USD ${amount.toLocaleString('en-US', { minimumFractionDigits: cents, maximumFractionDigits: cents })}`;
}

/** Digits and leading +, for tel: links. */
export function dialable(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}
