/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Installation} from './Installation'

export const Installations = ({title, nodes, ...props}) => (
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
    {nodes && nodes.map(node => <Installation key={node.id} {...node} />)}
  </ul>
)
