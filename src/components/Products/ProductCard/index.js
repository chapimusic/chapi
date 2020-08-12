/** @jsx jsx */
// import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Title} from './Title'
import {Description} from './Description'
import {Price} from './Price'
import {Buttons} from './Buttons'
import {getProductPath} from '../helpers'

export const ProductCard = ({
  title,
  description,
  slug: {current: slug},
  price,
  previewImages,
}) => {
  graphql`
    fragment productCardFields on SanityProduct {
      id
      title
      description
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
    <Grid
      gap={0}
      columns={[1, 1, 1, title.includes('Collector') ? 1 : '300px auto']}
      sx={{
        border: theme => `2px solid ${theme.colors.primary}`,
        boxShadow: '2px 6px 14px 0px hsla(0, 0%, 0%, 0.18)',
      }}
    >
      <Box>
        <Image image={image} link={productPath} />
      </Box>
      <Box
        p={4}
        sx={{
          display: 'grid',
          alignContent: 'center',
          bg: 'primary',
          color: 'white',
          //minHeight: ['200px', '300px'],
          //alignItems: 'center',
        }}
      >
        <Title title={title} link={productPath} />
        <Description description={description} />
        <Price price={price.formatted} />
        <Buttons link={productPath} sx={{mt: 2}} />
      </Box>
    </Grid>
  )
}
