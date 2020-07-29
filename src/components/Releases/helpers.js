export function getReleasePath({slug}) {
  return `/album/${slug.current || slug}/`
}
