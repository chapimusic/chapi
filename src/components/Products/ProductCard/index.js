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
  _rawDescription,
  slug: {current: slug},
  price,
  previewImages,
  paypalButtons,
}) => {
  graphql`
    fragment productCardFields on SanityProduct {
      id
      title
      _rawDescription
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
      paypalButtons {
        france
        world
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
        border: theme => [0, 0, `2px solid ${theme.colors.primary}`],
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
        <Description raw={_rawDescription} />
        <Price price={price.formatted} />
        <Buttons
          moreInfos={productPath}
          paypalButtons={paypalButtons}
          sx={{mt: 2}}
        />
      </Box>
    </Grid>
  )
}
