/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Body} from './Body'
import {Images} from './Images'
import {Videos} from './Videos'
import {Title} from './Title'
import {Date} from './Date'
import {getPostPath} from '../helpers'

export const Post = ({
  title,
  slug: {current: slug},
  images,
  videos,
  _rawBody,
  publishedAt,
}) => {
  graphql`
    fragment postFields on SanityPost {
      ...postCardFields
      ...postImageFields
      ...postVideoFields
    }
  `
  const postPath = getPostPath({publishedAt, slug})

  return (
    <article
      sx={{
        maxWidth: '960px',
        mx: 'auto',
        bg: 'red.1',
        color: 'white',
        p: 4,
        mt: [0, 1, 2, 4],
      }}
    >
      <Grid gap={2} columns={[1, 1, 1]}>
        <Box
          sx={{
            p: 4,
            mb: 2,
            order: [0],
            gridColumnStart: ['auto', 1, 'auto'],
            gridColumnEnd: ['auto', 4, 'auto'],
          }}
        >
          <Date date={publishedAt} />
          <Title title={title} link={postPath} />
          <Body raw={_rawBody} />
        </Box>
        <Box sx={{order: 1}}>
          <Images images={images} />
          <Videos videos={videos} />
        </Box>
      </Grid>
    </article>
  )
}
