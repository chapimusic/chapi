/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx, Styled} from 'theme-ui'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import SEO from '../../components/SEO'
import {Release, Releases} from '../../components/Releases/'
import {Products} from '../../components/Products/'
import {Layout} from '../../components/Layout'
import {mapEdgesToNodes, toPlainText} from '../../lib/helpers'

const ReleasePage = ({data, errors, ...props}) => {
  const {release, products, otherReleases} = data
  const {title, images, _rawBody} = release
  const otherReleasesNodes = mapEdgesToNodes(otherReleases)
  const productNodes = mapEdgesToNodes(products)
  const image =
    images &&
    images.images &&
    images.images[0] &&
    images.images[0].asset.fluid.src
  const body = _rawBody && toPlainText(_rawBody)
  return (
    <Layout {...props}>
      {errors && <Seo title="GraphQL Error" />}
      {release && <Seo title={title} description={body} image={image} />}

      {errors && <GraphQLErrorList errors={errors} />}

      {release && <Release {...release} />}

      {productNodes && productNodes.length > 0 && (
        <Products nodes={productNodes} />
      )}
      {otherReleasesNodes && otherReleasesNodes.length > 0 && (
        <Box p={[4, 4, 5]}>
          <Styled.h3>Autres albums</Styled.h3>
          <Releases nodes={otherReleasesNodes} />
        </Box>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ReleasePage($release: String) {
    release: sanityRelease(id: {eq: $release}) {
      ...releaseFields
    }
    products: allSanityProduct(
      filter: {releases: {elemMatch: {id: {eq: $release}}}}
    ) {
      edges {
        node {
          ...productCardFields
        }
      }
    }
    otherReleases: allSanityRelease(
      filter: {id: {ne: $release}}
      sort: {order: [DESC], fields: [publishedAt]}
      limit: 6
    ) {
      edges {
        node {
          ...releaseCardFields
        }
      }
    }
  }
`

export default ReleasePage
