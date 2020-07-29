/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {getReleasePath} from '../helpers'
import {Body} from './Body'
import {Date} from './Date'
import {Images} from './Images'
import {Player} from './Player'
import {Title} from './Title'

export const Release = ({
  title,
  slug: {current: slug},
  images,
  _rawBody,
  publishedAt,
  bandcampId,
}) => {
  graphql`
    fragment releaseFields on SanityRelease {
      ...releaseCardFields
      ...releaseImageFields
      bandcampId
    }
  `
  const releasePath = getReleasePath({slug})
  return (
    <article>
      <Grid gap={2} columns={[1, 1, 2]}>
        <Box sx={{order: 0}}>
          {images && images.length > 0 && <Images images={images} />}
        </Box>
        <Box
          sx={{
            p: 4,
            mb: 2,
            order: [1, 2, 1],
            gridColumnStart: ['auto', 1, 'auto'],
            gridColumnEnd: ['auto', 4, 'auto'],
          }}
        >
          <Title title={title} link={releasePath} />
          <Body raw={_rawBody} />
          <Date date={publishedAt} />
        </Box>
        <Box sx={{iframe: {height: '100% !important'}}}>
          {bandcampId && <Player album={bandcampId} />}
        </Box>
      </Grid>
    </article>
  )
}
