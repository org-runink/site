/**
 * Ambient declarations for asset imports in preview cards.
 *
 * The design-sync converter compiles previews with esbuild, whose STORY_LOADERS map
 * these extensions to the `dataurl` loader — so `import mark from '…/logo.png'` yields
 * a data URI and the real artwork is inlined. TypeScript knows nothing about that
 * loader, so without these declarations every asset import is an error and the preview
 * type-check is too noisy to be useful.
 *
 * Importing assets is the correct approach for previews: the capture server serves only
 * the bundle directory, so a literal `/images/…` path resolves to nothing.
 */
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.ico' {
  const src: string;
  export default src;
}
