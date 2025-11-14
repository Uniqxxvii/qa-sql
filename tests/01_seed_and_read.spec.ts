// tests/01_seed_and_read.spec.ts
import { test, expect } from '@playwright/test';
import { seed, query, closePool } from '../test-utils.js';
import type { User } from '../types';

test.beforeAll(async () => {
  await seed();
});

test.afterAll(async () => {
  await closePool();
});

test('seed inserted users', async () => {
  const res = await query<User>('SELECT id, username, email FROM users ORDER BY id');

  expect(res.rows.length).toBeGreaterThan(0);

  const usernames = res.rows.map(r => r.username);
  expect(usernames).toContain('alice');
});
