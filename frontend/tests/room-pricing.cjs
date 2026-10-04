const test = require('node:test');
const assert = require('node:assert/strict');
const { fromUsd } = require('../.test-build/stays.js');
const stay = { rooms: [
  { name: 'Double', fromUsd: 200, sleeps: 2 },
  { name: 'Triple', fromUsd: 310, sleeps: 3 },
  { name: 'Family', fromUsd: 400, sleeps: 4 }
] };
// A search for four people must not advertise the cheaper two-person room.
test('prices a stay using a room that fits the requested party', () => {
  assert.equal(fromUsd(stay, 4), 400);
});
test('chooses the least expensive eligible room for three people', () => {
  assert.equal(fromUsd(stay, 3), 310);
});
test('does not return a price when no room fits the party', () => {
  assert.equal(fromUsd(stay, 5), null);
});
test('keeps the lowest room price for an unfiltered listing', () => {
  assert.equal(fromUsd(stay), 200);
});
