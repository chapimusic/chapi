/** @jsx jsx */
import {jsx} from 'theme-ui'
import {VideosVideo} from './Video'

export const Videos = ({title, nodes, ...props}) => (
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
      nodes.map(video => <VideosVideo key={video.id} {...video} />)}
  </ul>
)
