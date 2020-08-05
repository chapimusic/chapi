/** @jsx jsx */
import {jsx} from 'theme-ui'
import {PostCard} from './PostCard'

const colors = [
  'cb1a3b',
  'e10f21',
  'ed7c20',
  'ffdb0a',
  '9ac467',
  //'c2d9f1',
  '0b6881',
  '814490',
  'bf5e9e',
]

export const Posts = ({title, nodes, ...props}) => (
  <ul
    {...props}
    sx={{
      listStyle: 'none',
      display: 'grid',
      gridGap: 3,
      gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      m: 0,
      py: 4,
    }}
  >
    {nodes &&
      nodes.map(post => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        return (
          <PostCard
            sx={{backgroundColor: `#${randomColor}`}}
            key={post.id}
            {...post}
          />
        )
      })}
  </ul>
)
