import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('built homepage keeps mailto spaces and CRLF email body separators', () => {
  const html = readFileSync('.next/server/app/index.html', 'utf8');
  const enquiries = [...html.matchAll(/href="(mailto:[^"]+\?subject=[^"]+)"/g)];
  assert.equal(enquiries.length, 10);
  for (const [, href] of enquiries) {
    assert.ok(href.includes('%20'));
    assert.ok(href.includes('%0D%0A'));
    assert.ok(!href.includes('+'));
    assert.ok(!/(?<!%0D)%0A/.test(href));
  }
});
