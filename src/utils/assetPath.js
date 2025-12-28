// Prefix public asset paths with the built base URL so they work on GitHub Pages.
export const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
