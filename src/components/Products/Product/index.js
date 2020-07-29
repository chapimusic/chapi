/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx} from 'theme-ui'
import {Images} from './Images'
import {getProductPath} from '../helpers'

export const Product = ({
  title,
  slug: {current: slug},
  price,
  _rawBody,
  images,
}) => {
  graphql`
    fragment productFields on SanityProduct {
      ...productCardFields
      ...productImageFields
      _rawBody
    }
  `

  const productPath = getProductPath({slug})

  return (
    <article>
      <Box>
        <Images images={images} />
      </Box>
      <Box></Box>
      <Box>{price && price.formatted}</Box>
    </article>
  )
}
