/**
 * Static export on GitHub Pages serves the site from a sub-path
 * (/<repo>), so every URL that Next.js does not rewrite for us needs the
 * prefix applied by hand.
 *
 * `next/link` and the router add `basePath` automatically. `next/image`
 * and plain `<a href>` do NOT, so route those through `asset()`.
 *
 * The value is inlined at build time, and is an empty string locally.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
