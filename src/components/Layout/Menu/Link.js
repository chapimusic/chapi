/** @jsx jsx */

import {jsx} from 'theme-ui'
import {Link as GatsbyLink} from 'gatsby'

export const Link = props => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      variant: 'layout.header.link',
    }}
  />
)
