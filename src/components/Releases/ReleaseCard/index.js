/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Title} from './Title'
import {getReleasePath} from '../helpers'

export const ReleaseCard = ({
  title,
  slug: {current: slug},
  publishedAt,
  _rawBody,
  previewImages,
}) => {
  graphql`
    fragment releaseCardFields on SanityRelease {
      id
      title
      slug {
        current
      }
      publishedAt
      _rawBody
      previewImages: images {
        asset {
          ...releaseCardImageFields
        }
      }
    }
  `
  const releasePath = getReleasePath({slug})
  const image = previewImages && previewImages[0]
  return (
    <Grid gap={0} columns={[1, 2]} sx={{}}>
      <Grid sx={{order: [0, 1]}}>
        {image && image.asset && image.asset.fluid && (
          <Image image={image} link={releasePath} />
        )}
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
        <Title title={title} link={releasePath} />
      </Box>
    </Grid>
  )
}
