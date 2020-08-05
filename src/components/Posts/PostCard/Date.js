/** @jsx jsx */
import {format, parseISO} from 'date-fns'
import {fr} from 'date-fns/locale'
import {jsx} from 'theme-ui'

export const Date = ({date}) => (
  <div
    sx={{
      color: '#000',
      textTransform: 'uppercase',
      fontSize: 0,
    }}
  >
    {format(parseISO(date), 'dd MMMMMM yyyy', {locale: fr})}
  </div>
)
