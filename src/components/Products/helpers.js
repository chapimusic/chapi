export function getProductPath({slug}) {
  return `/${slug.current || slug}/`
}
