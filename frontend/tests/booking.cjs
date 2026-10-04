const test = require('node:test');
const assert = require('node:assert/strict');
const { validateSearch, getResidentPackage, enquiryHref } = require('../.test-build/booking.js');
const today = '2026-10-04';

test('rejects a departure before arrival', () => {
  assert.ok(validateSearch({ checkin: '2026-10-10', checkout: '2026-10-09' }, today));
});
test('rejects a same-day departure', () => {
  assert.ok(validateSearch({ checkin: '2026-10-10', checkout: '2026-10-10' }, today));
});
test('rejects dates before today in Kenya', () => {
  assert.ok(validateSearch({ checkin: '2026-10-03', checkout: '2026-10-08' }, today));
});
test('rejects an impossible calendar date', () => {
  assert.ok(validateSearch({ checkin: '2026-02-30', checkout: '2026-03-04' }, '2026-02-01'));
});
test('requires a complete date pair when dates are entered', () => {
  assert.ok(validateSearch({ checkin: '2026-10-10' }, today));
});
test('allows valid dates and browsing without dates', () => {
  assert.equal(validateSearch({ checkin: '2026-10-10', checkout: '2026-10-12', guests: '3' }, today), null);
  assert.equal(validateSearch({}, today), null);
});
test('rejects a fractional guest count', () => {
  assert.ok(validateSearch({ guests: '2.5' }, today));
});
test('returns the published per-person KES package for an eligible stay', () => {
  const offer = getResidentPackage('mara-serena-safari-lodge', '2026-10-10', '2026-10-12');
  assert.equal(offer?.firstNightKes, 35550);
  assert.equal(offer?.extraNightKes, 31550);
});
test('does not advertise an expired package', () => {
  assert.equal(getResidentPackage('mara-serena-safari-lodge', '2026-12-23'), null);
});
test('does not advertise a package for a trip beyond its validity', () => {
  assert.equal(getResidentPackage('mara-serena-safari-lodge', '2026-12-22', '2026-12-24'), null);
});
test('allows departure the morning after the final valid night', () => {
  assert.equal(getResidentPackage('mara-serena-safari-lodge', '2026-12-22', '2026-12-23')?.firstNightKes, 35550);
});
test('does not apply a package before its start date', () => {
  assert.equal(getResidentPackage('mara-serena-safari-lodge', '2026-09-30'), null);
});
test('carries the selected dates and party into the hotel email draft', () => {
  const link = enquiryHref({ name: 'Nairobi Serena Hotel', contact: { email: 'nairobi@serenahotels.com' } }, { checkin: '2026-10-10', checkout: '2026-10-12', guests: '3' });
  const url = new URL(link);
  assert.equal(url.pathname, 'nairobi@serenahotels.com');
  // Email clients parse mailto headers as URI components, not HTML form data.
  assert.ok(!link.includes('+'));
  const body = decodeURIComponent(link.split('&body=')[1]);
  assert.ok(body.includes('Arrival: 2026-10-10\r\n'));
  assert.ok(body.includes('Departure: 2026-10-12\r\n'));
  assert.ok(body.includes('Guests: 3\r\n'));
  assert.equal(decodeURIComponent(link.split('?subject=')[1].split('&body=')[0]), 'Stay enquiry: Nairobi Serena Hotel');
});
