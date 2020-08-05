/** @jsx jsx */
import {format, parseISO} from 'date-fns'
import {fr} from 'date-fns/locale'
import {jsx} from 'theme-ui'

export const Date = ({date}) => (
  <div sx={{color: 'textMuted', fontSize: 3, variant: `styles.handwrite`}}>
    Le {format(parseISO(date), 'dd MMMMMM yyyy', {locale: fr})},
  </div>
)
