/** @jsx jsx */
// import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Title} from './Title'
import {getProductPath} from '../helpers'

export const ProductCard = ({
  title,
  slug: {current: slug},
  price,
  previewImages,
}) => {
  graphql`
    fragment productCardFields on SanityProduct {
      id
      title
      slug {
        current
      }
      price {
        value
        formatted
      }
      previewImages: images {
        asset {
          ...productCardImageFields
        }
      }
    }
  `
  const productPath = getProductPath({slug})
  const image = previewImages && previewImages[0]
  return (
    <Grid gap={0} columns={[1, 2]} sx={{}}>
      <Grid sx={{order: [0, 1]}}>
        <Image image={image} link={productPath} />
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
        <Title title={title} link={productPath} />
      </Box>
    </Grid>
  )
}
