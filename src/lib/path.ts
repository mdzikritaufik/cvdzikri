/**
 * `trailingSlash: true` (needed for GitHub Pages) means the router reports
 * "/projects/" for a route we link to as "/projects". Compare routes through
 * here so the two spellings are treated as the same page.
 */
function normalize(path: string): string {
  const bare = path.split(/[?#]/)[0];
  return bare.length > 1 && bare.endsWith("/") ? bare.slice(0, -1) : bare;
}

export function samePath(a: string, b: string): boolean {
  return normalize(a) === normalize(b);
}
