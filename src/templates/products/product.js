/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx, Styled} from 'theme-ui'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import SEO from '../../components/SEO'
import {Product, Products} from '../../components/Products/'
import {Layout} from '../../components/Layout'
import {mapEdgesToNodes, toPlainText} from '../../lib/helpers'

const ProductPage = ({data, errors, ...props}) => {
  const {product, otherProducts} = data
  const {title, images, _rawBody} = product
  const otherProductsNodes = mapEdgesToNodes(otherProducts)
  const image =
    images &&
    images.images &&
    images.images[0] &&
    images.images[0].asset.fluid.src
  const body = _rawBody && toPlainText(_rawBody)
  return (
    <Layout {...props}>
      {errors && <Seo title="GraphQL Error" />}
      {product && <Seo title={title} description={body} image={image} />}

      {errors && <GraphQLErrorList errors={errors} />}

      {product && <Product {...product} />}

      {otherProductsNodes && otherProductsNodes.length > 0 && (
        <Box p={[4, 4, 5]}>
          <Styled.h3>Autres produits</Styled.h3>
          <Products nodes={otherProductsNodes} />
        </Box>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ProductPage($product: String) {
    product: sanityProduct(id: {eq: $product}) {
      ...productFields
    }
    otherProducts: allSanityProduct(filter: {id: {ne: $product}}, limit: 6) {
      edges {
        node {
          ...productCardFields
        }
      }
    }
  }
`

export default ProductPage
