/**
 * Sample listings used until the site has a backend. The names are
 * placeholders, not real properties; swap this module for an API call
 * once stays are managed in a database.
 */

export type StayType = 'Hotel' | 'Lodge' | 'Tented camp' | 'Beach villa';

export type Stay = {
  slug: string;
  name: string;
  type: StayType;
  destination: string;
  region: string;
  pricePerNightKes: number;
  rating: number;
  reviews: number;
  guests: number;
  summary: string;
  description: string;
  amenities: string[];
  experiences: string[];
  // Two-stop gradient used as the card artwork until real photos exist.
  palette: [string, string];
};

export const stays: Stay[] = [
  {
    slug: 'mara-horizon-tented-camp',
    name: 'Mara Horizon Tented Camp',
    type: 'Tented camp',
    destination: 'Maasai Mara',
    region: 'Narok County',
    pricePerNightKes: 38500,
    rating: 4.9,
    reviews: 212,
    guests: 2,
    summary: 'Canvas suites on the edge of the reserve, with the migration on your doorstep.',
    description:
      'Twelve raised canvas suites look out over the Mara plains. Mornings start with game drives at first light, evenings end around the fire under a sky full of stars. Full board, with guided drives twice a day.',
    amenities: ['Full board', 'Private deck', 'Solar hot water', 'Wi-Fi in the lounge', 'Airstrip transfers'],
    experiences: ['Sunrise game drive', 'Hot-air balloon safari', 'Maasai village visit', 'Bush breakfast'],
    palette: ['#c99a3c', '#2f4d27'],
  },
  {
    slug: 'amboseli-acacia-lodge',
    name: 'Amboseli Acacia Lodge',
    type: 'Lodge',
    destination: 'Amboseli',
    region: 'Kajiado County',
    pricePerNightKes: 29000,
    rating: 4.8,
    reviews: 164,
    guests: 3,
    summary: 'Elephant herds and Kilimanjaro views from a stone-and-thatch lodge.',
    description:
      'A family-friendly lodge set among fever trees, facing Mount Kilimanjaro. Watch elephants cross the swamp from the pool terrace, then head out with a naturalist guide.',
    amenities: ['Half board', 'Swimming pool', 'Family rooms', 'Spa', 'Parking'],
    experiences: ['Elephant tracking', 'Kilimanjaro sundowner', 'Observation Hill walk'],
    palette: ['#e9c77a', '#3f6331'],
  },
  {
    slug: 'diani-coral-beach-villa',
    name: 'Diani Coral Beach Villa',
    type: 'Beach villa',
    destination: 'Diani Beach',
    region: 'Kwale County',
    pricePerNightKes: 24500,
    rating: 4.7,
    reviews: 98,
    guests: 6,
    summary: 'A private villa steps from white sand and the Indian Ocean.',
    description:
      'Three en-suite bedrooms, a plunge pool and a path straight onto Diani’s white sand. A house cook can prepare Swahili dishes on request.',
    amenities: ['Plunge pool', 'Beach access', 'Air conditioning', 'Kitchen', 'Wi-Fi'],
    experiences: ['Snorkelling at Kisite', 'Dhow sunset cruise', 'Colobus monkey walk'],
    palette: ['#d9b25a', '#1f3a22'],
  },
  {
    slug: 'naivasha-lakeside-hotel',
    name: 'Naivasha Lakeside Hotel',
    type: 'Hotel',
    destination: 'Lake Naivasha',
    region: 'Nakuru County',
    pricePerNightKes: 14500,
    rating: 4.6,
    reviews: 301,
    guests: 2,
    summary: 'Garden rooms on the lake shore, two hours from Nairobi.',
    description:
      'An easy weekend escape from Nairobi. Giraffes graze the lawns, hippos come ashore at dusk, and Hell’s Gate is a short drive away.',
    amenities: ['Breakfast included', 'Lake-view restaurant', 'Pool', 'Conference rooms', 'Parking'],
    experiences: ['Boat ride to Crescent Island', 'Cycling in Hell’s Gate', 'Bird walk'],
    palette: ['#b8892f', '#4b7643'],
  },
  {
    slug: 'samburu-riverbank-lodge',
    name: 'Samburu Riverbank Lodge',
    type: 'Lodge',
    destination: 'Samburu',
    region: 'Samburu County',
    pricePerNightKes: 33000,
    rating: 4.8,
    reviews: 87,
    guests: 2,
    summary: 'Cottages under doum palms on the Ewaso Nyiro river.',
    description:
      'Northern Kenya at its wildest. Spot the “Samburu Special Five” — Grevy’s zebra, reticulated giraffe, gerenuk, beisa oryx and Somali ostrich — from open vehicles.',
    amenities: ['Full board', 'River-view cottages', 'Pool', 'Laundry'],
    experiences: ['Special Five game drive', 'Samburu cultural visit', 'Riverside dinner'],
    palette: ['#c99a3c', '#284421'],
  },
  {
    slug: 'nanyuki-mount-kenya-retreat',
    name: 'Mount Kenya Retreat',
    type: 'Hotel',
    destination: 'Nanyuki',
    region: 'Laikipia County',
    pricePerNightKes: 18000,
    rating: 4.7,
    reviews: 143,
    guests: 4,
    summary: 'Cool highland air, log fires and views of Mount Kenya.',
    description:
      'Stone cottages on the equator, with Mount Kenya on the horizon. A base for rhino sanctuaries, horse rides and hikes on the lower slopes.',
    amenities: ['Breakfast included', 'Fireplaces', 'Horse riding', 'Kids’ club', 'Parking'],
    experiences: ['Rhino sanctuary visit', 'Equator crossing', 'Guided forest hike'],
    palette: ['#e9c77a', '#2f4d27'],
  },
];

export function getStay(slug: string): Stay | undefined {
  return stays.find((s) => s.slug === slug);
}

export const destinations = Array.from(
  stays.reduce((map, s) => map.set(s.destination, (map.get(s.destination) ?? 0) + 1), new Map<string, number>()),
).map(([name, count]) => ({ name, count }));

export function formatKes(amount: number): string {
  return `KES ${amount.toLocaleString('en-KE')}`;
}
