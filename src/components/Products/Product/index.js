/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx} from 'theme-ui'
import {Images} from './Images'
//import {getProductPath} from '../helpers'
import {Player} from '../../Releases/Release'

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
    <article>
      <Box>
        <Images images={images} />
      </Box>
      <Box></Box>
      <Box>{price && price.formatted}</Box>
      {bandcampId && <Player bandcampId={bandcampId} />}
    </article>
  )
}
