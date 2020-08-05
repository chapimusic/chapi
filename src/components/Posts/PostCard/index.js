/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Title} from './Title'
import {getPostPath} from '../helpers'

export const PostCard = ({
  title,
  slug: {current: slug},
  publishedAt,
  previewImages,
}) => {
  graphql`
    fragment postCardFields on SanityPost {
      id
      title
      slug {
        current
      }
      publishedAt
      previewImages: images {
        asset {
          ...postCardImageFields
        }
      }
    }
  `
  const postPath = getPostPath({publishedAt, slug})
  const image = previewImages && previewImages[0]
  return (
    <Grid gap={0} columns={[1, 2]} sx={{}}>
      <Grid sx={{order: [0, 1]}}>
        <Image image={image} link={postPath} />
      </Grid>
      <Box
        p={4}
        sx={{
          display: 'grid',
          order: [1, 0],
          gap: 0,
          minHeight: ['200px', '300px'],
          alignItems: 'center',
        }}
      >
        <Title title={title} link={postPath} />
      </Box>
    </Grid>
  )
}
