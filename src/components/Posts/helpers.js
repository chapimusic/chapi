import {format, parseISO} from 'date-fns'

export function getPostPath({publishedAt, slug}) {
  return `/${format(parseISO(publishedAt), 'yyyy/MM')}/${slug.current || slug}/`
}
