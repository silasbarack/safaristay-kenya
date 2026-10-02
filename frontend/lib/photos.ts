/**
 * Stock photography, self-hosted in public/photos/ at two sizes:
 * `<name>.jpg` (longest side 1600px) and `<name>-800.jpg`. The two full-width
 * hero photos (`roomHero`, `savannaHero`) also come as `<name>-2400.jpg`.
 * Source: Unsplash (https://unsplash.com/license — free for commercial use).
 * `unsplashId` is the photo-… ID, kept so each image can be traced back.
 * These are illustrative, not photos of the listed properties.
 */

export type Photo = {
  name: string;
  alt: string;
  width: number;
  height: number;
  unsplashId: string;
};

const photo = (name: string, alt: string, width: number, height: number, unsplashId: string): Photo => ({
  name,
  alt,
  width,
  height,
  unsplashId,
});

export const photos = {
  roomHero: photo('room-hero', 'Warm wood-panelled hotel room with a king bed opening onto a tropical garden', 2400, 1600, '1611892440504-42a792e24d32'),
  savannaHero: photo('savanna-sunset-hero', 'Sun setting over the savanna, with a lone acacia and hills on the horizon', 2400, 1600, '1547471080-7cc2caa01a7e'),
  maraSafariSunset: photo('mara-safari-sunset', 'Safari vehicle in tall grass with acacias silhouetted against a red sunset', 1600, 1070, '1516426122078-c23e76319801'),
  amboseliKilimanjaro: photo('amboseli-kilimanjaro', 'Snow-capped Kilimanjaro rising above the Amboseli plains and acacia trees', 1600, 1071, '1489392191049-fc10c97e64b6'),
  giraffeAcaciaDusk: photo('giraffe-acacia-dusk', 'Giraffe browsing beside an acacia tree in golden evening light', 1600, 1065, '1523805009345-7448845a9e53'),
  nairobiSkyline: photo('nairobi-skyline', 'Nairobi city skyline above green parkland in warm morning light', 1600, 1064, '1611348524140-53c9a25263d6'),
  elephantSavanna: photo('elephant-savanna', 'Elephant walking through golden grassland below a flat-topped hill', 1600, 1058, '1535941339077-2dd1c7963098'),
  classicHotelRoom: photo('classic-hotel-room', 'Classic hotel room with a tufted sofa, brass lamps and heavy drapes', 1600, 1200, '1590490360182-c33d57733427'),
  cityHotelRoom: photo('city-hotel-room', 'Bright city hotel room with a padded headboard and a large window', 1600, 1067, '1631049307264-da0ec9d70304'),
  darkWoodSuite: photo('dark-wood-suite', 'Hotel bedroom with dark timber panelling and soft bedside lighting', 1600, 1200, '1566665797739-1674de7a421a'),
  thatchedBeachResort: photo('thatched-beach-resort', 'Thatched beach restaurant on white sand beside a turquoise sea and palms', 1600, 1067, '1499793983690-e29da59ef1c2'),
  palmPoolResort: photo('palm-pool-resort', 'Resort pool lined with loungers under tall coconut palms', 1600, 2000, '1549294413-26f195200c16'),
  thatchedPoolGarden: photo('thatched-pool-garden', 'Free-form pool among thatched cottages and palm trees', 1600, 2133, '1563911302283-d2bc129e7570'),
  timberSafariRoom: photo('timber-safari-room', 'Timber-floored room with a wide bed and doors opening onto the bush', 1600, 1067, '1582719478250-c89cae4dc85b'),
  gardenLounge: photo('garden-lounge', 'Open lounge with low sofas and floor-to-ceiling windows onto a garden', 1600, 844, '1618221195710-dd6b41faaea6'),
  lodgeBedroomLamps: photo('lodge-bedroom-lamps', 'Lodge bedroom with crisp white linen and warm bedside lamps', 1600, 1067, '1618773928121-c32242e63f39'),
  warmHotelRoom: photo('warm-hotel-room', 'Hotel room with a sculpted headboard and patterned bed runner', 1600, 1067, '1587874522487-fe10e954d035'),
  thatchedLodgePool: photo('thatched-lodge-pool', 'Timber lodge with a steep shingle roof above a pool deck lined with loungers', 1600, 1066, '1566073771259-6a8506099945'),
  coastHotelPalms: photo('coast-hotel-palms', 'White coastal hotel with palm trees reflected in the pool at dusk', 1600, 1066, '1551882547-ff40c63fe5fa'),
  oceanInfinityPool: photo('ocean-infinity-pool', 'Infinity pool and timber deck looking out over the ocean under shady trees', 1600, 1066, '1584132967334-10e028bd69f7'),
  beachDeckPool: photo('beach-deck-pool', 'Sun loungers and parasols on a wooden deck beside an ocean-view pool', 1600, 1281, '1582719508461-905c673771fd'),
  courtyardPoolHotel: photo('courtyard-pool-hotel', 'Hotel courtyard with a long pool, fountains and palm gardens', 1200, 1600, '1535827841776-24afc1e255ac'),
  hotelPoolNight: photo('hotel-pool-night', 'Resort lobby and pool lit up at blue hour', 1600, 1066, '1542314831-068cd1dbfeeb'),
  sunsetTerraceResort: photo('sunset-terrace-resort', 'Seafront resort terrace with loungers at sunset', 1600, 1066, '1561501900-3701fa6a0864'),
  whiteHotelPool: photo('white-hotel-pool', 'Whitewashed hotel with a large blue swimming pool at dusk', 1600, 900, '1564501049412-61c2a3083791'),
  resortPoolDusk: photo('resort-pool-dusk', 'Open-sided resort restaurant and tiled pool glowing at dusk', 1600, 1600, '1571896349842-33c89424de2d'),
  aerialResortPools: photo('aerial-resort-pools', 'Clifftop resort with a winding pool, palms and parasols above a deep blue ocean', 1600, 1067, '1540541338287-41700207dee6'),
  beachPergola: photo('beach-pergola', 'Shaded timber deck under a driftwood pergola, with a path through palms to a white-sand beach', 1067, 1600, '1520483601560-389dff434fdf'),
  mountainTerrace: photo('mountain-terrace', 'Rooftop day beds facing a mountain range in the late afternoon light', 1600, 1062, '1445019980597-93fa8acb246c'),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

// The nine hotel photos in the home-page gallery, in display order. None of
// them is a featured stay's photo, so nothing repeats on the home page.
export const galleryPhotos: Photo[] = [
  photos.coastHotelPalms,
  photos.aerialResortPools,
  photos.beachPergola,
  photos.hotelPoolNight,
  photos.courtyardPoolHotel,
  photos.beachDeckPool,
  photos.whiteHotelPool,
  photos.sunsetTerraceResort,
  photos.mountainTerrace,
];

const sizeSuffix = { hero: '-2400', large: '', small: '-800' } as const;

// 'hero' exists only for photos.roomHero and photos.savannaHero.
export function photoSrc(p: Photo, size: keyof typeof sizeSuffix = 'large'): string {
  return `/photos/${p.name}${sizeSuffix[size]}.jpg`;
}
