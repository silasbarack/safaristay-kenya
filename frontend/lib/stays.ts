/**
 * SafariStay's curated Kenya hotel and lodge directory.
 *
 * Rates and contact details are sourced from the properties' official websites
 * and published rate sheets, checked on RATES_CHECKED_ON. USD room prices are
 * shown with an approximate KES conversion for comparison; the hotel confirms
 * the final rate for the guest's dates, occupancy, taxes and meal plan.
 *
 * Listing photography is property-specific rather than generic stock imagery.
 * SafariStay is independent and guests reserve and pay the hotel directly.
 */

import type { PhotoKey } from './photos';

export type StayType = 'Hotel' | 'Safari lodge' | 'Tented camp' | 'Beach resort';

export type Room = {
  name: string;
  fromUsd: number;
  sleeps: number;
};

export type Contact = {
  phones: string[];
  reservationsPhone?: string;
  email: string;
  whatsapp?: string;
};

export type Stay = {
  slug: string;
  name: string;
  type: StayType;
  destination: string;
  area: string;
  summary: string;
  description: string;
  highlights: string[];
  rooms: Room[];
  contact: Contact;
  website: string;
  /** Property-specific listing photograph. */
  officialPhotoUrl: string;
  officialPhotoAlt: string;
  photoCredit: string;
  /** Kept for the editorial collection imagery used elsewhere in the site. */
  photo: PhotoKey;
  gallery: PhotoKey[];
  badge?: string;
};

export const RATES_CHECKED_ON = '4 October 2026';
export const USD_TO_KES = 129.76;

const SERENA_RESERVATIONS = '+254 732 123333';

