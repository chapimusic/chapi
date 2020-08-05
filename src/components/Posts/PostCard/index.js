/** @jsx jsx */
// import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Title} from './Title'
import {getPostPath} from '../helpers'
import {VideoThumbnail} from './VideoThumbnail'

export const PostCard = ({
  title,
  slug: {current: slug},
  publishedAt,
  _rawBody,
  previewImages,
  videos,
}) => {
  graphql`
    fragment postCardFields on SanityPost {
      id
      title
      slug {
        current
      }
      publishedAt
      _rawBody
      previewImages: images {
        asset {
          ...postCardImageFields
        }
      }
      ...postVideoThumbnailFields
    }
  `
  const postPath = getPostPath({publishedAt, slug})
  const image = previewImages && previewImages[0]
  const video = videos && videos[0]
  return (
    <li>
      <Grid gap={0} columns={[1]} sx={{}}>
        <Grid>
          {image ? (
            <Image image={image} link={postPath} />
          ) : (
            video && <VideoThumbnail video={video} />
          )}
        </Grid>
        <Box
          p={4}
          sx={{
            display: 'grid',
            gap: 0,
            alignItems: 'center',
          }}
        >
          <Title title={title} link={postPath} />
        </Box>
      </Grid>
    </li>
  )
}
