/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Spectacle} from './Spectacle'

export const Spectacles = ({title, nodes, ...props}) => (
  <ul
    {...props}
    sx={{
      listStyle: 'none',
      display: 'grid',
      gridGap: 3,
      py: 4,
      width: '960px',
      mx: 'auto',
    }}
  >
    {nodes &&
      nodes.map(spectacle => <Spectacle key={spectacle.id} {...spectacle} />)}
  </ul>
)