export const stays: Stay[] = [
  {
    slug: 'mara-serena-safari-lodge',
    name: 'Mara Serena Safari Lodge',
    type: 'Safari lodge',
    destination: 'Maasai Mara',
    area: 'Mara Triangle, Maasai Mara National Reserve',
    summary: 'A lodge in the Mara Triangle with a front-row view of one of Kenya’s most celebrated wildlife landscapes.',
    description:
      'Mara Serena sits in the Mara Triangle of the Maasai Mara National Reserve, overlooking plains crossed by the great wildebeest migration. It is a base for Big Five game drives, balloon safaris and Maasai cultural visits.',
    highlights: ['Mara Triangle location', 'Big Five game drives', 'Balloon safaris', 'Maasai cultural visits'],
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
    officialPhotoUrl: 'https://image-tc.galaxy.tf/wijpeg-6q0moebexswjw2xzynrid80k9/mssl-game-drive-2.jpg?crop=0%2C451%2C2000%2C735&rotate=0&width=2560',
    officialPhotoAlt: 'Safari vehicle and giraffes on the Maasai Mara plains at Mara Serena Safari Lodge',
    photoCredit: 'Mara Serena Safari Lodge / Serena Hotels',
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
      'Serena Beach Resort & Spa lies along Shanzu Beach on Kenya’s north coast. Rooms range from garden-view doubles to sea-view family rooms and suites, making it a polished coastal choice for couples and families.',
    highlights: ['On Shanzu Beach', 'Sea-view rooms and suites', 'Family rooms', 'Spa'],
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
    officialPhotoUrl: 'https://image-tc.galaxy.tf/wijpeg-uljpscbwhe9wiv6oxto8jou8/1-hotel-aerial-view-1.jpg',
    officialPhotoAlt: 'Aerial view of Serena Beach Resort and Spa, its pool, palms and the Indian Ocean',
    photoCredit: 'Serena Beach Resort & Spa / Serena Hotels',
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
    summary: 'An elegant lodge inside Amboseli National Park with classic Kilimanjaro and elephant country scenery.',
    description:
      'In the heart of Amboseli National Park, this lodge looks toward Mount Kilimanjaro and the park’s famous elephant habitat. Family rooms make it an approachable safari base for parents travelling with children.',
    highlights: ['Mount Kilimanjaro scenery', 'Inside Amboseli National Park', 'Family rooms', 'Elephant country'],
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
    officialPhotoUrl: 'https://image-tc.galaxy.tf/wijpeg-e1gzfu9rnplzz4ool9s1qf5o5/16-amboseli-elephants.jpg?crop=78%2C195%2C1203%2C802&rotate=0&width=2560',
    officialPhotoAlt: 'Elephants crossing the Amboseli landscape below Mount Kilimanjaro',
    photoCredit: 'Amboseli Serena Safari Lodge / Serena Hotels',
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
      'Nairobi Serena is a five-star hotel on Kenyatta Avenue in the centre of the city, surrounded by gardens. It is a refined base before or after a safari, with accommodation from deluxe rooms to executive suites.',
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
    officialPhotoUrl: 'https://image-tc.galaxy.tf/wijpeg-6srl0iqyu19tmtjkpvuj2ij8m/the-lobby-3a-55f0f9.jpg',
    officialPhotoAlt: 'The lobby lounge and garden-facing windows at Nairobi Serena Hotel',
    photoCredit: 'Nairobi Serena Hotel / Serena Hotels',
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
    summary: 'A boutique tented retreat beside Lake Elmenteita in Soysambu Conservancy.',
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
    officialPhotoUrl: 'https://image-tc.galaxy.tf/wijpeg-3bpezgbayov6fgqnjrf2ee58u/experiences-game-drives-1-1.jpg?width=2560',
    officialPhotoAlt: 'Flamingos gathered across Lake Elmenteita beside Soysambu Conservancy',
    photoCredit: 'Lake Elmenteita Serena Camp / Serena Hotels',
    photo: 'roomHero',
    gallery: ['giraffeAcaciaDusk', 'gardenLounge', 'lodgeBedroomLamps'],
  },
  {
    slug: 'sweetwaters-serena-camp',
    name: 'Sweetwaters Serena Camp',
    type: 'Tented camp',
    destination: 'Nanyuki',
    area: 'Ol Pejeta Conservancy, Nanyuki',
    summary: 'A tented camp inside Ol Pejeta Conservancy, with accommodation looking toward a wildlife waterhole.',
    description:
      'Sweetwaters Serena Camp is inside Ol Pejeta Conservancy near Nanyuki, known for rhino conservation and the Sweetwaters Chimpanzee Sanctuary. Waterhole-view tents let guests watch wildlife close to camp.',
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
    officialPhotoUrl: 'https://image-tc.galaxy.tf/wijpeg-denx5d3enk9x37qxqsxy6n5c1/9-accommodation-wildlife-views.jpg?width=2560',
    officialPhotoAlt: 'Wildlife grazing beside Sweetwaters Serena Camp in Ol Pejeta Conservancy',
    photoCredit: 'Sweetwaters Serena Camp / Serena Hotels',
    photo: 'mountainTerrace',
    gallery: ['elephantSavanna', 'darkWoodSuite', 'giraffeAcaciaDusk'],
  },
  {
    slug: 'kilaguni-serena-safari-lodge',
    name: 'Kilaguni Serena Safari Lodge',
    type: 'Safari lodge',
    destination: 'Tsavo West',
    area: 'Tsavo West National Park',
    summary: 'A classic stone lodge in the heart of Tsavo West, looking over a wildlife waterhole.',
    description:
      'Kilaguni Serena is in the heart of Tsavo West National Park. Its classic stone design pairs with modern comforts, and the lodge looks over a waterhole that draws wildlife throughout the day.',
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
    officialPhotoUrl: 'https://image-tc.galaxy.tf/wijpeg-406r6ndbfv3fcsoap2vxeb09j/lobby-at-kilaguni-serena.jpg',
    officialPhotoAlt: 'Stone-walled lobby interior at Kilaguni Serena Safari Lodge in Tsavo West',
    photoCredit: 'Kilaguni Serena Safari Lodge / Serena Hotels',
    photo: 'sunsetTerraceResort',
    gallery: ['elephantSavanna', 'darkWoodSuite', 'giraffeAcaciaDusk'],
  },
  {
    slug: 'eka-hotel-nairobi',
    name: 'Eka Hotel Nairobi',
    type: 'Hotel',
    destination: 'Nairobi',
    area: 'Mombasa Road / Southern Bypass Interchange, Nairobi',
    summary: 'A contemporary four-star hotel near JKIA and Nairobi National Park for practical business and leisure stays.',
    description:
      'Eka Hotel sits at the intersection of Mombasa Road and the Southern Bypass, with quick access to JKIA through the Nairobi Expressway and close proximity to Nairobi National Park. The hotel combines more than 160 rooms with restaurants, conference facilities, a gym, pool, wellness centre and landscaped gardens.',
    highlights: ['Quick JKIA access via Nairobi Expressway', 'Near Nairobi National Park', 'Swimming pool and gym', 'Conference and wellness facilities'],
    rooms: [
      { name: 'Superior Room — published special-rate reference', fromUsd: 165, sleeps: 2 },
    ],
    contact: {
      phones: ['+254 719 045000', '+254 715 045001'],
      email: 'sales@ekahotel.com',
      whatsapp: '+254 715 045001',
    },
    website: 'https://ekahotel.com/',
    officialPhotoUrl: 'https://ekahotel.com/wp-content/uploads/2022/03/Superior-Room-2.jpg',
    officialPhotoAlt: 'Superior guest room at Eka Hotel Nairobi',
    photoCredit: 'Eka Hotel Nairobi',
    photo: 'cityHotelRoom',
    gallery: ['classicHotelRoom', 'gardenLounge', 'nairobiSkyline'],
    badge: 'Near JKIA',
  },
  {
    slug: 'hemingways-watamu',
    name: 'Hemingways Watamu',
    type: 'Beach resort',
    destination: 'Watamu',
    area: 'Garoda Beach, Watamu Marine National Park',
    summary: 'A refined Indian Ocean resort with ocean-view rooms, residences, spa facilities and direct access to Watamu’s coast.',
    description:
      'Hemingways Watamu is set along the white sands of Garoda Beach within Watamu Marine National Park. Its ocean-view rooms and multi-bedroom residences are paired with resort dining, a botanical spa and easy access to coral reefs, Mida Creek and the wider Watamu marine ecosystem.',
    highlights: ['Garoda Beach setting', 'Ocean-view rooms and residences', 'Botanical spa', 'Watamu Marine National Park'],
    rooms: [
      { name: 'North Wing Ocean View — regular season single', fromUsd: 255, sleeps: 2 },
      { name: 'North Wing Deluxe Ocean View — regular season single', fromUsd: 295, sleeps: 2 },
      { name: '1 Bedroom Ocean View Suite', fromUsd: 500, sleeps: 2 },
      { name: '2 Bedroom Ocean View Suite', fromUsd: 725, sleeps: 4 },
      { name: '2 Bedroom Deluxe Ocean View Suite', fromUsd: 850, sleeps: 4 },
      { name: '4 Bedroom Ocean View Penthouse', fromUsd: 1360, sleeps: 8 },
    ],
    contact: {
      phones: ['+254 709 188000'],
      email: 'reservations.watamu@hemingways.co',
    },
    website: 'https://www.hemingways-collection.com/watamu/',
    officialPhotoUrl: 'https://waybird.imgix.net/lodge_images/images/000/195/919/original/Deluxe_Ocean_View_room_balcony_view.jpg?auto=format&crop=fill&fit=crop&q=70&w=1600',
    officialPhotoAlt: 'Ocean-view balcony at Hemingways Watamu overlooking the Indian Ocean',
    photoCredit: 'Hemingways Collection property photography',
    photo: 'oceanInfinityPool',
    gallery: ['beachDeckPool', 'thatchedBeachResort', 'palmPoolResort'],
    badge: 'Oceanfront',
  },
  {
    slug: 'hemingways-eden-residence',
    name: 'Hemingways Eden Residence',
    type: 'Hotel',
    destination: 'Nairobi',
    area: '94 Tumbili Road, Lang’ata, Nairobi',
    summary: 'An intimate art-filled boutique residence beside the Giraffe Sanctuary Forest in Lang’ata.',
    description:
      'Hemingways Eden Residence is a nine-room boutique retreat and private gallery in leafy Lang’ata, bordering the Giraffe Sanctuary Forest. The historic Main House, studio rooms and cottage combine curated African art, forest views, personalised hospitality and convenient access to Nairobi’s wildlife and cultural attractions.',
    highlights: ['Beside Giraffe Sanctuary Forest', 'Nine individually designed rooms', 'Private art collection', 'Near Giraffe Centre and Nairobi National Park'],
    rooms: [
      { name: 'Main House Bedroom 3 — regular season single', fromUsd: 385, sleeps: 2 },
      { name: 'Garden Loft — regular season single', fromUsd: 465, sleeps: 2 },
      { name: 'Main House Bedroom 2 — regular season single', fromUsd: 490, sleeps: 2 },
      { name: 'Main House Master Bedroom — regular season single', fromUsd: 580, sleeps: 2 },
      { name: 'Main House — exclusive use', fromUsd: 1750, sleeps: 6 },
      { name: 'Full Estate — exclusive use', fromUsd: 5040, sleeps: 18 },
    ],
    contact: {
      phones: ['+254 112 901305'],
      email: 'reservations.eden@hemingways.co',
    },
    website: 'https://www.hemingways-collection.com/eden-residence',
    officialPhotoUrl: 'https://cdn.mahlatini.com/_2400x1350_crop_center%20center_100_none/h-the-main-house-verandah.jpg',
    officialPhotoAlt: 'Wooden veranda lounge at Hemingways Eden Residence in Lang’ata, Nairobi',
    photoCredit: 'Hemingways Collection property photography',
    photo: 'gardenLounge',
    gallery: ['darkWoodSuite', 'gardenLounge', 'nairobiSkyline'],
    badge: 'Boutique retreat',
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

export const featuredSlugs = stays.map((stay) => stay.slug);
export const featuredStays: Stay[] = featuredSlugs.map((slug) => stays.find((s) => s.slug === slug)!);

export const destinations = Array.from(
  stays.reduce((map, s) => map.set(s.destination, (map.get(s.destination) ?? 0) + 1), new Map<string, number>()),
).map(([name, count]) => ({ name, count }));

export function formatKes(amount: number): string {
  return `KES ${Math.round(amount).toLocaleString('en-KE')}`;
}

export function formatUsd(amount: number): string {
  const cents = Number.isInteger(amount) ? 0 : 2;
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: cents, maximumFractionDigits: cents })}`;
}

export function usdToKes(amount: number): number {
  return Math.round(amount * USD_TO_KES);
}

/** Digits and leading +, for tel: links. */
export function dialable(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}
