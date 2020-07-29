/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Link} from './Link'
import {links} from '.'

export const Desktop = props => (
  <Flex as="ul" {...props} sx={{variant: 'layout.menu.desktop'}}>
    {links.map(({url, text}) => (
      <li key={url}>
        <Link to={url}>{text}</Link>
      </li>
    ))}
  </Flex>
)
