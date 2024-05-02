import { expect, test } from 'vitest';
import { extractNewsDisplayHost } from '../extractNewsDisplayHost';

test('extracts hostname from URL', () => {
  expect(extractNewsDisplayHost('https://ycombinator.com/blog/yc-top-companies-2024')).toBe('ycombinator.com');
});

test('extracts hostname from URL omitting www', () => {
  expect(extractNewsDisplayHost('https://www.ycombinator.com/blog/yc-top-companies-2024')).toBe('ycombinator.com');
});

test('extracts hostname from URL keeping subdomains', () => {
  expect(extractNewsDisplayHost('https://test.example.com/')).toBe('test.example.com');
});

test('extracts hostname with handle from known sources', () => {
  expect(extractNewsDisplayHost('https://github.com/kmichaelk/hackernews-vk-miniapp')).toBe('github.com/kmichaelk');
  expect(extractNewsDisplayHost('https://github.com/')).toBe('github.com');
  expect(extractNewsDisplayHost('https://github.com')).toBe('github.com');
});
