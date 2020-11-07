export function getProductPath({slug}) {
  return `/boutique/${slug.current || slug}/`
}
