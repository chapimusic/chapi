/** @jsx jsx */
import {Grid, jsx} from 'theme-ui'
import {PostCard} from './PostCard'

export const Posts = ({title, nodes, ...props}) => (
  <ul
    sx={{
      listStyle: 'none',
      display: 'grid',
      gridGap: 3,
      gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      m: 0,
      px: 3,
      py: 4,
    }}
    {...props}
  >
    {nodes && nodes.map(post => <PostCard key={post.id} {...post} />)}
  </ul>
)
