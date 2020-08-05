/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Body} from './Body'
import {Images} from './Images'
import {Title} from './Title'
import {Date} from './Date'
import {getPostPath} from '../helpers'

export const Post = ({
  title,
  slug: {current: slug},
  images,
  _rawBody,
  publishedAt,
}) => {
  graphql`
    fragment postFields on SanityPost {
      ...postCardFields
      ...postImageFields
      _rawBody
    }
  `
  const postPath = getPostPath({publishedAt, slug})

  return (
    <article>
      <Grid gap={2} columns={[1, 1, 2]}>
        <Box sx={{order: 0}}>
          <Images images={images} />
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
          <Title title={title} link={postPath} />
          <Body raw={_rawBody} />
          <Date date={publishedAt} />
        </Box>
      </Grid>
    </article>
  )
}
