/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
//import {getProductPath} from '../helpers'
import {Player} from '../../Releases/Release'
import {Images} from './Images'
import {Title} from './Title'
import {Body} from './Body'

export const Product = ({
  title,
  slug: {current: slug},
  price,
  _rawBody,
  images,
  release: {bandcampId},
}) => {
  graphql`
    fragment productFields on SanityProduct {
      ...productCardFields
      ...productImageFields
      release {
        ...releaseFields
      }
      _rawBody
    }
  `

  //const productPath = getProductPath({slug})

  return (
    <Grid as="article" gap={0} columns={[1, 2, 3]}>
      <Box>
        <Images images={images} />
      </Box>
      <Box
        sx={{
          color: 'white',
          bg: 'red.1',
          p: 3,
        }}
      >
        <Title title={title} />
        <p>
          <Body raw={_rawBody} />
        </p>
        {price && price.formatted}
      </Box>
      {bandcampId && <Player bandcampId={bandcampId} />}
    </Grid>
  )
}
