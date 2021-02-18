/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Photo} from './Photo'

export const Photos = ({title, nodes, ...props}) => (
  <ul
    {...props}
    sx={{
      listStyle: 'none',
      display: 'grid',
      gridGap: 3,
      mx: 'auto',
    }}
  >
    {nodes && nodes.map(photo => <Photo key={photo.id} {...photo} />)}
  </ul>
)
