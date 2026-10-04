# Hotel information and pricing

Reviewed 4 October 2026 against the official hotel websites below. These are published starting prices, not a live inventory feed or a quote for selected travel dates. The hotel confirms final rates, occupancy, meals, taxes and availability.

| Hotel | Official source | Starting room price in USD | Direct hotel phone | Hotel email |
| --- | --- | ---: | --- | --- |
| Nairobi Serena Hotel | https://www.serenahotels.com/nairobi | 196.80 | +254 732 124000 | nairobi@serenahotels.com |
| Serena Beach Resort & Spa | https://www.serenahotels.com/serena-beach | 231.20 | +254 732 125000 | mombasa@serenahotels.com |
| Mara Serena Safari Lodge | https://www.serenahotels.com/mara | 377 | +254 736 595900 | mara@serenahotels.com |
| Amboseli Serena Safari Lodge | https://www.serenahotels.com/amboseli | 154 | +254 735 522361 | amboseli@serenahotels.com |
| Lake Elmenteita Serena Camp | https://www.serenahotels.com/elmenteita | 405 | +254 709 998400 | elmenteita@serenahotels.com |
| Sweetwaters Serena Camp | https://www.serenahotels.com/sweetwaters | 158 | +254 734 699851 | sweetwaters@serenahotels.com |
| Kilaguni Serena Safari Lodge | https://www.serenahotels.com/kilaguni | 212 | +254 734 699865 | kilaguni@serenahotels.com |

Property-specific footer contacts are used where the official contact block has inconsistencies. No telephone line is presented as WhatsApp unless the official website identifies it as such. Regional reservations for participating safari properties: +254 732 123333.

## KES resident packages

Source: https://www.serenahotels.com/offers/serena-east-african-resident-ground-package

Published period: 1 October–22 December 2026. Prices are per person and distinct from the room-only starting prices. The site links to the official inclusions, exclusions and booking conditions. Date-limited packages are hidden for ineligible dates, including trips that extend beyond the final valid night.

| Property | First night, KES/person | Extra night, KES/person |
| --- | ---: | ---: |
| Mara | 35,550 | 31,550 |
| Sweetwaters | 41,000 | 31,000 |
| Amboseli | 40,300 | 27,800 |
| Kilaguni | 30,550 | 25,550 |

## Imagery and reservations

The company logo is the original asset in `frontend/public/brand/`, unchanged. Existing editorial photographs are licensed Unsplash images documented in `frontend/lib/photos.ts`. The new safari hero is an original generated illustrative scene. Editorial imagery is labelled as illustrative, and official property websites are linked for actual hotel photographs.

SafariStay is an independent hotel guide. Call links dial the hotel; email links prepare a draft in the visitor's email application. Searches filter the catalogue, not hotel inventory. No enquiry is sent, reservation made or payment collected automatically.

## Verification

Run `npm ci`, `npm test`, `npm run lint` and `npm run build` inside `frontend/`. Tests cover guest-specific room pricing, invalid booking dates, package expiry and date/guest preservation in email drafts.
