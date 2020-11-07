/** @jsx jsx */
import {graphql} from 'gatsby'
import Sticky from 'react-sticky-el'
import {Box, Grid, jsx} from 'theme-ui'
//import {getProductPath} from '../helpers'
import {Player} from '../../Releases/Release'
import {Body} from './Body'
import {Buy} from './Buy'
import {Images} from './Images'
import {Price} from './Price'
import {Title} from './Title'

export const Product = ({
  title,
  slug: {current: slug},
  price,
  _rawBody,
  images,
  release: {bandcampId},
  paypalButtons,
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

  return (
    <Grid
      as="article"
      gap={0}
      columns={[1, 1, 2, '1fr 2fr 1fr']}
      className="scrollarea"
    >
      <Box
        sx={{
          color: 'white',
          bg: 'red.1',
          p: 3,
          height: 'full',
        }}
      >
        <Sticky scrollElement=".scrollarea">
          <Title title={title} />
          {_rawBody && <Body raw={_rawBody} />}
          {price && price.value > 0 && <Price price={price.formatted} />}
          {paypalButtons && <Buy paypalButtons={paypalButtons} />}
        </Sticky>
      </Box>
      <Box>
        <Images images={images} />
      </Box>
      <Box sx={{fontSize: '80%', px: [4, 3], display: 'grid'}}>
        {bandcampId && <Player bandcampId={bandcampId} />}
      </Box>
    </Grid>
  )
}
