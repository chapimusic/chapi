/** @jsx jsx */
import {Grid, jsx} from 'theme-ui'
import {PostCard} from './PostCard'

export const Posts = ({title, nodes, ...props}) => (
  <Grid columns={[1, 1, 1, 2, 2, 3]} sx={{width: 'full'}} {...props}>
    {nodes && nodes.map(post => <PostCard key={post.id} {...post} />)}
  </Grid>
)
